import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'socials',
  title: 'Socials',
  type: 'document',
  fields: [
    defineField({
      name: 'key',
      title: 'Key',
      type: 'string',
    }),
    defineField({
      name: 'platformUrl',
      title: 'PlatformUrl',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'key',
      subtitle: 'platformUrl',
    },
  },
})
