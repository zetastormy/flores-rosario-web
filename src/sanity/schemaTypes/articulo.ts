export const articulo = {
  name: 'articulo',
  title: 'Artículo de Blog',
  type: 'document',
  fields: [
    {
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'titulo',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'fechaPublicacion',
      title: 'Fecha de Publicación',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'resumen',
      title: 'Resumen o Extracto',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'imagenPortada',
      title: 'Imagen de Portada',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'categoria',
      title: 'Categoría o Tema',
      type: 'string',
    },
    {
      name: 'contenido',
      title: 'Contenido',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    },
  ],
};
