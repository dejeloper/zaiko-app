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

      </Head>
      <div className={roboto.className}>
        <Navbar setIsOpen={setIsOpen} />

        <main className="my-[80px] xxs:mx-2 xs:mx-2 xxs:px-2.5 xs:px-[30px]">
          <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />

          <div className="flex flex-row justify-center">
            <div className="xxs:w-full md:w-[90%] lg:w-[80%]">
              {children}
            </div>
          </div>
        </main>

        <footer>

        </footer>
      </div>
    </>
  )
}