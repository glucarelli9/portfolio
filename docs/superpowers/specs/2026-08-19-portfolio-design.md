# Portfolio Personal — Gianfranco Lucarelli

**Fecha:** 2026-08-19
**Estado:** Aprobado, pendiente de implementación

## Objetivo

Sitio portfolio personal para búsqueda laboral como Senior Full Stack
Developer, dirigido a reclutadores/empresas. Debe mostrar variedad de
stack, complejidad técnica y proyectos con impacto real en producción.

## Alcance

Sitio estático de una sola página (single-page, scroll), sin backend,
sin formulario de contacto (se usan enlaces directos a email/LinkedIn/GitHub
y descarga de CV en PDF).

## Stack técnico del sitio

- Next.js (App Router) + TypeScript + Tailwind CSS
- Sin base de datos, sin API routes — contenido estático (los datos de
  proyectos viven en un array TS dentro del repo, no en un CMS)
- Deploy en Vercel
- Repo en GitHub: `glucarelli9/portfolio`

## Estilo visual

- Fondo claro, look corporativo/prolijo (no "flashy", no dark mode por
  ahora)
- Un solo color de acento (azul profesional)
- Tipografía sans-serif limpia, buen espaciado, mobile-first responsive
- Imágenes de proyecto: mockups genéricos (browser frame con gradiente
  + nombre del proyecto), no screenshots reales — evita depender de
  capturas de apps internas con login

## Datos personales

- **Nombre / título:** Gianfranco Lucarelli — Senior Full Stack Developer
- **Foto:** `public/profile.png` (copiada de
  `C:\Users\glucarelli\Pictures\Imagenes-Pixelart\yo.png`)
- **Email:** glucarelli9@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/gianfranco-lucarelli-2ab8ba209
- **GitHub:** https://github.com/glucarelli9
- **CV (PDF descargable):** copiar desde
  `C:\Users\glucarelli\Documents\Gianfranco_Lucarelli_CV_Senior_FullStack.pdf_2026_7_13.pdf`
  a `public/cv-gianfranco-lucarelli.pdf`

## Estructura de la página (single-page, nav sticky con anclas)

1. **Hero** — foto, nombre + título, una línea de resumen profesional,
   botones: Descargar CV, LinkedIn, GitHub, Email.
2. **Sobre mí** — párrafo corto de trayectoria (full stack, integraciones
   enterprise, automatización, apps en producción real).
3. **Stack técnico** — chips agrupados por categoría:
   - Frontend: React, Next.js, Vite, TypeScript
   - Backend: Node.js, Express
   - Datos: MongoDB, PostgreSQL, Supabase, Prisma
   - Cloud/DevOps: Vercel, Docker, PM2, Azure AD
   - Integraciones: Microsoft Graph API, IA (Groq/LLM)
4. **Proyectos** — grid de 9 cards (ver detalle abajo)
5. **Contacto / footer** — repite email, LinkedIn, GitHub, botón CV

## Proyectos a incluir (9)

Cada card: mockup genérico, título, descripción (1-2 líneas), tags de
stack, link a demo/repo si es público.

1. **SRK RPG / Prode Picante** — Plataforma de predicciones deportivas
   con lógica de scoring por fases y multiplicadores, autenticación,
   en producción con uso masivo de empleados de la empresa.
   Stack: Next.js, Prisma, NextAuth v5, PostgreSQL. Sin link (interno).

2. **Changas App** — Marketplace de changas con chat en tiempo real
   (indicador de escritura, respuesta con swipe, vista de fotos).
   Stack: MongoDB (replica set), Node.js, WebSockets. Sin link (privado).

3. **Chess Profe** — App de ajedrez educativo con motor de reglas
   propio. Repo público, flujo de ramas main/dev.
   Stack: React, Vite, TypeScript, chess.js, Supabase.
   Link: GitHub + demo Vercel.

4. **Indicio** — SaaS de análisis de legajos penales asistido por IA,
   para uso legal (CPP Jujuy/Salta).
   Stack: Next.js, Groq (LLM), Supabase. Link: demo Vercel.

5. **SRK Nómina** — Sistema de gestión de nómina con roles y permisos
   granulares, integración con API de Power BI. En producción.
   Stack: Node.js, Express. Sin link (interno).

6. **Teams Creator** — Herramienta de automatización que crea equipos
   de Microsoft Teams y carpetas de SharePoint vía Graph API, con
   autenticación de dos apps Azure AD (cert + secret).
   Stack: Node.js, Express, Microsoft Graph API. Sin link (interno).

7. **Agüero Automotores Demo** — Demo de plataforma de venta de
   vehículos usados con alertas push reales (PWA) para un cliente.
   Stack: Next.js, Supabase, Web Push. Link: demo Vercel.

8. **SRK Comida** — App de pedidos de almuerzo multi-sede, con manejo
   de feriados y resumen de pedidos al cierre. Uso operativo diario
   real por empleados.
   Stack: Node.js, PM2. Sin link (interno).

9. **Sanz Berger Bienes Raíces** — Sitio de inmobiliaria en producción
   para cliente real, con backend propio y panel de administración.
   Stack: React, Node.js, SQLite. Link: https://sanzbergerbienesraices.com.ar/

## Fuera de alcance (explícitamente excluido)

- Proyectos de infraestructura/config puros (WireGuard, Proxmox,
  AmneziaWG, pfSense)
- Landings estáticas simples sin lógica full stack (TC&PI Abogados)
- Herramientas internas muy acotadas o de un solo uso

## Testing / verificación

- Build de Next.js sin errores (`npm run build`)
- Revisión visual responsive (mobile + desktop) antes de dar por
  terminado
- Verificar que los 3 links externos (LinkedIn, GitHub, y los de
  proyectos públicos) abran correctamente
- Verificar que el botón de descarga de CV entregue el PDF correcto
