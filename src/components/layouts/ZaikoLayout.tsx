import { FC, ReactNode, useState } from "react";
import Head from "next/head"
import { Roboto } from 'next/font/google'

import { Navbar, SideMenu } from "../ui";

interface Props {
  children: ReactNode;
  title: string;
  pageDescription: string;
}

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});
export const ZaikoLayout: FC<Props> = ({ children, title, pageDescription }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content={pageDescription} />

        <style jsx global>{`
        html {
          font-family: 'Roboto';
        }
      `}</style>

      </Head>

      <Navbar setIsOpen={setIsOpen} />

      <main style={{ margin: '80px 0', padding: '0px 30px' }}>
        <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} > Hola</SideMenu>

        {children}
      </main>

      <footer>

      </footer>
    </>
  )
}