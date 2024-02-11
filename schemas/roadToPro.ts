import {defineField, defineType} from 'sanity'
import {FaFileVideo as icon} from 'react-icons/fa'

export default defineType({
  name: 'roadToPro',
  title: 'RoadToPro',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'video_thumbnail',
      title: '영상 썸네일',
      type: 'image',
    }),
    defineField({
      name: 'presenter_nickname',
      title: '발표자 닉네임',
      type: 'string',
    }),
    defineField({
      name: 'presenter_name',
      title: '발표자 이름',
      type: 'string',
    }),
    defineField({
      name: 'video_link',
      title: '영상 링크',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'presenter_nickname',
      subtitle: 'presenter_name',
      media: 'video_thumbnail',
    },
  },
})
