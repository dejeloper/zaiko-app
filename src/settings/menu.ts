interface IMenuHome {
  id: number;
  name: string;
  descriptionMenu: string;
  url: string;
  image: string;
}

interface IMenuNav {
  id: number;
  name: string;
  descriptionMenu: string;
  url: string;
  icon: string;
}

export const menuHome: IMenuHome[] = [
  {
    id: 1,
    name: "Clientes",
    descriptionMenu: "Clientes",
    url: "/customers",
    image: "customers.png",
  },
  {
    id: 2,
    name: "Productos",
    descriptionMenu: "Productos",
    url: "/products",
    image: "products.png",
  },
  {
    id: 3,
    name: "Ventas",
    descriptionMenu: "Ventas",
    url: "/sales",
    image: "sales.png",
  },
  {
    id: 4,
    name: "Compras",
    descriptionMenu: "Compras",
    url: "/shop",
    image: "shop.png",
  },
  {
    id: 5,
    name: "Proveedores",
    descriptionMenu: "Proveedores",
    url: "/providers",
    image: "providers.png",
  },
  {
    id: 6,
    name: "Administración",
    descriptionMenu: "Administración",
    url: "/admin",
    image: "admin.png",
  },
  {
    id: 7,
    name: "Reportes",
    descriptionMenu: "Reportes",
    url: "/reports",
    image: "reports.png",
  }
]

export const menuNav: IMenuNav[] = [
  {
    id: 1,
    name: "Clientes",
    descriptionMenu: "Clientes",
    url: "/customers",
    icon: "user-heart-line"
  },
  {
    id: 2,
    name: "Productos",
    descriptionMenu: "Productos",
    url: "/products",
    icon: "box-3-line"
  },
  {
    id: 3,
    name: "Ventas",
    descriptionMenu: "Ventas",
    url: "/sales",
    icon: "shopping-cart-2-line"
  },
  {
    id: 4,
    name: "Compras",
    descriptionMenu: "Compras",
    url: "/shop",
    icon: "shopping-basket-line"
  },
  {
    id: 5,
    name: "Proveedores",
    descriptionMenu: "Proveedores",
    url: "/providers",
    icon: "truck-line"
  },
  {
    id: 6,
    name: "Administración",
    descriptionMenu: "Administración",
    url: "/admin",
    icon: "team-line"
  },
  {
    id: 7,
    name: "Reportes",
    descriptionMenu: "Reportes",
    url: "/reports",
    icon: "database-line"
  },
  {
    id: 99,
    name: "Salir",
    descriptionMenu: "Cerrar Sesión",
    url: "/logout",
    icon: "logout-box-line"
  }
] 