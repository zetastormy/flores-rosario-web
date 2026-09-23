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
      name: 'heroTitulo',
      title: 'Título Principal del Hero',
      type: 'string',
      initialValue: 'Flores cultivadas con propósito',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'heroBajada',
      title: 'Bajada / Lede del Hero',
      type: 'text',
      rows: 3,
      initialValue:
        'Te invitamos a conectar con la naturaleza viviendo el momento presente por medio de la contemplación del cultivo artesanal de flores.',
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
      initialValue: 'Un cambio radical',
    },
    {
      name: 'historiaTexto',
      title: 'Texto de la Historia',
      type: 'text',
      rows: 5,
      initialValue:
        'Nacimos en el sur de Chile exactamente en la comuna de Calbuco, llegamos hace 4 años desde la ciudad de Puerto Montt buscando un lugar que nos entregue calma en un momento complejo de salud mental que vivíamos con uno de nuestros hijos.\n\nEste lugar se transformó en nuestro refugio y comencé a cultivar en un terreno el cual supuestamente no servía para ello, sin embargo, pudimos cosechar nuestros primeros cultivos y eso nos generó una gran emoción. Este fue el impulso que me llevó a enamorarme poco a poco de los cultivos, pero especialmente de las flores que hoy quiero compartir con todos.',
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
        'Realizamos ramos de ocasión, arreglos personalizados, plantas en maceta y materiales de jardinería con entregas en Puerto Montt y alrededores.',
    },
    {
      name: 'promoBoton',
      title: 'Texto Botón Banner Promocional',
      type: 'string',
      initialValue: 'Consultar disponibilidad',
    },
  ],
};
