export const producto = {
  name: 'producto',
  title: 'Producto',
  type: 'document',
  fields: [
    {
      name: 'nombre',
      title: 'Nombre del Producto',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'nombre',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'precio',
      title: 'Precio (CLP / Pesos Chilenos)',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(0),
    },
    {
      name: 'unidad',
      title: 'Detalle de Unidad (ej: por ramo, con florero, por saco, unidad)',
      type: 'string',
    },
    {
      name: 'etiqueta',
      title: 'Etiqueta destacada (ej: Más vendido, Temporada)',
      type: 'string',
    },
    {
      name: 'categoria',
      title: 'Categoría',
      type: 'reference',
      to: [{ type: 'categoria' }],
    },
    {
      name: 'imagen',
      title: 'Imagen Principal',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'galeria',
      title: 'Galería de Imágenes',
      type: 'array',
      of: [{ type: 'image' }],
    },
    {
      name: 'descripcion',
      title: 'Descripción',
      type: 'text',
      rows: 4,
    },
    {
      name: 'cuidados',
      title: 'Recomendaciones de cuidado',
      type: 'text',
      rows: 3,
    },
    {
      name: 'destacado',
      title: 'Destacado en portada',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'disponible',
      title: 'Disponible en stock',
      type: 'boolean',
      initialValue: true,
    },
  ],
};
