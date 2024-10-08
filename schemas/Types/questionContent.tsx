import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'questionContent',
  type: 'object',
  fields: [
    defineField({
      name: 'question',
      title: '질문',
      type: 'string',
    }),
    defineField({
      name: 'answer',
      title: '답변',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'question',
      subtitle: 'answer',
    },
    prepare(selection) {
      const {title, subtitle} = selection
      const checkInformation = title && subtitle

      return {
        title: title,
        subtitle: subtitle,
        media: checkInformation ? <span style={{fontSize: '1.2rem'}}>✅</span> : <span>❌</span>,
      }
    },
  },
})
