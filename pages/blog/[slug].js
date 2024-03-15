import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import MoreStories from '../../components/more-stories'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Comments from '../../components/comments'
import SectionSeparator from '../../components/section-separator'
import Layout from '../../components/layout'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import Form from '../../components/form'

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Header />
      <Container className="md:mt-8 pb-16">
        <div className="flex flex-col-reverse md:block">
          <div className="mt-16 w-full md:sticky md:top-36 md:mt-0 md:w-1/3 md:float-right md:pl-8 lg:pl-16 ">
            <img src="/static/ad.jpg" />
            <h3 className="mt-8 ft-bold text-3xl sm:text-4xl md:text-2xl xl:text-3xl">
              SIGN UP Get Your Free Action Guide: "Understanding Day Trading!!!
            </h3>
          </div>
          <div className="w-full mt-8 md:w-2/3">
            {router.isFallback ? (
              <PostTitle>Loading…</PostTitle>
            ) : (
              <>
                <article>
                  <Head>
                    <title>
                      {post.title} | Next.js Blog Example with {CMS_NAME}
                    </title>
                    {/* <meta property="og:image" content={post.ogImage.url} /> */}
                  </Head>
                  <PostHeader
                    title={post.title}
                    coverImage={post.coverImage}
                    date={post.date}
                    author={post.author}
                  />
                  <PostBody content={post.body} />
                </article>

                <Comments comments={post.comments} />
                <Form _id={post._id} />
              </>
            )}
          </div>
        </div>        
        <SectionSeparator />
        {morePosts && morePosts.length > 0 && <MoreStories posts={morePosts} caption={true} />}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview)
  return {
    props: {
      preview,
      post: data?.post || null,
      morePosts: data?.morePosts || null,
    },
    revalidate: 1,
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  }
}
