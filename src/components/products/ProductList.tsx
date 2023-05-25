import { FC } from "react";
import { Product } from "@/interfaces/products"
import { ProductListCard } from "./ProductListCard";

interface Props {
  products: Product[]
}
export const ProductList: FC<Props> = ({ products }) => {
  return (
    <section id="cards" className="grid grid-flow-row xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 w-full">
      {
        products.map((product) => (
          <article key={product.id} className="rounded-md border border-black/1 shadow-md shadow-black/20 ">
            <ProductListCard product={product} />
          </article>
        ))
      }
    </section>


  )
}
