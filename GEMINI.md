# Normas y Estándares del Proyecto: Flores del Rosario

Este documento establece las reglas arquitectónicas, estándares de desarrollo, convenciones de control de versiones y directrices de diseño para el proyecto **Flores del Rosario Web**. Todo colaborador o agente de IA debe seguir estas pautas de manera estricta.

---

## 1. Visión y Stack Tecnológico

- **Propósito**: Sitio web estático de alta calidad estética y rendimiento optimizado para una floristería artesanal y botánica con entregas a domicilio en Puerto Montt y alrededores (sin atención presencial).
- **Generador de Sitios Estáticos (SSG)**: [Astro](https://astro.build/) (versión 7+ en modo `output: 'static'`).
- **CMS Headless**: [Sanity CMS](https://www.sanity.io/) integrado vía `@sanity/astro`, `@sanity/client` y `@sanity/image-url`.
- **Plataforma de Despliegue**: [Cloudflare Pages](https://pages.cloudflare.com/) (sirviendo el directorio pre-compilado `./dist`).
- **Estilos**: Vanilla CSS con enfoque Mobile-First, tokens de diseño centralizados y sin frameworks de utilidades ad-hoc no solicitados.
- **Tipografías oficiales**: `Fraunces` (Google Fonts, para titulares y acentos) y `Work Sans` (para cuerpo de texto y elementos de interfaz).

---

## 2. Convención de Commits (Conventional Commits en Español)

Todos los mensajes de confirmación de git deben seguir estrictamente el estándar de **Conventional Commits** con la **descripción escrita en español**, en tiempo presente o imperativo, comenzando en minúscula y sin punto final.

### Formato
```text
<tipo>(<alcance opcional>): <descripción breve en español>

[cuerpo opcional explicando el porqué del cambio]

[pie opcional de notas de ruptura o tickets]
```

### Tipos Permitidos
- **`feat`**: Nueva funcionalidad o característica para el usuario (ej: `feat(catalogo): agregar filtro por ocasión en listado de productos`).
- **`fix`**: Corrección de un error o bug (ej: `fix(contacto): corregir codificación del mensaje de enlace a whatsapp`).
- **`docs`**: Cambios exclusivamente en documentación (ej: `docs: actualizar guía de variables de entorno en gemini.md`).
- **`style`**: Cambios de formato, espaciado, CSS o ajustes visuales que no alteran la lógica (ej: `style(hero): ajustar gradiente de fondo y espaciado móvil`).
- **`refactor`**: Refactorización de código que no añade funcionalidades ni soluciona bugs (ej: `refactor(sanity): modularizar consultas groq para productos`).
- **`perf`**: Mejoras en el rendimiento de carga o compilación (ej: `perf(imagenes): optimizar dimensiones de pre-renderizado de portadas`).
- **`test`**: Creación o modificación de tests (ej: `test(layout): verificar presencia de etiquetas canónicas seo`).
- **`build`**: Modificaciones en el sistema de construcción, scripts o dependencias de npm (ej: `build: actualizar dependencias de sanity y astro`).
- **`ci`**: Cambios en archivos de integración o despliegue continuo (ej: `ci: configurar regla de compilación para cloudflare pages`).
- **`chore`**: Tareas de mantenimiento general del repositorio (ej: `chore: agregar licencia GNU General Public License v3.0`, `chore: actualizar .gitignore`).
- **`revert`**: Reversión de un commit anterior.

### Ejemplos
- Correcto: `feat(blog): crear plantilla de detalle de artículo floral`
- Correcto: `chore: configurar variables de entorno para sanity cms`
- Incorrecto: `Add new flowers page` *(No está en español)*
- Incorrecto: `arregle cosas` *(No sigue Conventional Commits)*

---

## 3. Flujo de Ramas (Git Flow)

El repositorio opera bajo el modelo **Git Flow**:

```text
main (producción etiquetada)
 ▲
 │ ─── hotfix/arreglo-urgente ───► (se integra a main y develop)
 │
develop (integración continua de desarrollo)
 ▲
 ├─── feature/catalogo-productos ───► (se integra a develop)
 ├─── feature/contacto-whatsapp  ───► (se integra a develop)
 └─── release/v1.0.0            ───► (se integra a main con tag y a develop)
```

### Ramas Principales
1. **`main`**:
   - Rama de producción. Contiene únicamente código estable listo para ser desplegado en producción.
   - Cada commit que entra a `main` debe corresponder a un release o un hotfix y estar etiquetado con su respectivo tag de versión SemVer (ej: `v1.0.0`).
   - **Prohibido hacer commits directos en `main`**.

2. **`develop`**:
   - Rama base de desarrollo e integración.
   - Es la rama por defecto sobre la que se crean las ramas `feature/*` y se preparan las ramas `release/*`.

### Ramas de Soporte
1. **`feature/<nombre-de-la-funcionalidad>`**:
   - Se crea a partir de: `develop`.
   - Se fusiona en: `develop`.
   - Nomenclatura en kebab-case en minúsculas (ej: `feature/catalogo-productos`, `feature/detalle-florero`).

2. **`release/<version>`**:
   - Se crea a partir de: `develop` cuando las características planeadas para un hito están completas.
   - Se realizan únicamente pruebas, documentación y correcciones mínimas de última hora.
   - Se fusiona en: `main` (creando el tag `vX.Y.Z`) y de vuelta en `develop`.

3. **`hotfix/<nombre-del-arreglo>`**:
   - Se crea a partir de: `main` ante incidentes críticos en producción.
   - Se fusiona en: `main` (con un tag `PATCH`) y en `develop`.

---

## 4. Versionado Semántico (SemVer 2.0.0)

Las versiones del proyecto se gestionan siguiendo el esquema `MAJOR.MINOR.PATCH`:

- **`MAJOR` (X.0.0)**: Cambios incompatibles con versiones anteriores, reestructuración profunda de la arquitectura o cambios de esquemas que rompan la base de datos de contenido.
- **`MINOR` (0.X.0)**: Incorporación de nuevas vistas, secciones completas o funcionalidades retrocompatibles (ej: añadir el módulo de blog, catálogo dinámico).
- **`PATCH` (0.0.X)**: Correcciones de errores, ajustes menores de diseño, actualización de enlaces o parches de seguridad retrocompatibles.

Cada entrega se etiqueta con el prefijo `v` seguido del número (ej: `v1.0.0`).

---

## 5. Principios de Diseño Mobile-First

El diseño de Flores del Rosario sigue una estrategia **Mobile-First** fundamentada en los prototipos de la carpeta `docs/`:

1. **Diseño Móvil como Base Principal**:
   - Todo estilo y maquetación se define inicialmente para pantallas reducidas (ancho base ~390px, estilo iOS/Android).
   - Se optimizan las áreas de contacto táctiles (mínimo 44x44px para botones e iconos interactivos).
   - Se prioriza la legibilidad, fluidez de scroll y accesos directos rápidos (ej: botón flotante de WhatsApp).

2. **Media Queries Ascendentes**:
   - Prohibido el uso de `@media (max-width: ...)`. Se debe usar siempre `@media (min-width: ...)` para expandir la interfaz hacia tabletas y monitores de escritorio:
     - `min-width: 768px`: Disposición en 2 columnas, cabeceras expandidas.
     - `min-width: 1024px`: Disposición completa de escritorio, menús megamenu, grids de 3 y 4 columnas.

3. **Tokens de Diseño Centralizados (`src/styles/tokens.css`)**:
   - **Colores Principales**:
     - `--cream` (`#F8DFC8`): Fondo cálido secundario, acentos suaves.
     - `--cream-soft` (`#FBEADC`): Fondo general suave.
     - `--paper` (`#FFFBF5`): Superficie de tarjetas y fondo limpio.
     - `--forest` (`#1B4D3E`): Verde bosque corporativo para encabezados y botones primarios.
     - `--forest-light` (`#2E6350`): Verde secundario para estados hover y contrastes.
     - `--leaf` (`#4F7A5B`) y `--leaf-soft` (`#DCE7DE`): Verdes naturales para etiquetas y paneles.
     - `--lilac` (`#B79BC7`) y `--lilac-soft` (`#EFE6F2`): Tonos lilas para temporadas y flores especiales.
     - `--gold` (`#D6A94A`) y `--gold-soft` (`#F3E3C4`): Acentos dorados para detalles premium y kickers.
     - `--ink` (`#26302B`) y `--ink-soft` (`#5B6660`): Color tipográfico principal y secundario.
     - `--whatsapp` (`#25D366`): Color de acción para pedidos directos.

---

## 6. Recursos de Referencia en `docs/`

En la carpeta `docs/` se encuentran los activos de referencia que deben respetarse fielmente:
- **`docs/prototypes/flores-del-rosario-mockups.html`**: Prototipo maestro interactivo con la estructura visual completa, gradientes (`tone-a`, `tone-b`, etc.), componentes y maquetas de todas las vistas.
- **`docs/assets/logo/`**:
  - `flores_rosario.svg`: Vector original del logo y marca.
  - `flores_rosario.png`: Versión rasterizada de alta definición.
  - `flores_rosario_og.jpeg`: Imagen optimizada para Open Graph / redes sociales.
- **`docs/assets/mockups/`**:
  - Capturas de alta fidelidad tanto para versión móvil (`*-movil.png`) como escritorio (`*-escritorio.png`) de: Inicio, Productos, Detalle de Producto, Blog, Artículo y Menú.

---

## 7. Despliegue en Cloudflare Pages

- **Modo**: Estático puro (`output: 'static'`).
- **Comando de Compilación**: `npm run build` o `astro build`.
- **Directorio de Salida**: `dist`.
- **Configuración de Assets**: Archivo [wrangler.jsonc](file:///home/zetastormy/Development/Projects/flores-rosario-web/wrangler.jsonc) apuntando a `./dist`.
- **Cabeceras y Redirecciones**:
  - `public/_headers`: Políticas de caché inmutable (`Cache-Control: public, max-age=31536000, immutable`) para activos empaquetados en `/_astro/*` y cabeceras de seguridad.
  - `public/_redirects`: Redirecciones declarativas.
- **Variables de Entorno**:
  - `PUBLIC_SANITY_PROJECT_ID`: ID del proyecto en Sanity.
  - `PUBLIC_SANITY_DATASET`: Dataset (típicamente `production`).
  - `PUBLIC_SANITY_API_VERSION`: Versión de la API de Sanity (ej: `2026-09-21`).

---

## 8. Gestión de Contenido Dinámico con Sanity CMS (Content-First & Resiliencia)

- **Principio de Personalización Total**:
  - Todo elemento textual, visual o comercial susceptible de cambio debe estar modelado en Sanity CMS (textos de bienvenida, titulares del hero, subtítulos, sección de historia, fotografías, catálogo de productos, precios en CLP, categorías, insumos de jardinería, publicaciones de blog, números de WhatsApp, horarios y avisos).
  - Ningún texto corporativo o de producto debe quedar "hardcodeado" sin su correspondiente campo en Sanity.
- **Arquitectura de Resiliencia (Sistema de Fallbacks)**:
  - Las consultas GROQ deben estructurarse mediante capas de acceso a datos (`src/lib/sanity.queries.ts`) que provean valores de respaldo predeterminados coherentes extraídos de `docs/`.
  - Esto garantiza que `astro build` siempre compile con éxito en Cloudflare Pages o entornos locales, independientemente del estado de sincronización del CMS.
- **Modelos de Contenido Establecidos**:
  1. `sitioConfig` (Singleton): Configuración global, WhatsApp, redes, horarios, zona de entregas en Puerto Montt y alrededores, y banners informativos.
  2. `paginaInicio` (Singleton): Titulares del hero, bajadas de texto, botones CTA, historia del negocio y destacados.
  3. `producto`: Flores, arreglos y materiales de jardinería con precios en CLP, unidad, etiqueta, galería, descripción y disponibilidad.
  4. `categoria`: Categorización de productos (ej: Ramos, Floreros, Jardinería, Plantas, Condolencias).
  5. `articulo`: Publicaciones de blog botánico con contenido en Portable Text, imagen de portada y fecha.
