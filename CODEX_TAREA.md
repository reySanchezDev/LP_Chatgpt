# Tarea única para Codex — trasladar el ChatGPT Site a Astro

**Estado inicial comprobado el 2026-11-21: TRANSFERENCIA PARCIAL.** El repositorio tiene 13 recursos auténticos del negocio y reglas de diseño, pero **NO contiene el código fuente ni los archivos generados originales de ChatGPT Sites**. No declarar equivalencia completa antes de exportarlos y comprobarla.

## Resultado exigido

Crear un proyecto Astro de producción que replique **la versión publicada existente** en:

https://la-sazon-de-sheyla-nindiri.gracefulglobe8.chatgpt.site/

No rediseñar. No generar una aproximación visual. No inventar imágenes, logotipo, textos, redes sociales, teléfono o dirección. La referencia desplegada y el origen exportado tienen precedencia sobre cualquier interpretación del agente.

## Orden obligatorio

1. Leer `AGENTS.md`, `README.md`, todos los archivos en `docs/` y `docs/MANIFIESTO_RECURSOS.json`.
2. **Exportación del original:** abrir el proyecto propietario en ChatGPT Sites (preferiblemente desde el chat en que se creó), pedir a Codex la exportación **íntegra del código fuente del Site** y recuperar código, CSS, JS, fuentes, imágenes, fondos, iconos, rutas, metadata, configuraciones y otros recursos públicos. **La URL publicada no equivale a acceso al proyecto fuente.** Si esta ejecución de Codex solo ve GitHub, reportar el bloqueo sin fabricar archivos de origen y solicitar exportación desde el entorno de Sites. Documentación oficial: https://help.openai.com/en/articles/20001339-creating-and-using-chatgpt-sites
3. Conservar la exportación **sin editar** en `reference/site-original/`, actualizar `docs/PROCEDENCIA_EXPORTACION.md` con fecha, versión identificable, fuente autorizada, archivos, SHA-256 y cualquier limitación. No guardar secretos, credenciales, env vars reales ni datos privados.
4. Ejecutar `node scripts/verificar-transferencia.mjs`. No modificar los 13 originales de `assets/`. Comparar los archivos exportados contra ellos para determinar qué se usa realmente y qué assets adicionales deben incorporarse a `public/`.
5. Convertir la implementación REAL a Astro en la raíz del repo. Refactorizar solo si no altera composición, proporciones, tipografía, espaciados, colores, responsive, DOM observable, transiciones, tiempos ni interacciones. Guardar todas las dependencias estáticas en el proyecto para no depender del dominio `chatgpt.site`.
6. Verificar exhaustivamente anclas, navbar y scroll, CTA de domicilio, galería, redes, imágenes, accesibilidad, animaciones en pantalla y `prefers-reduced-motion`. Horarios: L–J 10 a 22 h; V–D 10 a 23 h. Mantener «Nuestra historia», **no recuperar «Historias de Nindirí»**, mantener el wallpaper de fideos/verduras full-width y el crédito enlazado a Quantix.
7. Comprobar `npm ci`, `npm run build` y `npm run preview` en modo producción. Si procede, `npx astro check`. Ejecutar también `node scripts/verificar-transferencia.mjs --require-original`.
8. Comparar **capturas completas** original vs Astro con la misma URL/ruta, scroll, viewport y estado: 1920×1080, 1440×900, 1024×768, 768×1024, 390×844 y 360×800; comprobar navegación móvil, fotos y animaciones. Registrar comparativas, diferencias y su corrección en `docs/QA_MIGRACION.md`. El propietario hace el QA visual final.
9. Abrir PR (o preparar el cambio para revisión) con un resumen honesto de evidencia, capturas, comandos ejecutados, compromisos faltantes y blockers. **No publicar ni modificar el Site original** ni cambiar DNS sin autorización.

## Reglas de decisión

- Si falta fuente original: **detener la conversión que afirme fidelidad**, aunque sí se pueden preparar scripts e inventarios. No hay base para declarar «idéntica».
- Si se logra exportar, el sitio real tiene prioridad. La documentación actual enumera decisiones históricas para ayudar a detectar regresiones.
- No regenerar el wallpaper, fotografías ni logotipo para simular equivalencia.
- No sustituir placeholders con falsos enlaces a Facebook, TikTok, WhatsApp o mapas.
- `sazoncheyla.com` es el dominio esperado para pedir a domicilio según el handoff; verificar el enlace real al exportar.
- Evitar introducir nuevas librerías, fuentes o estilos que alteren la apariencia, salvo necesidad técnica documentada.
- Si hay diferencias funcionales imposibles de eliminar, documentarlas con evidencia y solicitar aceptación; nunca declarar QA aprobado por cuenta del propietario.

## Evidencia de partida

- `docs/MANIFIESTO_RECURSOS.json`: 13 imágenes con tamaño y Git blob SHA.
- `node scripts/verificar-transferencia.mjs`: verificación local sin dependencias.
- `docs/REFERENCIA_VISUAL.md`: decisiones aprobadas.
- `docs/CRITERIOS_ACEPTACION.md`: criterios de cierre.
- `docs/PASOS_EXPORTACION.md`: cómo desbloquear la exportación.
- `docs/PROCEDENCIA_EXPORTACION.md`: estado del acceso original.

**Definición de terminado:** proyecto Astro compilable, exportación original versionada, recursos locales exactos y paridad visual/funcional demostrada. Solo el propietario autoriza la puesta en producción.
