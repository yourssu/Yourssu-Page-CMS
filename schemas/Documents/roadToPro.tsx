import {defineField, defineType} from 'sanity'
import {FaFileVideo as icon} from 'react-icons/fa'

export default defineType({
  name: 'roadToPro',
  title: 'Road To Pro',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'video_thumbnail',
      title: '영상 썸네일',
      type: 'image',
    }),
    defineField({
      name: 'presenter',
      title: '발표자',
      type: 'array',
      of: [{type: 'presenterContent'}],
    }),
    defineField({
      name: 'video_link',
      title: '영상 링크',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      presenter: 'presenter',
      media: 'video_thumbnail',
    },
    prepare(selection) {
      const {presenter, media} = selection
      const firstPresneter = presenter[0]

      return {
        title: firstPresneter.presenter_nickname,
        subtitle: firstPresneter.presenter_name,
        media: media,
      }
    },
  },
})
