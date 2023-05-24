import { NextPage } from "next";

import { MenuHome } from "@/components/ui";
import { ZaikoLayout } from "@/components/layouts";

const Home: NextPage = () => {
  return (
    <ZaikoLayout title={"Zaiko - Inicio"} pageDescription={"Este es la página de Inicio"}>
      <header className="select-none">
        <h2 className="text-2xl font-semibold">
          Inicio
        </h2>
        <h4 className="text-sm font-normal mb-6">Hola, ¿En qué vamos a trabajar hoy?</h4>
      </header>
      <MenuHome />
    </ZaikoLayout>
  )
}

export default Home