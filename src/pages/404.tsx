import { ZaikoLayout } from "@/components/layouts"
import { Box, Typography } from "@mui/material"

const Custom404 = () => {
  return (
    <ZaikoLayout title='Página no Encontrada' pageDescription='Página no encontrada - Página 404' >
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        height='calc(100vh - 200px)'
        sx={{ flexDirection: { sm: 'column', md: 'row' } }}
      >
        <Typography variant='h1' component='h1' fontSize={60} fontWeight={200}>404 |</Typography>
        <Typography marginLeft={2} fontSize={20} >No encontramos ninguna página</Typography>
      </Box>
    </ZaikoLayout>
  )
}

export default Custom404