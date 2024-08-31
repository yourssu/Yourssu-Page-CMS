import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'growthAndDiffContent',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: '제목',
      description: '줄바꿈이 되지 않습니다.',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: '내용',
      type: 'text',
      description: '소개 페이지에서 줄바꿈도 반영됩니다. 이를 고려해서 작성해주세요.',
    }),
  ],
})
