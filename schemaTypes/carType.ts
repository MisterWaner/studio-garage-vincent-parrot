import {defineField, defineType} from 'sanity'

export const carType = defineType({
  name: 'car',
  title: 'Car',
  type: 'document',
  fields: [
    defineField({
      name: "immatriculation",
      type: "string"
    }),
    defineField({
      name: 'marque',
      type: 'string',
    }),
    defineField({
      name: 'model',
      type: 'string',
    }),
    defineField({
      name: 'annee',
      type: 'number',
    }),
    defineField({
      name: 'couleur',
      type: 'string',
    }),
    defineField({
      name: 'kilometrage',
      type: 'number',
    }),
    defineField({
      name: 'prix',
      type: 'number',
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'carburant',
      type: 'string',
      options: {
        list: [
          { title: 'Essence', value: 'essence' },
          { title: 'Diesel', value: 'diesel' },
          { title: 'Électrique', value: 'électrique' },
          { title: 'Hybride', value: 'hybride' },
        ],
      },
    }),
    defineField({
      name: 'transmission',
      type: 'string',
      options: {
        list: [
          { title: 'Manuelle', value: 'manuelle' },
          { title: 'Automatique', value: 'automatique' },
        ],
      },
    }),
    defineField({
      name: 'images',
      type: 'array',
      of: [{ type: 'image' }],
    }),
    defineField({
      name: 'createdAt',
      type: 'datetime',
    }),
    defineField({
      name: 'updatedAt',
      type: 'datetime',
    }),
  ],
})
