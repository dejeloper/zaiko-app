import { ZaikoLayout } from "@/components/layouts";
import { Delivery, Pos, Tables } from "@/components/sales";
import { Tabs } from "@/components/ui/Tabs";
import { Product } from "@/interfaces/products";
import { tabs } from "@/interfaces/tabs";
import { products } from "@/services/products";

const SalesPage = () => {

  const productList: Product[] = products;
  const tabs: tabs[] = [{
    index: 1,
    id: "mesas",
    name: "Venta de Mesas",
    children: <Tables />
  },
  {
    index: 2,
    id: "pos",
    name: "Punto de Venta",
    children: <Pos />
  },
  {
    index: 3,
    id: "delivery",
    name: "Domicilios",
    children: <Delivery />
  }
  ]

  return (
    <ZaikoLayout title={"Pos - Punto de Venta"} pageDescription={"Punto de venta - Venta inmediata"} >
      <header className="select-none">
        <h2 className="text-2xl font-semibold">
          Ventas
        </h2>
      </header>

      <main>
        <Tabs tabs={tabs} />
      </main>
    </ZaikoLayout>
  )
}


export default SalesPage;