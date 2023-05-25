import { ZaikoLayout } from "@/components/layouts"
import { ProductList } from "@/components/products/ProductList"
import { products } from "@/services/products"
import { Product } from "@/interfaces/products";

const ProductPage = () => {
  const productList: Product[] = products;
  return (
    <ZaikoLayout title={"Productos"} pageDescription={"Listado de Productos"}>
      <header className="select-none">
        <h2 className="text-2xl font-semibold">
          Lista de Productos
        </h2>
        <h4 className="text-sm font-normal mb-6">Administre los productos</h4>
      </header>
      <ProductList products={productList} />
    </ZaikoLayout>
  )
}

export default ProductPage