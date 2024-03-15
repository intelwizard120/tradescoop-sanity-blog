import Link from 'next/link'
import Container from './container'

export default function Footer() {
  return (
    <Container className="pt-16">
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
      <hr />
      <div className="text-sm">
        <p className="mt-12 ft-light">
          By continuing to use this site and its information, products, and/or services, you consent to
          our <strong><a href="https://tradescoop.io/terms-and-conditions" className="underline">terms and conditions</a></strong>.
          Please note that if you do not agree with the terms and conditions of this site, you may not use 
          any of our services and you must leave the website immediately.
        </p>
        <p className="mt-8 ft-light">
          Tradescoop LLC., and its website at www.tradescoop.io are not regulated entities, nor are the contents, 
          publications, and opinions associated with these entities regulated by a U.S. regulatory agency. We do not 
          make recommondations or offer investment, tax or legal advice. You alone are responsible for evaluating the 
          merits and risks associated with the use of our systems, services and securities and investment products and services.
        </p>
        <p className="mt-8 ft-light">
          Trading involves a substantial degree of risk and may not be suitable for all investors. Past performance does 
          not predict future results. Tradescoop relays notifications that traders send out about their trading ideas and 
          does not endorse their content in any way, or warrant in any way that a given trading idea will be profitable. 
          Tradescoop is not a licensed Financial Advisory. This is neither a solicitation nor an offer to Buy/Sell any securities.
          No representation is being made that any account will or is likely to achieve profits or losses similar to those shown on this website.
        </p>
        <p className="mt-8 mb-12 ft-light">
          Tradescoop does not provide or guarantee any financial, legal tax, or accounting advice or advise regarding the suitability, 
          profitability or potential value of any particular security, trading strategy, or information source. By accessing our content, 
          you agree to receive special updates, offers, and advertisements from Tradescoop and to be bound by
          the <strong><a href="https://tradescoop.io/terms-and-conditions" className="underline">Terms of service</a></strong>.
        </p>
      </div>
    </Container>
  )
}
