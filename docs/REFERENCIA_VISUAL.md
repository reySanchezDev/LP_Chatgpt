# Referencia visual y funcional aprobada

**Referencia primaria:** https://la-sazon-de-sheyla-nindiri.gracefulglobe8.chatgpt.site/

**Proveniencia de estas notas:** instrucciones de mejora impartidas por el propietario en las conversaciones de noviembre de 2026. Son una especificación complementaria, **NO sustituyen el código ni capturas de la versión publicada**.

## Identidad

- Marca: La Sazón de Sheyla, rincón familiar de Nindirí, Nicaragua.
- Logotipo real: verde bosque/dorado, gorro de chef, hojas y cubiertos; usar el PNG con fondo transparente.
- Lenguaje visual: marfil cálido, verde profundo, acentos terracota, oro; elegante y acogedor, no recargado.
- **No inferir valores CSS exactos** a partir de estas descripciones; recuperarlos del proyecto original.
- Fondos culinarios: wallpaper muy transparente de fideos y verduras visible **a lo ancho completo** en cabecera y secciones «Nuestra cocina» y «Nuestra historia». No solo ornamentos en bordes.
- Los títulos de secciones deben ser grandes, legibles, consistentes en tamaño y familia tipográfica, sin rayas/prefijos ni guiones.

## Secciones/ajustes finales

| Área | Estado solicitado |
| --- | --- |
| Cabecera/hero | Mantener estructura y copy del sitio publicado; incorporar wallpaper culinario sin afectar legibilidad |
| Navbar | Visible y estable al hacer scroll; navegación clara |
| Nuestra historia | **Conservar** |
| Historias de Nindirí | **Eliminar por completo** |
| Nuestra cocina | Sin foto encima del título; fondo culinario de todo el ancho; título uniforme |
| Galería | Mantener galería original; eliminar el subtítulo/texto que el usuario indicó debajo del encabezado |
| Pedí a domicilio | CTA visualmente atractivo, con animación continua/discreta mientras visible; enlaza a sazoncheyla.com |
| Horarios | L–J 10:00–22:00; V–D 10:00–23:00, hora Nicaragua |
| Sigue a La Sazón de Sheyla | Bloque alto con composición editorial nombre/logotipo, presencia TikTok, Facebook, WhatsApp; respetar exactamente la versión publicada |
| Footer | Crédito de sitio a Quantix Software, enlace a https://www.quantix.software; no recuperar relleno eliminado |

## Comportamientos de interacción

1. Botón de domicilio: el efecto no debe limitarse a una animación de aparición; activo mientras la sección esté a la vista (última implementación descrita: pulso ~2.8 s). Pausar fuera de pantalla. Respetar `prefers-reduced-motion`.
2. Encabezado y scroll: no ocultar el navbar al deslizar ni impedir acceso a contenido.
3. Todos los CTA y enlaces deben ser explícitos y funcionales. No exponer enlaces sociales de ejemplo.
4. No instalar una tienda virtual en esta landing; el pedido va a un sitio externo.
5. Preservar sombras, bordes, transiciones, puntos de quiebre y jerarquía exactamente desde la versión exportada.

## Riesgos para la fidelidad

- No se cuenta en este paquete con el source de ChatGPT Sites ni con la imagen original del wallpaper. No redibujarla arbitrariamente y afirmar que es la original.
- El texto de «Modernización inició…» usó una fecha inventada como demostración de composición; distinguir contenido de prueba del real.
- Una portada en Drive se titula `Portada_Google_Maps_Restaurada_2160x1216.jpg`; el nombre de archivo **no demuestra** que sea el fondo del hero. Comparar con la referencia real.
- Rechazar rediseños sugeridos durante la migración; registrar observaciones aparte para una iteración futura.
