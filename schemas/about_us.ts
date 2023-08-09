import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about_us',
  title: 'AboutUs',
  type: 'document',
  fields: [
    defineField({
      name: 'about',
      title: 'About',
      type: 'blockContent',
    }),
  ],
})
