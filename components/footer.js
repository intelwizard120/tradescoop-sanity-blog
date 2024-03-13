import Link from 'next/link'
import Container from './container'

export default function Footer() {
  return (
    <Container>
      <Link href="https://tradescopp.io">
        <img src="/static/logo-dark.png" />
      </Link>
      <p className="mt-6">
        Trade smarter by following guidance and trading ideas from proven experts with full transparency backed by data.
      </p>
      <div className="flex flex-col items-start md:flex-row md:justify-between md:items-center my-24">
        <p className="order-2 md:order-1">
          ©2024 Tradescoop, Inc. All rights reserved.&nbsp;&nbsp;
          <span className="text-green-400 md:block lg:inline">Privacy Policy</span>
        </p>
        <div className="flex mb-8 order-1 md:order-2 md:mb-0">
          <Link href="https://www.facebook.com/tradescoophq" className="social mr-4">
            <i className="fa-brands fa-facebook-f fa-fw" />
          </Link>
          <Link href="https://twitter.com/tradescoophq" className="social mr-4">
            <i className="fa-brands fa-twitter fa-fw" />
          </Link>
          <Link href="https://www.instagram.com/tradescoophq" className="social mr-4">
            <i className="fa-brands fa-instagram fa-fw" />
          </Link>
          <Link href="https://www.linkedin.com/company/tradescoop/" className="social mr-4">
            <i className="fa-brands fa-linkedin fa-fw" />
          </Link>
          <Link href="https://blog.tradescoop.io/" className="social">
            <i className="fa-brands fa-youtube fa-fw" />
          </Link>
        </div>
      </div>
      
    </Container>
  )
}
