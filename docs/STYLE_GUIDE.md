# Astravia Design System — Style Guide

## Personalidad de Marca
**Ingeniería de siguiente generación con calidez humana** — Estética oscura, nítida y moderna. Precisa, confiable y con acentos de color que transmiten innovación en IA. Profesional para enterprise, cercana para builders.

---

## Activos de Marca

### Archivos de Logotipo
- **Logo Principal**: `/public/astravia-logo.png` — Logotipo completo (uso general)
- **Logo Alterno (warm)**: `/public/astravia-logo-warm.png` — Versión cálida para hero/gradientes
- **Favicon/Icono**: Usar el logo reducido o una marca simplificada derivada del isotipo

### Guías de Uso del Logo
- **Logo Principal**: Encabezados, landing y aplicaciones de marca
- **Ícono Solo**: Navegación, favicon o espacios reducidos
- **Tamaño mínimo**: 120px de ancho para legibilidad
- **Espacio de seguridad**: Margen libre equivalente a la altura de la “A” de Astravia
- **Consistencia de altura**: Ícono y logo a la misma altura (típicamente `h-8`/32px en headers)
- **Fondo**: Funciona mejor sobre fondos oscuros (neutral-900/950). Garantizar contraste AA

### Formatos de Archivo
- **Web**: SVG preferible (nítido a cualquier tamaño)
- **Impresión**: Solicitar PNG o PDF si es necesario
- **Favicon**: Usar versión de ícono en formatos `.ico`/`png` adecuados

---

## Paleta de Color

Basada en el componente `astravia-landing.tsx` y en el hero 3D (Spline) mostrado: fondo oscuro con brillos y neones sutiles, acentos cian/índigo y momentos naranja/teal.

### Colores Base (Dark UI)
- **Fondo Base** `#0A0A0A` (Tailwind neutral-950) — body y capas inferiores
- **Superficies** `#171717` (neutral-900) — tarjetas/oscuridad elevada
- **Bordes** `#262626` (neutral-800) — contornos sutiles y divisores
- **Texto Primario** `#F5F5F5` (neutral-100)
- **Texto Secundario** `#A3A3A3` (neutral-400)
- **Texto Terciario** `#737373` (neutral-500)

### Colores de Marca y Acentos
- **Cian Astravia** `#22D3EE` (cyan-400) — métricas, highlights, íconos
- **Índigo** `#6366F1` (indigo-500) / `#4F46E5` (indigo-600) — paneles y flujos
- **Azul** `#60A5FA` (blue-400) — entradas/etiquetas informativas
- **Teal** `#14B8A6` (teal-500) — parte del gradiente principal
- **Naranja IA** `#EA580C` (orange-600) / `#C2410C` (orange-700) — CTAs y “magic moments”
- **Verde** `#22C55E` (green-500/600) — estados positivos y data blocks

### Gradiente de Marca
- **Astravia Gradient** `linear-gradient(135deg, #14B8A6 0%, #C2410C 100%)`
  - Uso en CTA premium, acentos de hero y elementos AI. Alternativamente, variantes suaves con opacidades (ej. `from-teal-500/20 to-orange-700/20`).

### Guías de Uso del Color

#### Accesibilidad y Contraste
- **Texto primario** en fondos oscuros: `#F5F5F5` (AA)
- **Texto secundario**: `#A3A3A3` (70% del primario)
- **Texto deshabilitado**: `#737373` con opacidad reducida (40–50%)
- **Texto blanco**: solo sobre bloques con cian/índigo/naranja de alto contraste

#### Semántica
- **Éxito**: Verde `#22C55E`
- **Advertencia**: Amarillo cálido `#F9CB40`
- **Error**: Naranja IA `#EA580C`
- **Info**: Azul `#60A5FA`
- **AI/Magic**: Naranja IA `#EA580C` o degradiente Astravia

#### Estados Interactivos
- **Links**: Cian `#22D3EE`
- **Hover de Links**: Cian más oscuro `#06B6D4`
- **Links Visitados**: Cian al 80% `#22D3EECC`
- **Focus Ring**: Cian `#22D3EE` con 2px de offset

#### Fondos/Degradientes
- **Secciones Hero**: Gradiente Astravia con brillos sutiles e íconos cian/índigo
- **Highlights de Features**: Bordes/ fondos con `indigo-500/20` o `teal→orange`
- **Acciones Premium/AI**: Botones con gradiente Astravia

#### Fallback de Color Único
- **Fondos claros (si aplica)**: Cian `#22D3EE`
- **Fondos oscuros**: Teal `#14B8A6`
- **Alto contraste**: Texto `#F5F5F5` o Gris carbón `#E5E5E5` según contexto

#### Referencia de Color (Spline Hero)
- Fondo negro difuso con brillos orgánicos multicolor; predominan cian/teal y núcleo naranja, con halos índigo. Usar opacidades bajas (5–20%) y blur amplio para “glows”.

---

## Tipografía

### Familias Tipográficas
- **Títulos**: Playfair Display (clase `font-playfair` en hero)
- **Cuerpo/UI**: Geist (`font-geist`)

### Escala y Jerarquía

#### Títulos (Playfair Display)
- **H1**: 64px (desktop) / 48px (tablet) / 32px (mobile), Peso 300–400, Line-height 0.95–1.1
- **H2**: 32–36px, Peso 300–400, Line-height 1.25–1.3
- **H3**: 24px, Peso 400, Line-height 1.35–1.4
- **H4**: 20px, Peso 400–500, Line-height 1.4–1.5
- **Tracking**: “tracking-tight” en titulares principales

#### Texto de Cuerpo (Geist)
- **Body Large**: 18px, Peso 400, Line-height 1.6
- **Body**: 16px, Peso 400, Line-height 1.6
- **Small**: 14px, Peso 400, Line-height 1.5
- **Caption**: 12px, Peso 400, Line-height 1.4

#### Texto de UI (Geist)
- **Button Large**: 16px, Peso 500
- **Button**: 14px, Peso 500
- **Button Small**: 12px, Peso 500
- **Label**: 14px, Peso 500
- **Helper**: 12px, Peso 400

---

## Sistema de Espaciado

### Unidad Base: 4px
- **XS**: 4px
- **SM**: 8px
- **MD**: 16px
- **LG**: 24px
- **XL**: 32px
- **2XL**: 48px
- **3XL**: 64px

### Espaciado por Componente
- **Card Padding**: 24px (LG)
- **Button Padding**: 12px 24px
- **Input Padding**: 12px 16px
- **Márgenes de Sección**: 64px (3XL). En el código se usan `py-16` a `py-32`.

---

## Componentes

### Botones

#### Primario (AI/CTA — Gradiente Astravia)
- **Fondo**: `linear-gradient(135deg, #14B8A6 0%, #C2410C 100%)` (o variante `from-teal-500/20 to-orange-700/20` sobre dark)
- **Texto**: Blanco
- **Padding**: 12px 24px
- **Radio**: 999px (pill, `rounded-full`)
- **Tipografía**: Geist 14–16px, Peso 500
- **Hover**: Aumentar opacidad/contraste del gradiente, `hover:border-neutral-500`, leve elevación
- **Active**: Gradiente más denso, ligera compresión
- **Disabled**: Opacidad 50%, borde y texto atenuados

#### Primario Neutro (Dark)
- **Fondo**: `#3F3F46`/`bg-neutral-700/50`
- **Borde**: `#525252` (neutral-600/700)
- **Hover**: `hover:bg-neutral-900/50` y borde aclara

#### Secundario (Borde)
- **Fondo**: Transparente
- **Texto**: Cian `#22D3EE` o Neutral claro según contexto
- **Borde**: 1px `#262626`
- **Hover**: Fondo `#111827`–`#171717` y borde aclara

#### Ghost
- **Fondo**: Transparente
- **Texto**: `#A3A3A3`
- **Hover**: Fondo `#0B0B0B`–`#111827`
- **Disabled**: Texto con 40–50% de opacidad

### Tarjetas
- **Fondo**: Gradiente muy sutil `from-neutral-900/80 to-neutral-900/40`
- **Borde**: 1px `#262626` (neutral-800/50)
- **Radio**: 16px–20px (`rounded-2xl`)
- **Padding**: 24px–48px
- **Efectos**: `backdrop-blur` ligero, patrones/“grid” decorativa con baja opacidad
- **Hover**: Borde aclara, escala muy sutil (1–2%)

### Formularios

#### Campos de Entrada (Dark)
- **Fondo**: `#111827`–`#171717`
- **Borde**: `#262626`
- **Radio**: 8px
- **Padding**: 12px 16px
- **Tipografía**: Geist 14px, Peso 400
- **Placeholder**: `#A3A3A3` al 60%
- **Focus**: Anillo cian `#22D3EE` con offset 2px; borde aclara
- **Error**: Borde Naranja IA `#EA580C`
- **Éxito**: Borde Verde `#22C55E`
- **Disabled**: Fondo `#0F0F0F`, borde `#1F1F1F`, texto `#6B7280`

#### Labels
- **Tipografía**: Geist 14px, Peso 500
- **Color**: `#E5E5E5`
- **Margen inferior**: 8px

### Navegación

#### Top Navigation (como en `astravia-landing.tsx`)
- **Altura**: 64px
- **Fondo**: `bg-neutral-950/80` con `backdrop-blur-xl`
- **Borde Inferior**: 1px `#262626` al 50%
- **Padding**: 0 24px
- **Comportamiento**: Fijo arriba con animación de entrada `fadeSlideDown`

#### Sidebar (si aplica)
- **Fondo**: `#171717`
- **Ancho**: 256px
- **Item Padding**: 12px 16px
- **Hover de Ítem**: Fondo `#0F172A`–Soft dark
- **Ítem Activo**: Cian o borde/halo con gradiente Astravia
- **Radio**: 6px
- **Divisor**: 1px `#262626`

### Componentes de Feedback

#### Éxito
- **Fondo**: Verde 10% `#22C55E1A`
- **Borde**: Verde `#22C55E`
- **Texto**: `#E5E5E5`
- **Ícono**: Verde `#22C55E`

#### Advertencia
- **Fondo**: Amarillo 10% `#F9CB401A`
- **Borde**: Amarillo `#F9CB40`
- **Texto**: `#E5E5E5`
- **Ícono**: Amarillo `#F9CB40`

#### Error
- **Fondo**: Naranja IA 10% `#EA580C1A`
- **Borde**: Naranja IA `#EA580C`
- **Texto**: `#E5E5E5`
- **Ícono**: Naranja IA `#EA580C`

#### AI Feature Highlight
- **Fondo**: Naranja IA 5% `#EA580C0D`
- **Borde**: Naranja IA 20% `#EA580C33`
- **Acento**: Naranja IA `#EA580C`
- **Uso**: Señalar funciones con IA, “magic moments”, sugerencias inteligentes

---

## Principios de Layout

### Sistema de Grid
- **Ancho Máximo de Contenedor**: 1280px–1440px (`max-w-7xl` en la landing)
- **Gutters**: 24px
- **Columnas**: Grid de 12 columnas
- **Breakpoints (Tailwind)**:
  - `sm`: 640px+
  - `md`: 768px+
  - `lg`: 1024px+
  - `xl`: 1280px+

### Espacio en Blanco
- Usar espacio generoso para respiración visual
- Mantener relaciones consistentes con la unidad base de 4px
- Agrupar elementos relacionados con 8–16px; separar secciones con 32–64px

### Jerarquía Visual
- Usar tamaño, peso y color para guiar la lectura
- Acciones primarias con gradiente Astravia o Naranja IA
- Acciones secundarias sutiles en neutros/cian
- Alinear consistentemente para facilitar el escaneo

---

## Iconografía

### Guías de Estilo
- **Librería**: `lucide-react`
- **Estilo**: Íconos de trazo (outline)
- **Peso**: 1.5px (`stroke-1.5`), 2px en acciones principales
- **Tamaños estándar**: 16 / 20 / 24px
- **Color**: Heredar del texto; acentos en `#22D3EE`, `#6366F1` o `#EA580C`
- **Hover**: Acentuar con cian o aumentar opacidad
- **AI Features**: Usar Naranja IA `#EA580C` para “sparkle”/estrellas

### Sistema de Sparkles
- **Primario**: Estrella 4 puntas en Naranja IA `#EA580C`
- **Secundarios**: Estrellas pequeñas decorativas
- **Uso**: Marcar funciones con IA, automatizaciones, momentos mágicos
- **Animación**: Twinkle sutil 1.5s loop (opcional)

### Tratamiento de Ícono de Marca
- **Ícono del logo**: Puede llevar gradiente Astravia con sparkles naranja
- **App Icons**: Fondos con gradiente y símbolos en blanco/naranja
- **Favicon**: Versión simplificada en color único

### Uso
- Los íconos complementan, no reemplazan, las etiquetas claras
- Mantener tamaños consistentes por componente
- Garantizar accesibilidad (alt/aria y contraste)

---

## Animación e Interacciones

### Micro-interacciones (según la landing)
- **Hover**: 200–300ms ease-out (`transition-all duration-300`)
- **Focus**: 100–150ms ease-out con anillo cian
- **Loading**: Pulse/shimmer sutil
- **Éxito/Error**: Fade-in suave ~200ms
- **Gradient Hover**: Cambio de opacidad/tono en ~300ms

### Animaciones de Aparición
- **Efectos**: `fadeSlideUp`, `fadeSlideDown`, `fadeSlideLeft`, `fadeSlideRight`
- **Duración**: ~0.8s, `ease-out`
- **Disparo**: `IntersectionObserver` en mobile (aparición al hacer scroll)

### AI-Specific
- **Magic Moment**: Sparkles breves al completar acciones de IA
- **Processing**: Pulso/halo con gradiente mientras “piensa”
- **Suggestion Appear**: Ícono sparkle seguido de fade-in del contenido

### Principios
- Deben sentirse ágiles y útiles, no distractoras
- Proveer feedback y guiar la atención
- Evitar exceso de movimiento (accesibilidad)
- Mantener consistencia en tiempos y curvas

---

## Mejores Prácticas

### Accesibilidad
- Cumplir AA en contraste (4.5:1 para texto normal)
- Proveer indicadores de foco en todos los interactivos
- HTML semántico y ARIA adecuados
- No depender solo del color para comunicar estado

### Rendimiento
- Preferir fuentes del sistema o cargar de forma optimizada
- Optimizar imágenes y usar formatos adecuados
- Minimizar CSS personalizado; aprovechar clases utilitarias
- Considerar compatibilidad con dark mode (es el tema base)

### Consistencia
- Aplicar el sistema de espaciado de forma consistente
- Respetar significados de color (verde = éxito, naranja = alerta/error)
- Mantener patrones de interacción uniformes
- Documentar excepciones con justificación

---

*Guía viva. Actualizar conforme evoluciona el producto manteniendo la coherencia central de Astravia.*

