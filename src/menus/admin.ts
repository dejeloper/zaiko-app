import { IMenuGeneral } from "@/interfaces/menus";

export const adminList: IMenuGeneral[] = [
  {
    id: 1,
    name: "Productos",
    descriptionMenu: "Productos",
    url: "/products",
    image: "customers.png",
  },
  {
    id: 2,
    name: "Categoría",
    descriptionMenu: "Categorías",
    url: "/categories",
    image: "customers.png",
  }
]