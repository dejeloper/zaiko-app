import { ChangeEvent, useEffect, useState } from "react"
import { SalesTableList } from "../SalesTable/SalesTableList"
import 'remixicon/fonts/remixicon.css'

const listZones: IZone[] = [
  {
    id: 0,
    name: 'Todas',
  },
  {
    id: 1,
    name: 'Sala 1',
  },
  {
    id: 2,
    name: 'Sala 2',
  },
  {
    id: 3,
    name: 'Sala Exterior',
  },
]

const listTables: ITable[] = [
  {
    id: 1,
    textInformation: "Información 1",
    zone: 1,
    capacity: 4,
    people: 0,
    enabled: true,
  },
  {
    id: 2,
    textInformation: "Información 2",
    zone: 1,
    capacity: 4,
    people: 0,
    enabled: true,
  },
  {
    id: 3,
    textInformation: "Información 3",
    zone: 1,
    capacity: 4,
    people: 0,
    enabled: true,
  },
  {
    id: 4,
    textInformation: "Información 4",
    zone: 1,
    capacity: 4,
    people: 2,
    enabled: false,
  },
  {
    id: 5,
    textInformation: "Información 5",
    zone: 1,
    capacity: 4,
    people: 2,
    enabled: false,
  },
  {
    id: 11,
    textInformation: "Información 1",
    zone: 2,
    capacity: 4,
    people: 0,
    enabled: true,
  },
  {
    id: 12,
    textInformation: "Información 2",
    zone: 2,
    capacity: 4,
    people: 0,
    enabled: true,
  },
  {
    id: 13,
    textInformation: "Información 3",
    zone: 2,
    capacity: 4,
    people: 0,
    enabled: true,
  },
  {
    id: 14,
    textInformation: "Información 4",
    zone: 2,
    capacity: 4,
    people: 2,
    enabled: false,
  },
  {
    id: 15,
    textInformation: "Información 5",
    zone: 2,
    capacity: 4,
    people: 2,
    enabled: false,
  },
  {
    id: 21,
    textInformation: "Información 1",
    zone: 3,
    capacity: 4,
    people: 0,
    enabled: true,
  },
  {
    id: 22,
    textInformation: "Información 2",
    zone: 3,
    capacity: 4,
    people: 0,
    enabled: true,
  },
  {
    id: 23,
    textInformation: "Información 3",
    zone: 3,
    capacity: 4,
    people: 0,
    enabled: true,
  },
  {
    id: 24,
    textInformation: "Información 4",
    zone: 3,
    capacity: 4,
    people: 2,
    enabled: false,
  },
  {
    id: 25,
    textInformation: "Información 5",
    zone: 3,
    capacity: 4,
    people: 2,
    enabled: false,
  },
]

interface IZone {
  id: number;
  name: string
}

interface ITable {
  id: number;
  textInformation: string,
  zone: number,
  capacity: number;
  people: number,
  enabled: boolean,
}

export const Tables = () => {
  const [tableCurrent, setTableCurrent] = useState<ITable>(null!)
  const [zoneCurrent, setZoneCurrent] = useState(0)
  let countTable = 0;
  let countTableEnabled = 0;
  let countTableDisabled = 0;

  const conteo = () => {
    listTables.forEach((table) => {
      countTable++;
      if (table.enabled)
        countTableEnabled++;
      else
        countTableDisabled++;
    })
  }

  const changeZone = (e: ChangeEvent<HTMLSelectElement>) => {
    const current = Number(e.target.value);
    setZoneCurrent(current)
    setTableCurrent(null!)
  }

  conteo();

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
                    // <SalesTable key={t.id} id={t.id} />
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
          <h4 className="tab-content-title">Información General</h4>
          <section className="tab-content-body">
            <h3 className="tab-content-subtitle">Zonas</h3>
            <select className="my-4 p-4 text-base" onChange={(e) => { changeZone(e) }
            } defaultValue={zoneCurrent} >
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
              <>
                <h4 className="tab-content-title">Selección</h4>
                <section className="border border-black rounded tab-content-body p-2">
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
              </>
            )
          }
        </div>
      </div>
    </div>
  )
}
