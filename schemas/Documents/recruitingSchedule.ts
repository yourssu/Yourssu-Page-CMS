import {defineField, defineType} from 'sanity'
import {FaCalendar as icon} from 'react-icons/fa'

export default defineType({
  name: 'recruitingSchedule',
  title: 'Recruiting Schedule',
  type: 'document',
  icon,
  fields: [
    defineField({
      title: '제목',
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'applyProcedure',
      title: '전체 지원 절차',
      type: 'array',
      of: [{type: 'applyStepContent'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
