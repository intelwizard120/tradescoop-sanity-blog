import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from './cover-image'
import Link from 'next/link'
import { urlForImage } from '../lib/sanity'
export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title} 
          imageObject={coverImage}
          url={urlForImage(coverImage).url()}
        />
      </div>
      <h3 className="mb-3 text-xl sm:text-2xl md:text-2xl lg:text-3xl leading-snug">
        <Link className="hover:underline ft-bold" as={`/blog/${slug}`} href="/blog/[slug]">
          {title}
        </Link>
      </h3>
      <p className="mb-4 text-lg leading-relaxed">
        {excerpt}
      </p>
      <div className="mb-4 flex items-center justify-between stext-lg">
        <Avatar name={author?.name} picture={author?.picture} className="text-sm sm:text-lg md:text-base lg:text-xl ft-bold" />
        <Date dateString={date} className="ml-3 text-xs sm:text-base md:text-sm lg:text-lg"/>
      </div>
    </div>
  )
}
