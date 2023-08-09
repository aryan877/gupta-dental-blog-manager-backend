import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'reviews',
  title: 'Reviews',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'review',
      title: 'Review',
      type: 'string',
    }),
    defineField({
      name: 'stars',
      title: 'Stars',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
})
