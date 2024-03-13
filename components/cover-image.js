import cn from 'classnames'
import Link from 'next/link'
import { urlForImage } from '../lib/sanity'

export default function CoverImage({ title, url, imageObject, slug, children }) {
  const image = (
    <img
      alt={`Cover Image for ${title}`}
      width="100%"
      height="100%"
      className={cn('shadow-small', {
        'transition-shadow duration-200 hover:shadow-medium': slug,
      })}
      src={urlForImage(imageObject).width(1280).height(600).url()}
    />
  )

  return (
    <div className="-mx-5 sm:mx-0 relative">
      {slug ? (
        <Link as={`/blog/${slug}`} href="/blog/[slug]" aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
      {children}
    </div>
  )
}
