import PostPreview from '../components/post-preview'

export default function MoreStories({ posts, caption}) {;
  return (
    <section>
      {
        caption && (
          <h2 className="mb-8 text-3xl sm:text-5xl md:text-7xl ft-bold leading-tight tracking-tighter ">
            More Posts
          </h2>
        )
      }
      
      <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-y-8 sm:gap-y-12 md:gap-12 lg:gap-12 xl:gap-16">
        {posts.map((post) => {
          return (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        )}
        )}
      </div>
    </section>
  )
}
