import { ChangeEvent, useEffect, useState } from "react"
import { ITableSales, ITableResumenSales } from "@/interfaces/Sales"
import { listTables } from "@/services/Sales/Table"
import { listZones } from "@/services/Sales/Zonas"
import 'remixicon/fonts/remixicon.css'

export const Tables = () => {
  const [tableCurrent, setTableCurrent] = useState<ITableSales>(null!)
  const [zoneCurrent, setZoneCurrent] = useState(0)
  const [generalTables, setGeneralTables] = useState<ITableResumenSales>(null!)

  const changeZone = (e: ChangeEvent<HTMLSelectElement>) => {
    const current = Number(e.target.value);
    setZoneCurrent(current)
    setTableCurrent(null!)
  }

  useEffect(() => {
    let totalTable = 15;
    let enabledTable = 6
    let totalPeople = 60;
    let enabledPeople = 12;

    const conteo = () => {
      // listTables.forEach((table) => {
      //   countTable++;
      //   if (table.enabled)
      //     countTableEnabled++;
      //   else
      //     countTableDisabled++;
      // })

      const generalTable: ITableResumenSales = {
        zoneCurrent,
        totalTable,
        enabledTable,
        totalPeople,
        enabledPeople,
        enabled: (totalTable - enabledTable) > 0,
      }

      setGeneralTables(generalTable)
    }

    conteo();
  }, [zoneCurrent])

  return (
    <div className='grid xxs:grid-cols-1 xs:grid-cols-2 gap-2'>
      <div className="bg-[#f1f1f1]">
        {/* <SalesTableList /> */}
        <div className="p-4">
          <h4 className="tab-content-title">Lista de Mesas</h4>
          <div className="grid xxs:grid-cols-2 md:grid-cols-3 justify-center text-center border border-black">
            {
              listTables.map((t) => {
                if (t.zone === zoneCurrent || zoneCurrent === 0) {
                  return (
                    <div className="m-4" key={t.id}>
                      {
                        t.id &&
                        <button onClick={() => {
                          setTableCurrent(t)
                        }}>
                          <div className={`flex flex-col justify-center items-center mx-auto rounded-md border border-black w-[80px] h-[80px] ${t.enabled ? 'bg-green-500' : 'bg-red-400'}`}>
                            {t.id.toString()}
                          </div>
                        </button>
                      }
                    </div>
                  )
                }
              })
            }
          </div>
        </div>
      </div>
      <div className="bg-[#f1f1f1] ">
        <div className="p-4">
          {
            generalTables &&
            (
              <section className="border border-black rounded tab-content-body">
                <h4 className="tab-content-title">Información General</h4>
                <p className="tab-content-subtitle">Zona
                  <span className="ml-4 font-semibold">
                    {listZones[generalTables.zoneCurrent].name}
                  </span>
                </p>
                <p className="tab-content-subtitle">Mesas
                  <span className="ml-2 font-semibold">
                    {`${generalTables.enabledTable}/${generalTables.totalTable}`}
                  </span>
                </p>
                <p className="tab-content-subtitle">
                  {
                    generalTables.enabled
                      ? <i className={`ri-calendar-check-fill text-xl mr-2`}></i>
                      : <i className={`ri-calendar-close-fill text-xl mr-2`}></i>
                  }

                  Estado
                  <span className="ml-2 font-semibold">{generalTables.enabled ? 'Con Disponibilidad' : 'Sin Disponibilidad'}</span>
                </p>
                <p className="tab-content-subtitle">
                  <i className={`ri-user-fill text-xl mr-2`}></i>
                  Capacidad
                  <span className="ml-2 font-semibold">
                    {`${generalTables.enabledPeople}/${generalTables.totalPeople}`}
                  </span>
                </p>

              </section>
            )
          }
          <section className="tab-content-body">
            <h3 className="tab-content-subtitle">Zonas</h3>
            <select className="my-4 p-4 text-base" onChange={(e) => { changeZone(e) }} defaultValue={zoneCurrent} >
              {
                listZones.map((zone) => {
                  return (
                    <option value={zone.id} key={zone.id}  >{zone.name}</option>
                  )
                })
              }
            </select>
          </section>
          {
            tableCurrent &&
            (
              <section className="border border-black rounded tab-content-body">
                <h4 className="tab-content-title">Selección</h4>
                <p className="tab-content-subtitle">Mesa
                  <span className="ml-2 font-semibold">{tableCurrent.id}</span>
                </p>
                <p className="tab-content-subtitle">
                  {
                    tableCurrent.enabled
                      ? <i className={`ri-calendar-check-fill text-xl mr-2`}></i>
                      : <i className={`ri-calendar-close-fill text-xl mr-2`}></i>
                  }

                  Estado
                  <span className="ml-2 font-semibold">{tableCurrent.enabled ? 'Disponible' : 'Ocupada'}</span>
                </p>
                <p className="tab-content-subtitle">
                  <i className={`ri-user-fill text-xl mr-2`}></i>
                  Capacidad
                  <span className="ml-2 font-semibold">
                    {`${tableCurrent.people}/${tableCurrent.capacity}`}
                  </span>
                </p>

              </section>
            )
          }
        </div>
      </div>
    </div>
  )
}
