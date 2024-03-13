import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import Link from 'next/link'

export default function HeroPost({
  title,
  coverImage,
  date,
  author,
  slug,
}) {
  return (
    <section class="mb-8 relative sm:mx-0">  
      <CoverImage
        slug={slug}
        title={title}
        imageObject={coverImage}
      >
        <div className="absolute w-full h-full bg-black bg-opacity-60 top-0 text-white">
          <div className="absolute top-1/4 w-full text-scale text-center">
            <Link className="ft-bold block mx-auto w-5/6" as={`/blog/${slug}`} href="/blog/[slug]">
              {title}
            </Link>
          </div>
          <div className="absolute bottom-6 px-10 w-full flex sm:flex-row flex-row-reverse items-center justify-between stext-lg">
            <div className="hidden sm:block">
              <Avatar name={author?.name} picture={author?.picture} className="text-sm sm:text-lg md:text-base lg:text-xl ft-bold"/>
            </div>
            <Date dateString={date} className="ml-3 text-xs sm:text-base md:text-sm lg:text-lg align-end"/>
          </div>
        </div>
      </CoverImage>
    </section>
  )
}
