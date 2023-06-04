import { SalesTableList } from "../SalesTable/SalesTableList"

export const Tables = () => {
  return (
    <div className='grid xxs:grid-cols-1 xs:grid-cols-2 gap-2'>
      <div className="bg-black/5">
        <SalesTableList />
      </div>
      <div className="bg-blue-500">
        <h4>Información</h4>
      </div>
    </div>
  )
}
