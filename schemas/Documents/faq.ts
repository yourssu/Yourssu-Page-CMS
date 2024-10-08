import {FaQuestionCircle as icon} from 'react-icons/fa'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  icon,
  fields: [
    defineField({
      title: '제목',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: '자주 묻는 질문',
      name: 'faq',
      type: 'array',
      of: [{type: 'questionContent'}],
    }),
  ],
})
