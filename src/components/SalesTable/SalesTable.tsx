import { FC } from "react";

interface Props {
  id: number
}

export const SalesTable: FC<Props> = ({ id }) => {
  return (
    <div className="m-4">
      {
        id &&
        <div className="flex flex-col justify-center items-center mx-auto bg-green-700 rounded-md border border-black w-[80px] h-[80px]">
          <span className="">{id.toString()}</span>
        </div>
      }
    </div>

  )
}
