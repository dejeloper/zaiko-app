import { FC, ReactNode } from "react";
import Head from "next/head"

interface Props {
  children: ReactNode;
  title: string;
  pageDescription: string;
}

export const ZaikoLayout: FC<Props> = ({ children, title, pageDescription }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />

      </Head>

      <nav>

      </nav>

      <main style={{ margin: '80px', maxWidth: '1440px', padding: '0px 30px' }}>
        {children}
      </main>

      <footer>

      </footer>
    </>
  )
}


