> **Punto de entrada obligatorio para Codex:** leer primero [CODEX_TAREA.md](CODEX_TAREA.md); la exportación de ChatGPT Sites es requisito previo. Verificación de recursos: `node scripts/verificar-transferencia.mjs`. **No declarar el sitio migrado antes de acceder al código original y superar QA.**

# Instrucciones para Codex — La Sazón de Sheyla

## Misión y criterio principal

Convertir la **versión actual publicada del ChatGPT Site** a un proyecto **Astro mantenible** sin cambiar su diseño, identidad visual, textos, composición, recursos, movimientos ni comportamiento. **No diseñar una landing nueva.** Trabajar hasta conseguir paridad visual y funcional comprobada.

**Sitio de referencia inmutable durante la migración:** https://la-sazon-de-sheyla-nindiri.gracefulglobe8.chatgpt.site/

**Importante: este repositorio es un paquete de transferencia parcial, no un volcado de código.** Contiene recursos originales de Drive y decisiones aprobadas, pero NO tiene todavía los HTML/CSS/JS/componentes de la versión publicada. El paso prioritario y obligatorio es la **exportación del proyecto original desde ChatGPT Sites mediante Codex**. La documentación oficial de ChatGPT Sites indica que se puede pedir a Codex exportar el código fuente (https://help.openai.com/en/articles/20001339-creating-and-using-chatgpt-sites). Si este entorno no tiene acceso autorizado al proyecto Sites, informar claramente del bloqueo y solicitar que se exporte desde el ChatGPT Site original. **No declarar paridad ni inventar código original.**

## Flujo de ejecución

1. Identificar el proyecto ChatGPT Site propietario de la URL, confirmar su versión de producción y obtener **exportación íntegra**: código, estilos, archivos públicos, fuentes, imágenes, iconos, scripts y configuración que pueda exportarse.
2. Conservar copia sin editar en `reference/site-original/`, con inventario SHA-256 y documento de procedencia. No incluir secretos, tokens ni datos personales.
3. Crear Astro actual estable en la raíz del repo, separar componentes de manera mantenible **sin cambiar el DOM y CSS observables** salvo lo estrictamente necesario.
4. Utilizar los 13 archivos originales ya preservados en `assets/`. No confundir todos esos recursos con los que el sitio está usando: contrastar con la exportación; conservar cualquiera de los assets reales del Site que no estén en Drive.
5. Asegurar que enlaces, anclas, navegación, animaciones, hover/focus, scroll, galería, responsive y reducción de movimiento se comporten igual.
6. Ejecutar `astro check` (si se configura), compilación de producción, pruebas de enlaces y captura/comparación de pantallas de ambas versiones. Dejar evidencia en `docs/QA_MIGRACION.md` con diferencias y su resolución.
7. No sustituir el sitio publicado por la versión Astro sin autorización expresa del propietario. Esta solicitud es para migrar el código al repositorio.

## Decisiones de diseño y contenido que no se deben deshacer

- Identidad: **La Sazón de Sheyla**, restaurante familiar de Nindirí; tonos marfil, terracota, verde oscuro y detalles dorados. Usar el logo real de `assets/originales/`.
- Es una **landing informativa**, no plataforma de pedidos. El CTA de domicilio debe abrir el sitio de pedidos existente `https://sazoncheyla.com`; conservar cualquier otra URL real observada en la versión exportada y documentar discrepancias.
- **Nuestra historia** permanece. **Historias de Nindirí** debe estar eliminada. No confundirlas.
- **Nuestra cocina**: sin fotografía decorativa inmediatamente arriba del encabezado. Títulos de secciones grandes, uniformes en familia/tamaño y **sin guiones ni líneas al inicio**.
- El background de fideos con verduras, tipo marca de agua, se solicitó en la cabecera y extendido por **todo el ancho** de las secciones de cocina e historia, no solo en sus bordes. Copiar su arte exacto de la exportación.
- El encabezado/navbar debe mantenerse visible y funcionar correctamente al desplazarse; evitar superposiciones.
- Botón **Pedí/Pedir a domicilio**: efecto elegante y perceptible **mientras el botón esté a la vista**, no solamente al entrar en la sección. La iteración publicada describe un pulso cada ~2.8 segundos con pausa fuera de pantalla y para `prefers-reduced-motion`; corroborar la implementación exacta exportada.
- Horarios: lunes a jueves 10:00 a. m.–10:00 p. m.; viernes a domingo 10:00 a. m.–11:00 p. m.
- Galería: no regresar el texto secundario que fue eliminado debajo de su título.
- Redes: sección **Sigue a La Sazón de Sheyla** con TikTok, Facebook y WhatsApp; la última versión aprobada buscaba un bloque editorial alto, nombre destacado a la izquierda y logo a la derecha. No inventar perfiles/enlaces.
- Footer: retirar el texto anterior que el cliente marcó; sustituir por crédito a `https://www.quantix.software`, con enlace funcional.
- Cualquier frase del tipo **Modernización inició [fecha]** se agregó como demostración visual con una fecha inventada: **no publicarla como hecho real** sin validación; si está en el original, preservarla durante la equivalencia y marcarla para revisión de contenido.

## Reglas de fidelidad

- Fuente primaria de verdad: código y referencia visual **del Site desplegado**, no esta descripción.
- La migración no es una oportunidad para rediseñar copy, márgenes, cards, estilos o paleta.
- No usar fotos de stock ni reemplazar logotipos.
- No inventar cuentas sociales, número de WhatsApp, coordenadas, dirección física exacta ni fechas.
- Mantener estados desktop/tablet/móvil y accesibilidad: teclado, focus visible, contraste, alt descriptivo y `prefers-reduced-motion`.
- Mantener títulos y contenidos definitivos en español Nicaragua; preservar SEO y analytics existentes cuando sea aplicable y esté permitido.

## Entrega verificable

- Código Astro y `package.json` con `npm run dev`, `npm run build` y `npm run preview` operativos.
- `reference/site-original/` y `docs/PROCEDENCIA_EXPORTACION.md` con código de origen y versión, **si se pudo exportar**.
- `docs/QA_MIGRACION.md` con comparativas lado a lado de desktop/móvil, diferencias residuales y evidencia de build.
- Recursos locales sin dependencias efímeras del hosting del ChatGPT Site.
- Un solo resultado final, no abrir rediseños ni preguntas innecesarias. Si falta acceso al Site, documentar el bloqueo real.
