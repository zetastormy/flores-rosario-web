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
  subtitulo: 'flores con propósito',
  telefonoWhatsApp: '56966223508',
  mensajeWhatsAppDefault: '¡Hola! Quisiera consultar por disponibilidad.',
  instagramUrl: 'https://instagram.com/floresdelrosario_cl',
  direccion: 'Entregas a domicilio en Puerto Montt y alrededores',
  bannerAviso: '🌿 Entregas en Puerto Montt y alrededores · Pedidos con anticipación por WhatsApp',
};

export const fallbackPaginaInicio: PaginaInicio = {
  bannerAviso: 'Entregas en Puerto Montt y alrededores · Pedidos con anticipación por WhatsApp',
  heroTitulo: 'Flores cultivadas con propósito',
  heroBajada:
    'Te invitamos a conectar con la naturaleza viviendo el momento presente por medio de la contemplación del cultivo artesanal de flores.',
  heroBotonCatalogo: 'Ver catálogo',
  heroBotonWhatsapp: 'Hacer pedido',
  heroImagen: {
    _type: 'image',
    asset: {
      _ref: 'image-f10c97cfc56a7f9b2f0e203d6b59086acbfb9024-900x1600-jpg',
      _type: 'reference',
    },
    crop: {
      _type: 'sanity.imageCrop',
      bottom: 0.1797752706248954,
      left: 0,
      right: 0,
      top: 0.22471908828111922,
    },
    hotspot: {
      _type: 'sanity.imageHotspot',
      height: 0.5308989032131637,
      width: 1,
      x: 0.5,
      y: 0.5294943803368968,
    },
  },
  historiaKicker: 'Nuestra Historia',
  historiaTitulo: 'Un cambio radical',
  historiaTexto:
    'Nacimos en el sur de Chile exactamente en la comuna de Calbuco, llegamos hace 4 años desde la ciudad de Puerto Montt buscando un lugar que nos entregue calma en un momento complejo de salud mental que vivíamos con uno de nuestros hijos.\n\nEste lugar se transformó en nuestro refugio y comencé a cultivar en un terreno el cual supuestamente no servía para ello, sin embargo, pudimos cosechar nuestros primeros cultivos y eso nos generó una gran emoción. Este fue el impulso que me llevó a enamorarme poco a poco de los cultivos, pero especialmente de las flores que hoy quiero compartir con todos.',
  historiaImagen: {
    _type: 'image',
    asset: {
      _ref: 'image-01e0407e468460b8930c26db6802b3047d77cac5-932x678-jpg',
      _type: 'reference',
    },
  },
  promoTitulo: '¿Buscas un arreglo especial o materiales para tu jardín?',
  promoTexto:
    'Realizamos ramos de ocasión, arreglos personalizados, plantas en maceta y materiales de jardinería con entregas en Puerto Montt y alrededores.',
  promoBoton: 'Consultar disponibilidad',
};

export const fallbackCategorias: Categoria[] = [];
export const fallbackProductos: Producto[] = [];
export const fallbackArticulos: Articulo[] = [];

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
    if (Array.isArray(data)) {
      return data;
    }
  } catch (err) {
    // Retorna arreglo vacío
  }
  return [];
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
    if (Array.isArray(data)) {
      return data;
    }
  } catch (err) {
    // Retorna arreglo vacío
  }
  return [];
}

export async function getProductosDestacados(): Promise<Producto[]> {
  const todos = await getProductos();
  if (!todos || todos.length === 0) return [];
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
  return undefined;
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
    if (Array.isArray(data)) {
      return data;
    }
  } catch (err) {
    // fallback
  }
  return [];
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
  return undefined;
}
