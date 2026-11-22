# Wallpaper de fideos y verduras — estado de recuperación

Fecha de diagnóstico: 2026-11-21 (hora de Nicaragua).

## Resultado

**NO RECUPERADO.** No existe archivo de wallpaper original confirmado en el repositorio y no se fabricó un reemplazo.

Se intentó inspeccionar el Site publicado `https://la-sazon-de-sheyla-nindiri.gracefulglobe8.chatgpt.site/` con Chromium desde GitHub Actions, desde una ejecución con acceso a Internet:
- Ejecución y evidencia: https://github.com/reySanchezDev/LP_Chatgpt/actions/runs/44979835550
- Resultado HTTP: **401 — Sign in required**.
- Contenido recibido: página de autenticación «Continue with ChatGPT», no HTML/CSS del sitio.
- Por ello, no se pudieron descargar recursos originales ni validar su SHA-256.
- Drive no mostró una imagen independiente identificable como wallpaper por nombre «wallpaper», «fideos», «verduras» o «fondo cocina».

## Fuente de verdad y especificación

El wallpaper se creó dentro del ChatGPT Site, como fondo marfil muy tenue con **fideos largos y verduras en tonos oliva/ocre**, distribuidos a todo el ancho de «Nuestra historia» y «Nuestra cocina», y luego reutilizados en el encabezado. Debe conservar el dibujo, color, transparencia, escala y distribución originales.

No hay URL de asset ni ruta de archivo registradas en el historial; puede tratarse de SVG embebido, CSS, una imagen binaria u otro recurso. **No asumir que existe un PNG descargable.**

## Desbloqueo seguro desde el Site propietario (prioridad 0 de Codex)

1. Entrar a https://chatgpt.com/sites con la cuenta propietaria y abrir **La Sazón de Sheyla** en modo edición; o retomar el chat original que creó el Site.
2. Desde allí, pedir a Codex que **exporte el código fuente original** (documentado oficialmente en https://help.openai.com/en/articles/20001339-creating-and-using-chatgpt-sites) y localice la implementación exacta de este wallpaper.
3. Si es imagen, copiar los bytes sin cambios a `assets/fondos/wallpaper-chatgpt-site-original.<ext>`.
4. Si es SVG o CSS embebido, extraer el SVG o las reglas/assets CSS exactos a `assets/fondos/`, preservando su renderizado original. Documentar qué selectores deben aplicarse a hero, historia y cocina.
5. Registrar URL/ruta real, uso y SHA-256 en este archivo y `docs/MANIFIESTO_RECURSOS.json`.
6. Comparar visualmente con el Site propietario antes de afirmar «recuperado». No publicar cambios en el Site original.

## Alternativa condicional

`scripts/recuperar-wallpaper-original.mjs` y el workflow `.github/workflows/recuperar-wallpaper.yml` permiten inspeccionar fondos CSS si el sitio queda accesible para el runner, pero **no autorizan hacer pública la landing ni exponer información solo para extraer un recurso**. Preferir exportación autenticada dentro de Sites.

## Estado verificable actual

- Assets originales de negocio: 13, sin cambios.
- Wallpaper del Site: pendiente de exportación; no se agregó copia inventada.
