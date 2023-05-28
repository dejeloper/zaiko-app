import { Dispatch, FC, SetStateAction } from "react";
import Link from "next/link";

interface INavbar {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const Navbar: FC<INavbar> = ({ setIsOpen }) => {
  return (
    <nav className="flex items-center top-0 fixed bg-white h-[60px] w-full px-6">
      <section className="flex flex-grow justify-start w-auto whitespace-nowrap">
        <Link href="/" >
          <h2>
            <span className="text-xl font-medium">Zaiko |</span>
            <span className="text-xl ml-2">Software</span>
          </h2>
        </Link>
      </section>
      <section className="flex">
        <div className="hidden sm:block">
          <Link href="/products" className="btn-nav">
            Productos
          </Link>
          <Link href="/inventory" className="btn-nav">
            Inventario
          </Link>
          <Link href="/pos" className="btn-nav">
            POS
          </Link>
        </div>
      </section>
      <section className="flex flex-grow justify-end">
        <button className="relative items-center mr-2" title="Notificaciones">
          <i className="btn-nav-icon ri-message-2-line text-[18px]"></i>
          <span className="sr-only">Notificaciones</span>
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-[10px] font-bold text-white bg-red-500 border-2 border-white rounded-full -top-3 -right-3">
            24
          </div>
        </button>
        <button className="btn-nav" onClick={() => setIsOpen(true)}>
          Menú
        </button>
      </section>
    </nav>
  )
}