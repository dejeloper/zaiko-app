import { FC } from "react"
import { Product } from "@/interfaces/products"

interface Props {
  product: Product
}

export const ProductListCard: FC<Props> = ({ product }) => {
  const { name, category, inStock, price, size, image } = product;
  const stock = inStock === -1 ? 'Sin Limite' : inStock.toString();

  return (
    <>
      <header className="flex justify-center items-center">
        <picture>
          <img src={`images/products/${image}`} alt={name} style={{ height: '160px' }} />
        </picture>
      </header>
      <div className=" py-4 px-2 flex flex-col justify-center items-center">
        <p className="flex flex-grow justify-center font-normal px-2">
          Producto:
          <span className="font-bold ml-2">{name}</span>
        </p>
        <p className="flex flex-grow justify-center font-normal px-2">
          En stock:
          <span className="font-bold ml-2">{stock}</span>
        </p>
        <div className="flex justify-center items-center w-full">
          <button type="button" className="btn btn-primary">Inventario</button>
          <button type="button" className="btn btn-alternative-alt">Editar</button>

        </div>
      </div>
    </>
  )
}
