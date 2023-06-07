import { MenuHomeCard } from "./";

import { menuHome } from "@/services/Menus/home";

export const MenuHome = () => {
  return (
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
  )
}
