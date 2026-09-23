export const categoria = {
  name: 'categoria',
  title: 'Categoría',
  type: 'document',
  fields: [
    {
      name: 'nombre',
      title: 'Nombre de la Categoría',
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
      name: 'descripcion',
      title: 'Descripción',
      type: 'text',
      rows: 3,
    },
    {
      name: 'icono',
      title: 'Icono o Identificador visual',
      type: 'string',
    },
    {
      name: 'orden',
      title: 'Orden de visualización',
      type: 'number',
      initialValue: 0,
    },
  ],
};
