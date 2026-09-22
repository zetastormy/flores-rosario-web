import { sanityClient } from './sanity';

/* ==========================================================================
   Tipados de Contenido
   ========================================================================== */

export interface SitioConfig {
  nombreNegocio: string;
  subtitulo: string;
  telefonoWhatsApp: string;
  mensajeWhatsAppDefault: string;
  instagramUrl?: string;
  facebookUrl?: string;
  direccion: string;
  horariosAtencion?: string;
  bannerAviso?: string;
}

export interface PaginaInicio {
  bannerAviso?: string;
  heroKicker: string;
  heroTitulo: string;
  heroBajada: string;
  heroBotonCatalogo: string;
  heroBotonWhatsapp: string;
  heroImagen?: any;
  heroCaption?: string;
  historiaKicker: string;
  historiaTitulo: string;
  historiaTexto: string;
  historiaImagen?: any;
  promoTitulo: string;
  promoTexto: string;
  promoBoton: string;
}

export interface Categoria {
  _id: string;
  nombre: string;
  slug: { current: string };
  descripcion?: string;
  icono?: string;
  orden?: number;
}

export interface Producto {
  _id: string;
  nombre: string;
  slug: { current: string };
  precio: number;
  unidad?: string;
  etiqueta?: string;
  tipoEtiqueta?: string; // 'leaf' | 'lilac' | ''
  tone?: string; // 'tone-a' | 'tone-b' | 'tone-c' | 'tone-d'
  categoria?: {
    nombre: string;
    slug: { current: string };
  };
  imagen?: any;
  galeria?: any[];
  descripcion: string;
  cuidados?: string;
  destacado?: boolean;
  disponible?: boolean;
}

export interface Articulo {
  _id: string;
  titulo: string;
  slug: { current: string };
  fechaPublicacion: string;
  tiempoLectura: string;
  resumen: string;
  imagenPortada?: any;
  tone?: string;
  categoria?: string;
  contenido?: any;
}

/* ==========================================================================
   Valores de Respaldo (Fallback Data) extraídos de docs/ y adaptados al proyecto
   ========================================================================== */

export const fallbackSitioConfig: SitioConfig = {
  nombreNegocio: 'Flores del Rosario',
  subtitulo: 'vivero & florería',
  telefonoWhatsApp: '56912345678',
  mensajeWhatsAppDefault: '¡Hola! Quisiera consultar por disponibilidad y entregas en Puerto Montt y alrededores.',
  instagramUrl: 'https://instagram.com/floresdelrosario.calbuco',
  facebookUrl: 'https://facebook.com/floresdelrosario.calbuco',
  direccion: 'Entregas a domicilio en Puerto Montt y alrededores',
  bannerAviso: '🌿 Entregas en Puerto Montt y alrededores · Pedidos con anticipación por WhatsApp',
};

export const fallbackPaginaInicio: PaginaInicio = {
  bannerAviso: 'Entregas en Puerto Montt y alrededores · Pedidos con anticipación por WhatsApp',
  heroKicker: 'Floristería artesanal & botánica',
  heroTitulo: 'Flores frescas con alma de barrio',
  heroBajada:
    'Diseños botánicos pensados con amor y dedicación. Arreglos para celebrar, acompañar y transformar cada rincón, con entregas en Puerto Montt y alrededores.',
  heroBotonCatalogo: 'Ver catálogo',
  heroBotonWhatsapp: 'Hacer pedido',
  heroCaption: 'Ramos preparados en el día',
  historiaKicker: 'Nuestra Historia',
  historiaTitulo: 'Flores elegidas una por una con dedicación',
  historiaTexto:
    'Nacimos en el sur de Chile con la convicción de devolverle a las flores y a la botánica su lugar en la vida diaria. Seleccionamos flores frescas cada mañana, cultivamos variedades adaptadas a nuestro clima húmedo y proveemos insumos de jardinería confiables para cuidar la tierra, con entregas en Puerto Montt y alrededores.',
  promoTitulo: '¿Buscas un arreglo especial o materiales para tu jardín?',
  promoTexto:
    'Realizamos ramos de ocasión, arreglos personalizados, plantas en maceta y materiales de jardinería con entregas en Puerto Montt y alrededores.',
  promoBoton: 'Consultar disponibilidad',
};

export const fallbackCategorias: Categoria[] = [
  { _id: 'cat-todas', nombre: 'Todas', slug: { current: 'todas' }, orden: 0 },
  { _id: 'cat-flores', nombre: 'Flores', slug: { current: 'flores' }, orden: 1 },
  { _id: 'cat-plantas', nombre: 'Plantas', slug: { current: 'plantas' }, orden: 2 },
  { _id: 'cat-macetas', nombre: 'Macetas y jardín', slug: { current: 'macetas-y-jardin' }, orden: 3 },
  { _id: 'cat-herramientas', nombre: 'Herramientas', slug: { current: 'herramientas' }, orden: 4 },
];

export const fallbackProductos: Producto[] = [
  {
    _id: 'prod-1',
    nombre: 'Ramo de peonías rosadas',
    slug: { current: 'ramo-de-peonias-rosadas' },
    precio: 14990,
    unidad: 'por ramo',
    etiqueta: 'Flores',
    tipoEtiqueta: 'lilac',
    tone: 'tone-b',
    categoria: { nombre: 'Flores', slug: { current: 'flores' } },
    descripcion:
      'Arreglo delicado de peonías rosadas seleccionadas con toques de follaje verde y envoltorio artesanal en papel kraft.',
    cuidados: 'Mantener en agua fresca, cortar los tallos 1 cm en diagonal cada dos días y ubicar lejos del sol directo.',
    destacado: true,
    disponible: true,
  },
  {
    _id: 'prod-2',
    nombre: 'Monstera deliciosa, maceta 20cm',
    slug: { current: 'monstera-deliciosa-maceta-20cm' },
    precio: 22990,
    unidad: 'con maceta de cultivo',
    etiqueta: 'Plantas',
    tipoEtiqueta: 'leaf',
    tone: 'tone-a',
    categoria: { nombre: 'Plantas', slug: { current: 'plantas' } },
    descripcion:
      'Planta de interior con hojas perforadas características. Ideal para dar vida y purificar el aire en hogares y oficinas.',
    cuidados: 'Riego moderado (cuando el sustrato superior esté seco), luz indirecta brillante y pulverizar hojas en verano.',
    destacado: true,
    disponible: true,
  },
  {
    _id: 'prod-3',
    nombre: 'Maceta de barro artesanal N°3',
    slug: { current: 'maceta-de-barro-artesanal-n3' },
    precio: 7990,
    unidad: 'unidad 22cm diámetro',
    etiqueta: 'Macetas',
    tipoEtiqueta: '',
    tone: 'tone-c',
    categoria: { nombre: 'Macetas y jardín', slug: { current: 'macetas-y-jardin' } },
    descripcion:
      'Maceta clásica cocida a alta temperatura con orificio de drenaje. Porosa, favorece la oxigenación de las raíces.',
    cuidados: 'Apta para interior y exterior bajo techo.',
    destacado: true,
    disponible: true,
  },
  {
    _id: 'prod-4',
    nombre: 'Set de poda de 3 piezas',
    slug: { current: 'set-de-poda-de-3-piezas' },
    precio: 18990,
    unidad: 'kit de 3 herramientas',
    etiqueta: 'Herramientas',
    tipoEtiqueta: 'leaf',
    tone: 'tone-d',
    categoria: { nombre: 'Herramientas', slug: { current: 'herramientas' } },
    descripcion:
      'Incluye tijera de bypass en acero inoxidable, tijera de precisión para flores y funda de protección de cuero sintético.',
    cuidados: 'Limpiar y secar las cuchillas tras cada uso para evitar oxidación.',
    destacado: true,
    disponible: true,
  },
  {
    _id: 'prod-5',
    nombre: 'Arreglo de girasoles',
    slug: { current: 'arreglo-de-girasoles' },
    precio: 13490,
    unidad: 'por arreglo',
    etiqueta: 'Flores',
    tipoEtiqueta: 'lilac',
    tone: 'tone-b',
    categoria: { nombre: 'Flores', slug: { current: 'flores' } },
    descripcion:
      'Girasoles luminosos con ramas de canelo y eucalipto aromático, transmitiendo calidez y energía.',
    cuidados: 'Colocar en lugar bien iluminado sin corrientes de aire fuertes.',
    destacado: false,
    disponible: true,
  },
  {
    _id: 'prod-6',
    nombre: 'Sustrato premium 5kg',
    slug: { current: 'sustrato-premium-5kg' },
    precio: 6490,
    unidad: 'saco 5 kg',
    etiqueta: 'Jardín',
    tipoEtiqueta: '',
    tone: 'tone-c',
    categoria: { nombre: 'Macetas y jardín', slug: { current: 'macetas-y-jardin' } },
    descripcion:
      'Mezcla orgánica con turba, perlita, humus de lombriz y fibra de coco. Excelente retención de humedad y aireación.',
    destacado: false,
    disponible: true,
  },
];

export const fallbackArticulos: Articulo[] = [
  {
    _id: 'art-1',
    titulo: 'Qué plantar en septiembre: la guía de primavera',
    slug: { current: 'que-plantar-en-septiembre-guia-primavera' },
    fechaPublicacion: '12 de septiembre',
    tiempoLectura: '4 min',
    resumen:
      'Consejos prácticos para preparar el suelo, sembrar semillas de estación y proteger tus brotes del clima austral.',
    tone: 'tone-a',
    categoria: 'Primavera',
  },
  {
    _id: 'art-2',
    titulo: 'Cuidados esenciales para tus flores frescas en agua',
    slug: { current: 'cuidados-esenciales-flores-frescas' },
    fechaPublicacion: '28 de agosto',
    tiempoLectura: '3 min',
    resumen:
      'Aprende a prolongar la vida de tus ramos cortados cortando los tallos y cambiando el agua en el momento justo.',
    tone: 'tone-b',
    categoria: 'Consejos Florales',
  },
  {
    _id: 'art-3',
    titulo: 'El arte de elegir la maceta correcta para cada planta',
    slug: { current: 'elegir-la-maceta-correcta' },
    fechaPublicacion: '15 de agosto',
    tiempoLectura: '5 min',
    resumen:
      'Drenaje, porosidad del barro vs. plástico y proporciones ideales para que las raíces se desarrollen sanas.',
    tone: 'tone-c',
    categoria: 'Jardinería',
  },
];

/* ==========================================================================
   Consultas GROQ con Resiliencia de Fallbacks
   ========================================================================== */

export async function getSitioConfig(): Promise<SitioConfig> {
  try {
    const data = await sanityClient.fetch<SitioConfig>(`*[_type == "sitioConfig"][0]`);
    if (data && data.nombreNegocio) {
      return { ...fallbackSitioConfig, ...data };
    }
  } catch (err) {
    // Retorna fallback en caso de dataset no poblado o entorno offline
  }
  return fallbackSitioConfig;
}

export async function getPaginaInicio(): Promise<PaginaInicio> {
  try {
    const data = await sanityClient.fetch<PaginaInicio>(`*[_type == "paginaInicio"][0]`);
    if (data && data.heroTitulo) {
      return { ...fallbackPaginaInicio, ...data };
    }
  } catch (err) {
    // Retorna fallback
  }
  return fallbackPaginaInicio;
}

export async function getCategorias(): Promise<Categoria[]> {
  try {
    const data = await sanityClient.fetch<Categoria[]>(`*[_type == "categoria"] | order(orden asc)`);
    if (data && data.length > 0) {
      return data;
    }
  } catch (err) {
    // Retorna fallback
  }
  return fallbackCategorias;
}

export async function getProductos(): Promise<Producto[]> {
  try {
    const data = await sanityClient.fetch<Producto[]>(
      `*[_type == "producto" && disponible == true] | order(_createdAt desc){
        _id,
        nombre,
        slug,
        precio,
        unidad,
        etiqueta,
        categoria->{ nombre, slug },
        imagen,
        galeria,
        descripcion,
        cuidados,
        destacado,
        disponible
      }`
    );
    if (data && data.length > 0) {
      return data;
    }
  } catch (err) {
    // Retorna fallback
  }
  return fallbackProductos;
}

export async function getProductosDestacados(): Promise<Producto[]> {
  const todos = await getProductos();
  const destacados = todos.filter((p) => p.destacado);
  return destacados.length > 0 ? destacados : todos.slice(0, 4);
}

export async function getProductoBySlug(slug: string): Promise<Producto | undefined> {
  try {
    const data = await sanityClient.fetch<Producto>(
      `*[_type == "producto" && slug.current == $slug][0]{
        _id,
        nombre,
        slug,
        precio,
        unidad,
        etiqueta,
        categoria->{ nombre, slug },
        imagen,
        galeria,
        descripcion,
        cuidados,
        destacado,
        disponible
      }`,
      { slug }
    );
    if (data) return data;
  } catch (err) {
    // fallback
  }
  return fallbackProductos.find((p) => p.slug.current === slug);
}

export async function getArticulos(): Promise<Articulo[]> {
  try {
    const data = await sanityClient.fetch<Articulo[]>(
      `*[_type == "articulo"] | order(fechaPublicacion desc){
        _id,
        titulo,
        slug,
        fechaPublicacion,
        tiempoLectura,
        resumen,
        imagenPortada,
        categoria
      }`
    );
    if (data && data.length > 0) {
      return data;
    }
  } catch (err) {
    // fallback
  }
  return fallbackArticulos;
}

export async function getArticuloBySlug(slug: string): Promise<Articulo | undefined> {
  try {
    const data = await sanityClient.fetch<Articulo>(
      `*[_type == "articulo" && slug.current == $slug][0]`,
      { slug }
    );
    if (data) return data;
  } catch (err) {
    // fallback
  }
  return fallbackArticulos.find((a) => a.slug.current === slug);
}
