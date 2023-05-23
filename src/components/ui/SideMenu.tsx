import { Dispatch, FC, ReactNode, SetStateAction } from "react";

interface ISideMenu {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const SideMenu: FC<ISideMenu> = ({ children, isOpen, setIsOpen }) => {
  return (
    <main className={
      " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
      (isOpen
        ? " transition-opacity opacity-100 duration-300 translate-x-0 backdrop-blur-sm "
        : " transition-all delay-300 opacity-0 translate-x-full backdrop-blur-none "
      )
    }
    >
      <section
        className={
          " w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-300 duration-300 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative w-screen w-md pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          <header className="p-4 font-bold text-lg">Header</header>
          {children}
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