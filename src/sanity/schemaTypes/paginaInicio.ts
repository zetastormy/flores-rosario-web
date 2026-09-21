export const paginaInicio = {
  name: 'paginaInicio',
  title: 'Página de Inicio',
  type: 'document',
  fields: [
    // Banner superior opcional
    {
      name: 'bannerAviso',
      title: 'Aviso Superior (opcional)',
      type: 'string',
      description: 'Texto promocional o aviso de envíos en la parte superior.',
    },
    // Sección Hero
    {
      name: 'heroKicker',
      title: 'Kicker / Antetítulo del Hero',
      type: 'string',
      initialValue: 'Floristería artesanal & botánica · Calbuco',
    },
    {
      name: 'heroTitulo',
      title: 'Título Principal del Hero',
      type: 'string',
      initialValue: 'Flores frescas con alma de barrio',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'heroBajada',
      title: 'Bajada / Lede del Hero',
      type: 'text',
      rows: 3,
      initialValue:
        'Diseños botánicos pensados con amor y dedicación. Arreglos florales, plantas y materiales de jardinería para celebrar, acompañar y transformar cada rincón en Calbuco.',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'heroBotonCatalogo',
      title: 'Texto Botón Catálogo',
      type: 'string',
      initialValue: 'Ver catálogo',
    },
    {
      name: 'heroBotonWhatsapp',
      title: 'Texto Botón WhatsApp',
      type: 'string',
      initialValue: 'Hacer pedido',
    },
    {
      name: 'heroImagen',
      title: 'Imagen Destacada del Hero',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'heroCaption',
      title: 'Pie de foto de la imagen del Hero',
      type: 'string',
      initialValue: 'Ramos y flores frescas preparados en el día',
    },
    // Sección Historia
    {
      name: 'historiaKicker',
      title: 'Kicker de Sección Historia',
      type: 'string',
      initialValue: 'Nuestra Historia',
    },
    {
      name: 'historiaTitulo',
      title: 'Título de la Sección Historia',
      type: 'string',
      initialValue: 'Flores elegidas una por una en Calbuco',
    },
    {
      name: 'historiaTexto',
      title: 'Texto de la Historia',
      type: 'text',
      rows: 5,
      initialValue:
        'Nacimos en Calbuco, entre aguas calmas y canales australes, con la convicción de conectar la naturaleza con el día a día. Trabajamos con flores frescas seleccionadas, plantas adaptadas al clima del sur y materiales durables de jardinería para que cada hogar florezca.',
    },
    {
      name: 'historiaImagen',
      title: 'Imagen de la Sección Historia',
      type: 'image',
      options: { hotspot: true },
    },
    // Banner Promocional
    {
      name: 'promoTitulo',
      title: 'Título del Banner Promocional',
      type: 'string',
      initialValue: '¿Buscas un arreglo especial o materiales para tu jardín?',
    },
    {
      name: 'promoTexto',
      title: 'Texto del Banner Promocional',
      type: 'text',
      rows: 2,
      initialValue:
        'Escríbenos directamente a nuestro WhatsApp para pedidos personalizados, ramos de ocasión o asesoramiento botánico.',
    },
    {
      name: 'promoBoton',
      title: 'Texto Botón Banner Promocional',
      type: 'string',
      initialValue: 'Consultar disponibilidad',
    },
  ],
};
