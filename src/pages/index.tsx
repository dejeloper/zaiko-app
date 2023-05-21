import { NextPage } from "next";
import { Typography } from "@mui/material";

import { ZaikoLayout } from "@/components/layouts";

const Home: NextPage = () => {
  return (
    <ZaikoLayout title={"Zaiko - Inicio"} pageDescription={"Este es la página de Inicio"}>
      <Typography variant="h1" component="h1">Inicio</Typography>
      <Typography variant="h2" sx={{ mb: 1 }} >Todos los productos</Typography>
    </ZaikoLayout>
  )
}

export default Home