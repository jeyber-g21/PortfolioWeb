# Portafolio de Jeyber Gómez

La especificación completa está en `_privado/PORTFOLIO-SPEC.md` (local, no está en el repo). Léela antes de
escribir código y respétala. Si algo contradice este archivo, gana el spec.

@AGENTS.md

## Qué es esto
Portafolio personal estático, bilingüe (ES/EN), con inicio-resumen y páginas
propias (Proyectos, Experiencia, Sobre mí, Contacto) en rutas localizadas, construido con Next.js 16
(App Router), TypeScript, Tailwind 4, next-intl y next-themes.
Audiencia: reclutadores técnicos. Objetivo: comunicar nivel profesional
en menos de 90 segundos.

## Reglas no negociables

1. **Server Components por defecto.** `'use client'` solo en el toggle de
   tema, el selector de idioma, los enlaces del navbar (`NavLinks`, necesita la
   ruta activa para `aria-current`) y el envoltorio `ThemeProvider` de
   next-themes (desactiva su script en el cliente) y `ProjectGallery` (carrusel
   de capturas: necesita saber qué imagen está visible). Las animaciones no necesitan cliente:
   transiciones con `<ViewTransition>` de React y `reveal` en CSS puro. Si
   añades otro, justifícalo en el PR.
2. **Nada de texto quemado en componentes.** Todo string visible sale de
   `i18n/messages/{es,en}.json` o de `src/content/`.
3. **Los tokens de diseño están en `globals.css` bajo `@theme`.** Nunca
   escribas un valor de color, de tamaño de fuente o de espaciado
   directamente en una clase. Si falta un token, añádelo al tema.
4. **El modo oscuro es una paleta propia, no una inversión.** Los valores
   están en la sección 9.3 del spec. No los recalcules.
5. **Accesibilidad es criterio de aceptación, no mejora.** WCAG 2.2 AA.
   Foco visible siempre, `prefers-reduced-motion` respetado, jerarquía de
   encabezados correcta, alt descriptivos.
6. **Sin librerías de componentes.** Los componentes de `ui/` son propios.
   La única dependencia de UI permitida es `lucide-react` para iconos,
   importados uno a uno.
7. **Lee la sección 17 del spec antes de proponer cualquier efecto visual.**
8. **No inventes contenido.** Si falta un dato (una métrica, el nombre de
   una empresa, la descripción de un proyecto), déjalo como
   `TODO: [PENDIENTE]` y avísame. No rellenes con texto plausible.
9. **El teléfono no se publica en el sitio.** Ni enlace `tel:`, ni JSON-LD,
   ni texto visible. Solo va en los PDF del CV (evita spam de bots).

## Comandos
```bash
npm run dev           # desarrollo
npm run build         # build de producción, debe pasar sin warnings
npm run lint          # eslint
npm run typecheck     # next typegen + tsc --noEmit
npm run format        # prettier (format:check en CI)
npm run test:a11y     # playwright + axe (se añade en la Fase 2)
```

## Definición de "terminado"
Una tarea está lista cuando: `build`, `lint` y `typecheck` pasan limpios;
funciona en ES y EN; funciona en claro y oscuro; es navegable por teclado;
y axe no reporta violaciones críticas ni serias.
