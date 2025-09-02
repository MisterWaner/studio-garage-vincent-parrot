import {defineField, defineType} from 'sanity'

export const carType = defineType({
  name: 'car',
  title: 'Car',
  type: 'document',
  fields: [
    defineField({
      name: 'immatriculation',
      type: 'string',
    }),
    defineField({
      name: 'brand',
      type: 'string',
    }),
    defineField({
      name: 'model',
      type: 'string',
    }),
    defineField({
      name: 'year',
      type: 'number',
    }),
    defineField({
      name: 'color',
      type: 'string',
    }),
    defineField({
      name: 'mileage',
      type: 'number',
    }),
    defineField({
      name: 'price',
      type: 'number',
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'power',
      type: 'number',
    }),
    defineField({
      name: 'status',
      type: 'string',
      options: {
        list: [
          {title: 'Available', value: 'available'},
          {title: 'Sold', value: 'sold'},
          {title: 'Reserved', value: 'reserved'},
        ],
      },
    }),
    defineField({
      name: 'fuel',
      type: 'string',
      options: {
        list: [
          {title: 'Gasoline', value: 'gasoline'},
          {title: 'Diesel', value: 'diesel'},
          {title: 'Electric', value: 'electric'},
          {title: 'Hybrid', value: 'hybrid'},
        ],
      },
    }),
    defineField({
      name: 'transmission',
      type: 'string',
      options: {
        list: [
          {title: 'Manual', value: 'manual'},
          {title: 'Automatic', value: 'automatic'},
        ],
      },
    }),
    defineField({
      name: 'images',
      type: 'array',
      of: [{type: 'image'}],
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
