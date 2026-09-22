export const sitioConfig = {
  name: 'sitioConfig',
  title: 'Configuración General del Sitio',
  type: 'document',
  fields: [
    {
      name: 'nombreNegocio',
      title: 'Nombre del Negocio',
      type: 'string',
      initialValue: 'Flores del Rosario',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'subtitulo',
      title: 'Subtítulo / Eslogan',
      type: 'string',
      initialValue: 'Floristería artesanal, botánica & jardinería',
    },
    {
      name: 'telefonoWhatsApp',
      title: 'Número de WhatsApp (con código de país)',
      type: 'string',
      description: 'Ejemplo: 56912345678',
    },
    {
      name: 'mensajeWhatsAppDefault',
      title: 'Mensaje predeterminado de WhatsApp',
      type: 'string',
      initialValue: '¡Hola! Quisiera consultar por arreglos florales o materiales de jardinería.',
    },
    {
      name: 'instagramUrl',
      title: 'Enlace de Instagram',
      type: 'url',
    },
    {
      name: 'direccion',
      title: 'Zona de entrega / Despacho',
      description: 'Zona de cobertura para pedidos a domicilio (sin atención presencial)',
      type: 'string',
      initialValue: 'Entregas a domicilio en Puerto Montt y alrededores',
    },
    {
      name: 'bannerAviso',
      title: 'Aviso destacado en cabecera (opcional)',
      type: 'string',
    },
  ],
};
