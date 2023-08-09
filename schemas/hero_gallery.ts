import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'hero_gallery',
  title: 'HeroGallery',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      media: 'image',
    },
  },
})
