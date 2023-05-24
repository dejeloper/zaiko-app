import { NextPage } from "next";

import { ZaikoLayout } from "@/components/layouts";
import { menuHome } from "@/settings/menu";
import Link from "next/link";


const Home: NextPage = () => {
  return (
    <ZaikoLayout title={"Zaiko - Inicio"} pageDescription={"Este es la página de Inicio"}>
      <header className="select-none">
        <h2 className="text-2xl font-semibold">
          Inicio
        </h2>
        <h4 className="text-sm font-normal mb-6">Hola, ¿En qué vamos a trabajar hoy?</h4>
      </header>
      <section id="cards" className="grid grid-flow-row xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 w-full">
        {
          menuHome.map(({ id, name, image, descriptionMenu, url }) => (
            <article key={id}>
              <header className="rounded-md border border-black/1 shadow-md shadow-black/20 flex justify-center items-center">
                <Link href={url}>
                  <picture>
                    <img src={`images/menus/${image}`} alt={descriptionMenu} style={{ height: '160px' }} />
                  </picture>
                </Link>
              </header>
              <footer className=" py-4 px-2 flex justify-center items-center">
                <span className="font-bold font-ro">
                  {name}
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