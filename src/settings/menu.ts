interface IMenuHome {
  id: number;
  name: string;
  descriptionMenu: string;
  url: string;
  icon?: string;
  image?: string;
}

interface IMenus {
  menusHome: IMenuHome[]
}


export const menuInitial: IMenus = {
  menusHome: [
    {
      id: 1,
      name: "Clientes",
      descriptionMenu: "Clientes",
      url: "/customers",
      image: "customers.png"
    },
    {
      id: 2,
      name: "Productos",
      descriptionMenu: "Productos",
      url: "/products",
      image: "products.png"
    },
    {
      id: 3,
      name: "Ventas",
      descriptionMenu: "Ventas",
      url: "/sales",
      image: "sales.png"
    },
    {
      id: 4,
      name: "Compras",
      descriptionMenu: "Compras",
      url: "/shop",
      image: "shop.png"
    },
    {
      id: 5,
      name: "Proveedores",
      descriptionMenu: "Proveedores",
      url: "/providers",
      image: "providers.png"
    },
    {
      id: 6,
      name: "Administración",
      descriptionMenu: "Administración",
      url: "/admin",
      image: "admin.png"
    },
    {
      id: 7,
      name: "Reportes",
      descriptionMenu: "Reportes",
      url: "/reports",
      image: "reports.png"
    }
  ]
}