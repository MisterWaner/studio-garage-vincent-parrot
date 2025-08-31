import {defineType, defineField} from 'sanity'

export const planningType = defineType({
  name: 'planning',
  title: 'Planning',
  type: 'document',
  fields: [
    defineField({
      name: 'dayInTheWeek',
      type: 'number'
    }),
    defineField({
      name: 'day',
      type: 'string',
      options: {
        list: [
          {title: 'Lundi', value: 'lundi'},
          {title: 'Mardi', value: 'mardi'},
          {title: 'Mercredi', value: 'mercredi'},
          {title: 'Jeudi', value: 'jeudi'},
          {title: 'Vendredi', value: 'vendredi'},
          {title: 'Samedi', value: 'samedi'},
          {title: 'Dimanche', value: 'dimanche'},
          {title: 'Férié', value: 'férié'},
        ],
      },
    }),
    defineField({
      name: 'status',
      type: 'string',
      options: {
        list: [
          {title: 'Fermé', value: 'fermé'},
          {title: 'Ouvert', value: 'ouvert'},
        ],
      },
    }),
    defineField({
      name: 'ouverture',
      type: 'string',
      options: {
        list: [
          {title: '08:00', value: '08:00'},
          {title: '09:00', value: '09:00'},
          {title: '10:00', value: '10:00'},
          {title: '11:00', value: '11:00'},
          {title: '12:00', value: '12:00'},
          {title: '13:00', value: '13:00'},
          {title: '14:00', value: '14:00'},
          {title: '15:00', value: '15:00'},
          {title: '16:00', value: '16:00'},
          {title: '17:00', value: '17:00'},
          {title: '18:00', value: '18:00'},
        ],
      },
    }),
    defineField({
      name: 'fermeture',
      type: 'string',
      options: {
        list: [
          {title: '08:00', value: '08:00'},
          {title: '09:00', value: '09:00'},
          {title: '10:00', value: '10:00'},
          {title: '11:00', value: '11:00'},
          {title: '12:00', value: '12:00'},
          {title: '13:00', value: '13:00'},
          {title: '14:00', value: '14:00'},
          {title: '15:00', value: '15:00'},
          {title: '16:00', value: '16:00'},
          {title: '17:00', value: '17:00'},
          {title: '18:00', value: '18:00'},
        ],
      },
    }),
  ],
})
