import { useEffect, useState } from "react"
import { SalesTableList } from "../SalesTable/SalesTableList"

const listTables = [
  {
    id: 1,
    textInformation: "Información 1",
    zone: 'Sala 1',
    enabled: true,
  },
  {
    id: 2,
    textInformation: "Información 2",
    zone: 'Sala 1',
    enabled: true,
  },
  {
    id: 3,
    textInformation: "Información 3",
    zone: 'Sala 1',
    enabled: true,
  },
  {
    id: 4,
    textInformation: "Información 4",
    zone: 'Sala 1',
    enabled: false,
  },
  {
    id: 5,
    textInformation: "Información 5",
    zone: 'Sala 1',
    enabled: false,
  },
  {
    id: 11,
    textInformation: "Información 1",
    zone: 'Sala 2',
    enabled: true,
  },
  {
    id: 12,
    textInformation: "Información 2",
    zone: 'Sala 2',
    enabled: true,
  },
  {
    id: 13,
    textInformation: "Información 3",
    zone: 'Sala 2',
    enabled: true,
  },
  {
    id: 14,
    textInformation: "Información 4",
    zone: 'Sala 2',
    enabled: false,
  },
  {
    id: 15,
    textInformation: "Información 5",
    zone: 'Sala 2',
    enabled: false,
  },
  {
    id: 21,
    textInformation: "Información 1",
    zone: 'Sala Exterior',
    enabled: true,
  },
  {
    id: 22,
    textInformation: "Información 2",
    zone: 'Sala Exterior',
    enabled: true,
  },
  {
    id: 23,
    textInformation: "Información 3",
    zone: 'Sala Exterior',
    enabled: true,
  },
  {
    id: 24,
    textInformation: "Información 4",
    zone: 'Sala Exterior',
    enabled: false,
  },
  {
    id: 25,
    textInformation: "Información 5",
    zone: 'Sala Exterior',
    enabled: false,
  },
]

export const Tables = () => {
  const [textInformation, setTextInformation] = useState("")
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

  conteo();

  return (
    <div className='grid xxs:grid-cols-1 xs:grid-cols-2 gap-2'>
      <div className="bg-black/5">
        {/* <SalesTableList /> */}
        <div className="p-4">
          <h4>Lista de Mesas</h4>
          <div className="grid xxs:grid-cols-2 md:grid-cols-3 justify-center text-center border border-black">
            {
              listTables.map((t) => {

                return (
                  // <SalesTable key={t.id} id={t.id} />
                  <div className="m-4" key={t.id}>
                    {
                      t.id &&
                      <button onClick={() => {
                        setTextInformation(t.textInformation)

                      }}>
                        <div className={`flex flex-col justify-center items-center mx-auto rounded-md border border-black w-[80px] h-[80px] ${t.enabled ? 'bg-green-500' : 'bg-red-400'}`}>
                          {t.id.toString()}
                        </div>
                      </button>
                    }
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className="bg-blue-500">
        <h4>Información</h4>
        {
          textInformation &&
          <p>
            {
              textInformation
            }
          </p>
        }
        {
          countTable &&
          <>
            <p>
              {
                countTable.toString()
              }
            </p>
            <p>
              {
                countTableEnabled.toString()
              }
            </p>
            <p>
              {
                countTableDisabled.toString()
              }
            </p>
          </>
        }
      </div>
    </div>
  )
}
