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
      initialValue: 'flores con propósito',
    },
    {
      name: 'telefonoWhatsApp',
      title: 'Número de WhatsApp (con código de país)',
      type: 'string',
      initialValue: '56966223508',
      description: 'Ejemplo: 56966223508',
    },
    {
      name: 'mensajeWhatsAppDefault',
      title: 'Mensaje predeterminado de WhatsApp',
      type: 'string',
      initialValue: '¡Hola! Quisiera consultar por disponibilidad.',
    },
    {
      name: 'instagramUrl',
      title: 'Enlace de Instagram',
      type: 'url',
      initialValue: 'https://instagram.com/floresdelrosario_cl',
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
      initialValue: '🌿 Entregas en Puerto Montt y alrededores · Pedidos con anticipación por WhatsApp',
    },
  ],
};
