import { SalesTable } from "./SalesTable"

const listTables = [
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  },
  {
    id: 4
  },
  {
    id: 5
  },
]

export const SalesTableList = () => {
  return (
    <>
      <h4>Lista de Mesas</h4>
      <div className="grid xxs:grid-cols-2 md:grid-cols-3 justify-center text-center border border-black">
        {
          listTables.map((t) => {
            return (
              <SalesTable key={t.id} id={t.id} />
            )
          })
        }
      </div>
    </>
  )
}
