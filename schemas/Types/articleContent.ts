import {defineArrayMember,  defineType} from 'sanity'

export default defineType({
  name: 'articleContent',
  title: '미디엄',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'article'
    }),
  ],
})
