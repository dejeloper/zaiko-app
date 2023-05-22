import { ZaikoLayout } from "@/components/layouts"

const Custom404 = () => {
  return (
    <ZaikoLayout title='Página no Encontrada' pageDescription='Página no encontrada - Página 404' >
      <section className="flex justify-center items-center" style={{ height: 'calc(100vh - 200px)' }}>
        <h1 className="text-3xl">
          404 |
        </h1>
        <h2 className="ml-2 text-2xl font-light">
          No encontramos ninguna página
        </h2>
      </section>
    </ZaikoLayout>
  )
}

export default Custom404