import { IMenuHome, IMenuNav } from "@/interfaces/menus"

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
    icon: "folder-user-line"
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
  }
]


export const menuAdmin: IMenuNav[] = [
  {
    id: 1,
    name: "Cuenta",
    descriptionMenu: "Cuenta",
    url: "/me",
    icon: "user-3-line"
  },
  {
    id: 2,
    name: "Cambio Contraseña",
    descriptionMenu: "Cambio Contraseña",
    url: "/password",
    icon: "lock-password-line"
  },
  {
    id: 3,
    name: "Notificaciones",
    descriptionMenu: "Notificaciones",
    url: "/notifications",
    icon: "message-2-line"
  },
  {
    id: 4,
    name: "Salir",
    descriptionMenu: "Cerrar Sesión",
    url: "/logout",
    icon: "logout-box-line"
  },

];