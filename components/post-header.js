import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'
export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 sm:mx-0">
        <CoverImage title={title} imageObject={coverImage} url={coverImage} />
      </div>
      <div className="mb-16 flex items-center justify-between stext-lg">
        <Avatar name={author?.name} picture={author?.picture} className="text-base sm:text-lg md:text-xl lg:text-2xl ft-bold"/>
        <Date dateString={date} className="ml-3"/>
      </div>
    </>
  )
}
