import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Header from '../components/header'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Pagination from '../components/pagination'
import { useState } from 'react'

export default function Index({ _count, _heroPost, _allPosts, preview }) {
  const [heroPost, setHeroPost] = useState(_heroPost);
  const [allPosts, setAllPosts] = useState(_allPosts);
  const [page, setPage] = useState(1);
  const changePage = async page => {
    const [_count, _heroPost, _allPosts] = await getAllPostsForHome(preview, page)
    setPage(page);
    setHeroPost(_heroPost);
    setAllPosts(_allPosts);    
  };

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Trading signals, investment strategies & financial wisdom | {CMS_NAME}</title>
        </Head>
        <Header />
        <Container className="mt-8">
          {
            heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
            />
          )}
          {allPosts.length > 0 && <MoreStories posts={allPosts} caption={!!heroPost}/>}
          <Pagination page={page} pageCount={_count} onChangePage={changePage} />
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const [_count, _heroPost, _allPosts] = await getAllPostsForHome(preview, 1)
  return {
    props: { _count, _heroPost: _heroPost || null, _allPosts, preview },
    revalidate: 1,
  }
}
