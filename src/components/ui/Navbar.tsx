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
          <a href="/customers" className="btn-nav">
            Clientes
          </a>
          <a href="/products" className="btn-nav">
            Productos
          </a>
          <a href="/inventory" className="btn-nav">
            Inventario
          </a>
        </div>
      </section>
      <section className="flex flex-grow justify-end">
        <button className="">
          <i className="btn-nav-icon ri-message-2-line text-[18px]"></i>
        </button>
        <button className="btn-nav" onClick={() => setIsOpen(true)}>
          Menú
        </button>
      </section>
    </nav>
  )
}