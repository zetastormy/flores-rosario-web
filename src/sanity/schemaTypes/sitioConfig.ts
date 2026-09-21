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
      initialValue: 'Floristería artesanal & botánica',
    },
    {
      name: 'telefonoWhatsApp',
      title: 'Número de WhatsApp (con código de país)',
      type: 'string',
      description: 'Ejemplo: 5493411234567',
    },
    {
      name: 'mensajeWhatsAppDefault',
      title: 'Mensaje predeterminado de WhatsApp',
      type: 'string',
      initialValue: '¡Hola! Quisiera consultar por un pedido de flores.',
    },
    {
      name: 'instagramUrl',
      title: 'Enlace de Instagram',
      type: 'url',
    },
    {
      name: 'direccion',
      title: 'Dirección física / Local',
      type: 'string',
    },
    {
      name: 'horariosAtencion',
      title: 'Horarios de atención',
      type: 'string',
    },
    {
      name: 'bannerAviso',
      title: 'Aviso destacado en cabecera (opcional)',
      type: 'string',
    },
  ],
};
