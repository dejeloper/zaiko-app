import { FC } from "react";
import Link from "next/link";
import { IMenuGeneral } from "@/interfaces/menus";

interface Props {
  menu: IMenuGeneral;
}

export const MenuHomeCard: FC<Props> = ({ menu }) => {
  const { name, image, descriptionMenu, url } = menu
  return (
    <>
      <header className="rounded-md border border-black/1 shadow-md shadow-black/20 flex justify-center items-center">
        <Link href={url}>
          <picture>
            <img src={`images/menus/${image}`} alt={descriptionMenu} style={{ height: '160px' }} />
          </picture>
        </Link>
      </header>
      <footer className=" py-4 px-2 flex justify-center items-center">
        <span className="font-bold">
          {name}
        </span>
      </footer>
    </>
  )
}
