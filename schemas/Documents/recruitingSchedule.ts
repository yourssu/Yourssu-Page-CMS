import {FaCalendar as icon} from 'react-icons/fa'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'recruitingSchedule',
  title: 'Recruiting Schedule',
  type: 'document',
  icon,
  fields: [
    defineField({
      title: '제목',
      name: 'title',
      description: '(필수) 양식: 20XX년 X학기 리쿠르팅 - 과제 X (혹은 과제 O)',
      type: 'string',
    }),
    defineField({
      title: '리쿠르팅 전체 일정',
      name: 'recruitingSchedule',
      description:
        '"과제 X 문서" 기반으로 반영됩니다. "과제 O 문서"에서는 작성하지 않으셔도 됩니다.',
      type: 'dateContent',
    }),
    defineField({
      title: '서류 마감 일정',
      name: 'formDeadline',
      description: '해당 기간 동안에만 페이지 내 지원 버튼이 활성화 됩니다.',
      type: 'dateContent',
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
