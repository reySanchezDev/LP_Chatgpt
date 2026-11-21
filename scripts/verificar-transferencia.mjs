#!/usr/bin/env node
// Verifica los archivos auténticos entregados a Codex, sin instalar dependencias.
// Uso: node scripts/verificar-transferencia.mjs [--require-original]
import { createHash } from "node:crypto";
import { readFile, readdir } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const raiz = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const manifiesto = JSON.parse(await readFile(join(raiz, "docs/MANIFIESTO_RECURSOS.json"), "utf8"));
const errores = [];
let total = 0;

for (const archivo of manifiesto.activos_verificados) {
  if (!archivo.path.startsWith("assets/") || archivo.path.includes("..")) {
    errores.push("Ruta no permitida: " + archivo.path);
    continue;
  }
  let datos;
  try {
    datos = await readFile(join(raiz, archivo.path));
  } catch {
    errores.push("Falta recurso: " + archivo.path);
    continue;
  }
  const gitBlob = createHash("sha1")
    .update("blob " + datos.byteLength + "\0")
    .update(datos)
    .digest("hex");
  if (datos.byteLength !== archivo.bytes) {
    errores.push("Tamaño distinto: " + archivo.path);
  }
  if (gitBlob !== archivo.git_blob_sha1) {
    errores.push("Contenido modificado: " + archivo.path);
  }
  total += 1;
}

let originales = [];
try {
  originales = (await readdir(join(raiz, "reference/site-original"), { recursive: true }))
    .filter((nombre) => !nombre.endsWith("/") && !nombre.endsWith(".gitkeep"));
} catch {
  // La exportación aún no existe; no sustituirla por una maqueta.
}
const origenDisponible = originales.length > 0;
if (process.argv.includes("--require-original") && !origenDisponible) {
  errores.push("Falta exportar el código de ChatGPT Sites en reference/site-original/");
}

console.log("Recursos reales verificados: " + total + "/" + manifiesto.activos_verificados.length);
console.log("Código exportado del Site: " + (origenDisponible ? "hay archivos; comprobar procedencia" : "PENDIENTE"));
if (errores.length) {
  for (const error of errores) console.error("ERROR: " + error);
  process.exitCode = 1;
} else {
  console.log("Integridad del paquete de recursos: OK");
}
