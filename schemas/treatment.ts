import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'treatment',
  title: 'Treatment',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'iconImage',
      title: 'Icon image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'doctor',
      title: 'Doctor',
      type: 'reference',
      to: {type: 'doctor'},
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      doctor: 'doctor.name',
      media: 'iconImage',
    },
    prepare(selection) {
      const {doctor} = selection
      return {...selection, subtitle: doctor && `by ${doctor}`}
    },
  },
})
