# Exportación de ChatGPT Sites — bloqueo y ruta de resolución

## Lo que se pudo realizar el 2026-11-21

- Se confirmó permiso de escritura sobre `reySanchezDev/LP_Chatgpt`.
- Se guardaron las imágenes y logotipos auténticos disponibles en Google Drive.
- Se documentaron decisiones de diseño históricas y reglas de comparación.
- **No se logró acceder al código original del Site** a través de la URL publicada: el acceso desde la sesión de transferencia no retornó su HTML/CSS/JS; el navegador conectado tampoco estuvo disponible.

## Procedimiento recomendado para Codex

1. En ChatGPT, abrir **Sites** (https://chatgpt.com/sites) y localizar el proyecto asociado a https://la-sazon-de-sheyla-nindiri.gracefulglobe8.chatgpt.site/.
2. Desde el contexto del Site original, usar Codex para **exportar el proyecto y todos sus assets**. El Help Center de OpenAI señala expresamente que se puede pedir a Codex exportar el código del Site: https://help.openai.com/en/articles/20001339-creating-and-using-chatgpt-sites.
3. Depositar archivos exportados en `reference/site-original/`, sin alteraciones, y registrar versión y manifiesto.
4. Recién entonces iniciar conversión Astro en la raíz y QA lado a lado.
5. Si Codex solo tiene acceso a GitHub, pero no al Site, **el acceso al código original sigue siendo un bloqueo real**. Se necesita ejecutar la exportación en el contexto de Sites y agregar los archivos al repositorio; no existe en este paquete un source exportado.

## Prompt operativo para Codex

```text
Trabajá en el repositorio reySanchezDev/LP_Chatgpt.
Leé AGENTS.md y todos los docs antes de modificar la estructura.
La URL de referencia es https://la-sazon-de-sheyla-nindiri.gracefulglobe8.chatgpt.site/.

PRIORIDAD 1: exportá el código fuente, CSS, JS, tipografías, imágenes, iconos y configuración del ChatGPT Site original; guardá ese material sin cambios bajo reference/site-original/ con su procedencia. Si no tenés acceso autorizado al sitio/proyecto Sites, registrá ese bloqueo explícito y no afirmés haber obtenido el original.

PRIORIDAD 2: migrá el código REAL a Astro con fidelidad visual/funcional completa y recursos locales, no recreés un diseño similar desde descripciones. Preservá la marca, los últimos ajustes aprobados y los assets ya versionados.

PRIORIDAD 3: compilá en producción, verificá responsive, animaciones, CTA, navegación y prepará comparaciones capturadas en desktop y móvil. Documentá el QA final y cualquier diferencia pendiente. No desplegués ni sustituyás la producción actual sin autorización.
```
