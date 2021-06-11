import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from './Layout.module.css';

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <main className={styles.page}>
      <header className={styles.pageHeader}>Header</header>
      <article className={styles.mainArticle}>
        {children}
      </article>
      <nav className={styles.mainNav}>Nav</nav>
      <div className={styles.siteAds}>Ads</div>
      <footer className={styles.pageFooter}>Footer</footer>
    </main>
  </>
)

export default Layout
