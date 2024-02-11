import {defineField, defineType} from 'sanity'
import {MdPeople as icon} from 'react-icons/md'

export default defineType({
  name: 'department',
  title: 'Department',
  type: 'document',
  icon,
  fields: [
    defineField({
      title: '부서 기본 정보',
      name: 'basicInformation',
      type: 'informationContent',
    }),
    defineField({
      name: 'task',
      title: '부서 업무',
      type: 'defaultContent',
    }),
    defineField({
      name: 'ideal',
      title: '인재상',
      type: 'defaultContent',
    }),
    defineField({
      name: 'experience',
      title: '추천 경험',
      type: 'defaultContent',
    }),
    defineField({
      name: 'skill',
      title: '기술 스택',
      type: 'skillContent',
    }),
    defineField({
      name: 'applyProcedure',
      title: '지원 절차',
      type: 'array',
      of: [{type: 'applyStepContent'}],
    }),
    defineField({
      name: 'roadToProVideo',
      title: '로드 투 프로',
      type: 'roadToProContent',
    }),
    defineField({
      name: 'inaWord',
      title: '한 마디',
      type: 'inaWordContent',
    }),
  ],
  preview: {
    select: {
      title: 'basicInformation.name',
      media: 'basicInformation.icon',
    },
  },
})
