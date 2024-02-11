import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'defaultContent',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: '제목',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: '내용',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
