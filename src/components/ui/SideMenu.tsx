import { menuAdmin, menuNav } from "@/settings/menu";
import Link from "next/link";
import { Dispatch, FC, SetStateAction } from "react";
import 'remixicon/fonts/remixicon.css'

interface ISideMenu {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const SideMenu: FC<ISideMenu> = ({ isOpen, setIsOpen }) => {
  return (
    <main className={
      " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
      (isOpen
        ? " transition-opacity opacity-100 duration-100 translate-x-0 backdrop-blur-sm "
        : " transition-all delay-100 opacity-0 translate-x-full backdrop-blur-none "
      )
    }
    >
      <section
        className={
          " w-[300px] max-w-lg right-0 absolute bg-white h-full shadow-xl delay-100 duration-200 ease-in-out transition-all transform overflow-y-auto " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative top-0  flex flex-col space-y-2 overflow-y-auto  p-4 ">
          <header className="flex flex-row justify-between items-center text-[13px] font-medium">
            <span className="justify-start select-none">
              Menú
            </span>
            <button className="absolute right-0 w-6 h-6 flex justify-center items-center p-[4px] rounded-full text-[13px] hover:bg-black/5 font-normal transition ease-in-out duration-50 delay-0 mr-2 hover:border hover:border-black/40 " onClick={() => {
              setIsOpen(false);
            }}>✖</button>
          </header>
        </article>
        <article className="relative top-0 flex flex-col space-y-2 overflow-y-auto   px-4 border-t border-black/40">
          <main className="list">
            <ul>
              {
                menuNav.map(({ id, name, icon, url }) => (
                  <li key={id}>
                    <Link href={url} className="flex flex-row justify-start items-center w-full px-3 py-3 rounded-lg text-[13px] hover:bg-black/5 font-medium transition ease-in-out duration-300 my-2">
                      <i className={`ri-${icon} text-xl`}></i>
                      <span className=" ml-4">{name}</span>
                    </Link>
                  </li>
                ))
              }
            </ul>
          </main>
        </article>
        <article className="relative top-0 flex flex-col space-y-2 overflow-y-auto   px-4 border-t border-black/40">
          <main className="list">
            <ul>
              {
                menuAdmin.map(({ id, name, icon, url }) => (
                  <li key={id}>
                    <Link href={url} className="flex flex-row justify-start items-center w-full px-3 py-3 rounded-lg text-[13px] hover:bg-black/5 font-medium transition ease-in-out duration-300 my-2">
                      <i className={`ri-${icon} text-xl`}></i>
                      <span className=" ml-4">{name}</span>
                    </Link>
                  </li>
                ))
              }
            </ul>
          </main>
        </article>

      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      >
      </section>
    </main>
  );
}