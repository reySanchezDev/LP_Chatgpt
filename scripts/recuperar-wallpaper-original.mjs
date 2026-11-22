import { chromium } from "playwright-core";
import { mkdir, writeFile, copyFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { join, dirname, resolve, extname } from "node:path";
import { fileURLToPath } from "node:url";

const root=resolve(dirname(fileURLToPath(import.meta.url)),"..");
const url="https://la-sazon-de-sheyla-nindiri.gracefulglobe8.chatgpt.site/";
let browser;
try {
  browser=await chromium.launch({channel:"chrome",headless:true,args:["--no-sandbox"]});
  const context=await browser.newContext({viewport:{width:1440,height:900}});
  const page=await context.newPage();
  const response=await page.goto(url,{waitUntil:"domcontentloaded",timeout:45000});
  await page.waitForTimeout(5000);
  const title=await page.title();
  const body=(await page.locator("body").innerText()).slice(0,600);
  console.log("SITE:",page.url(),response?.status(),title,body.slice(0,180));
  if(!response?.ok() || !/sheyla|saz[oó]n/i.test(title+" "+body))throw Error("No se pudo verificar que la página es el sitio publicado");
  const estilos=await page.evaluate(()=>{
    const data=[];
    for(const el of document.querySelectorAll("*")){
      const r=el.getBoundingClientRect();
      if(r.width<180||r.height<120)continue;
      const sec=el.closest("section")||el.closest("header")||el.closest("main");
      for(const pseudo of ["","::before","::after"]){
        const cs=getComputedStyle(el,pseudo||null);
        if(cs.backgroundImage==="none" && cs.maskImage==="none")continue;
        data.push({selector:(el.id?"#"+el.id:el.tagName.toLowerCase()+"."+String(el.className||"").slice(0,80)),
          pseudo,seccion:String(sec?.id||sec?.className||sec?.tagName||"").slice(0,120),
          texto:String(sec?.innerText||el.innerText||"").slice(0,170).replace(/\s+/g," "),
          ancho:Math.round(r.width),alto:Math.round(r.height),
          fondo:cs.backgroundImage,mascara:cs.maskImage,opacidad:cs.opacity,
          tamano:cs.backgroundSize,posicion:cs.backgroundPosition,repeticion:cs.backgroundRepeat});
      }
    }
    return data;
  });
  const urls=new Map();
  for(const e of estilos)for(const m of (e.fondo+" "+e.mascara).matchAll(/url\(\s*(?:"([^"]*)"|'([^']*)'|([^)]*))\s*\)/g)){
    const raw=(m[1]||m[2]||m[3]||"").trim();if(!raw)continue;
    if(!urls.has(raw))urls.set(raw,[]);
    urls.get(raw).push(e);
  }
  console.log("Estilos:",estilos.length,"Recursos CSS únicos:",urls.size);
  const descargados=[];
  await mkdir(join(root,"assets","recuperados-chatgpt-site"),{recursive:true});
  for(const [raw,usos] of urls){
    try{
      let bytes,mime,origen=raw;
      if(raw.startsWith("data:")){
        const idx=raw.indexOf(",");if(idx<0)continue;
        const header=raw.slice(0,idx);
        mime=header.match(/^data:([^;,]+)/)?.[1]||"";
        bytes=/;base64/.test(header)?Buffer.from(raw.slice(idx+1),"base64"):Buffer.from(decodeURIComponent(raw.slice(idx+1)),"utf8");
        origen="CSS data URI";
      }else{
        const full=new URL(raw,page.url()).href;
        const res=await context.request.get(full,{timeout:20000});
        if(!res.ok())throw Error("HTTP "+res.status());
        mime=(res.headers()["content-type"]||"").split(";")[0];
        bytes=await res.body();origen=full;
      }
      if(!mime.startsWith("image/")||bytes.length>20000000)continue;
      const ext=({"image/svg+xml":".svg","image/png":".png","image/jpeg":".jpg","image/webp":".webp","image/avif":".avif","image/gif":".gif"})[mime]||".bin";
      const hash=createHash("sha256").update(bytes).digest("hex");
      const nombre="assets/recuperados-chatgpt-site/"+hash.slice(0,20)+ext;
      await writeFile(join(root,nombre),bytes);
      descargados.push({archivo:nombre,sha256:hash,mime,bytes:bytes.length,origen,usos});
      console.log("RECUPERADO",nombre,"USOS",usos.length);
    }catch(e){console.log("ERROR recurso",raw.slice(0,100),String(e).slice(0,150));}
  }
  // Se selecciona solo si la evidencia señala un recurso inequívoco.
  const fuertes=descargados.filter(a=>{
    const contenido=a.usos.map(x=>x.texto+" "+x.seccion).join(" ").toLowerCase();
    return /fideos|pasta|verdura|wallpaper|noodle/i.test(a.origen)
      || (a.usos.length>=2 && /cocina/.test(contenido) && /historia|inicio|hero|bienvenid/.test(contenido));
  });
  let original=null;
  if(fuertes.length===1){
    original=fuertes[0];
    const destino="assets/fondos/wallpaper-chatgpt-site-original"+extname(original.archivo);
    await mkdir(join(root,"assets","fondos"),{recursive:true});
    await copyFile(join(root,original.archivo),join(root,destino));
    original.destino=destino;
    console.log("WALLPAPER ORIGINAL RECUPERADO",destino,original.sha256);
  }else console.log("No se identificó wallpaper inequívoco. Candidatos fuertes:",fuertes.length);
  const doc={fecha:new Date().toISOString(),sitio:url,titulo:title,http:response.status(),
    recursoOriginal:original?.destino||null,descargados,estilosCSS:estilos};
  await mkdir(join(root,"docs"),{recursive:true});
  await writeFile(join(root,"docs","RECUPERACION_WALLPAPER.json"),JSON.stringify(doc,null,2));
  await writeFile(join(root,"docs","RECUPERACION_WALLPAPER.md"),
    "# Recuperación del wallpaper de ChatGPT Sites\n\n"
    + "Referencia: "+url+"\n\nEstado: "+(original?"RECUPERADO":"PENDIENTE DE IDENTIFICACION")+"\n\n"
    + "Recurso identificado: "+(original?.destino||"ninguno todavía")+"\n\n"
    + "SHA256: "+(original?.sha256||"sin dato")+"\n\n"
    + "Véase RECUPERACION_WALLPAPER.json para los fondos CSS observados, sin recreaciones.\n");
  if(!descargados.length)console.log("NINGUNA IMAGEN CSS: posible fondo implementado en CSS o canvas");
} catch(e){console.error("ERROR RECUPERACIÓN",e.stack||String(e));process.exitCode=2;}
finally{await browser?.close();}
