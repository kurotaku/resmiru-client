import React, { ReactNode } from 'react'
import MainNavigation from './main-navigation'
import Head from 'next/head'

type Props = {
  children: ReactNode;
  title: string;
}

const Layout = ({children, title = 'No title'}: Props) => {
  return(
    <>
      <style jsx>{`
        .contentWrap{
          display: flex;
        }
      `}</style>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={`contentWrap`}>
        <MainNavigation />
        {children}
      </div>
    </>
  )
}

export default Layout
