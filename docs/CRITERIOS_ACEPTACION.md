# Criterios de aceptación de la migración Astro

## Puerta 0 — origen real

- [ ] Se identifica versión exacta del proyecto publicado de ChatGPT Sites.
- [ ] Se exportan componentes/código fuente original, estilos, scripts, tipografías y assets; queda constancia de su procedencia.
- [ ] Se conserva el original intacto en `reference/site-original/`. Si es imposible, se registra el bloqueo y **no se declara equivalencia exacta**.

## Puerta 1 — Astro

- [ ] Proyecto Astro real con dependencias gestionadas y scripts de ejecución.
- [ ] Build de producción exitoso, sin errores de compilación ni enlaces rotos.
- [ ] Assets finales servidos localmente sin dependencia del dominio `chatgpt.site`.
- [ ] No se publican secretos, credenciales o datos internos.
- [ ] SEO, canonical y metadatos acordes al nuevo dominio cuando se defina.

## Puerta 2 — fidelidad visual

- [ ] Captura comparativa a 1440×900 y 1920×1080.
- [ ] Captura comparativa a 1024×768 y 768×1024.
- [ ] Captura comparativa a 390×844 y 360×800.
- [ ] Mismas posiciones, tamaños, tipografías, color, espaciado, bordes, fotografías, fondos y composición en todas las secciones.
- [ ] Los detalles no recreables desde la documentación se copian del original, no se improvisan.
- [ ] No existe desbordamiento horizontal ni elementos tapados en móvil.
- [ ] Se presentan diferencias encontradas con evidencias reproducibles en `docs/QA_MIGRACION.md` y se corrigen antes del cierre.

## Puerta 3 — fidelidad funcional

- [ ] Navbar visible, navegación/anclas correctas y scroll estable.
- [ ] «Nuestra historia» presente; «Historias de Nindirí» ausente.
- [ ] «Nuestra cocina» sin foto encima del título; wallpaper full-width como en original.
- [ ] Galería y bloque «Sigue a La Sazón de Sheyla» idénticos.
- [ ] Horarios L–J 10–22; V–D 10–23.
- [ ] CTA domicilio dirige al sitio externo esperado y conserva efecto mientras visible.
- [ ] Footer incluye crédito/enlace a Quantix Software.
- [ ] Estados hover, focus, teclado, enlaces externos y `prefers-reduced-motion` correctos.
- [ ] Enlaces reales de redes y mapa verificados; no hay datos ficticios.
- [ ] Prueba en teléfono real o emulación de navegador; vídeo/capturas de animaciones.

**Definición de terminado:** el propietario puede comparar Astro vs. ChatGPT Site y no detectar cambios de diseño o comportamiento significativos. Solo el propietario aprueba el QA visual final.
