import { Productos } from "@/components/admin/Productos"
import { ZaikoLayout } from "@/components/layouts"
import { Tabs } from "@/components/ui"
import { tabs } from "@/interfaces/tabs"


const AdminPage = () => {
  const tabs: tabs[] = [{
    index: 1,
    id: "products",
    name: "Productos",
    children: <Productos />
  }
  ]

  return (
    <ZaikoLayout title={"Administración"} pageDescription={"Administración de Plataforma"}>
      <header className="select-none">
        <h2 className="text-2xl font-semibold">
          Administración de Plataforma
        </h2>
        <h4 className="text-sm font-normal mb-6">Configuraciones para la herramienta. ¿Qué cambios desea hacer hoy?</h4>
      </header>
      <main>
        <Tabs tabs={tabs} />
      </main>
      {/* <main>
      <section id="cards" className="grid grid-flow-row xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 w-full">
      {
        menuHome.map((menu) => {
          return (
            <article key={menu.id}>
              <MenuHomeCard menu={menu} />
            </article>
          )
        }
        )
      }
    </section>
      </main> */}
    </ZaikoLayout>
  )
}

export default AdminPage