import { NextPage } from "next";

import { ZaikoLayout } from "@/components/layouts";
import { menuInitial } from "@/settings/menu";
import Link from "next/link";


const Home: NextPage = () => {
  return (
    <ZaikoLayout title={"Zaiko - Inicio"} pageDescription={"Este es la página de Inicio"}>
      <h2 className="text-3xl font-semibold">
        Inicio
      </h2>
      <h4 className="text-md font-normal mb-4">Hola, ¿En qué vamos a trabajar hoy?</h4>
      <section id="cards" className="grid grid-flow-row grid-cols-3 gap-8 w-full">
        {
          menuInitial.menusHome.map((menu) => (
            <article key={menu.id}>
              <header className="rounded-md border border-black/1 shadow-md shadow-black/20 flex justify-center items-center">
                <Link href={menu.url}>
                  <picture>
                    <img src={`images/menus/${menu.image}`} alt={menu.descriptionMenu} style={{ height: '160px' }} />
                  </picture>
                </Link>
              </header>
              <footer className=" py-4 px-2 flex justify-center items-center">
                <span className="font-bold font-ro">
                  {menu.name}
                </span>
              </footer>
            </article>
          ))
        }
      </section>
    </ZaikoLayout>
  )
}

export default Home