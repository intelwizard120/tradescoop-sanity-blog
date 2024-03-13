import Link from 'next/link'
import Container from './container'
import NavBar from './navbar'

export default function Header() {
  return (
    <section className="bg-090f0b sticky top-0 z-30">
      <Container>
        <div className="flex h-16 items-center justify-between gap-2">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link href="https://tradescoop.io">
              <img src="/static/logo.svg" />
            </Link>
          </div>
          <NavBar />
        </div>
      </Container>
    </section>
  )
}