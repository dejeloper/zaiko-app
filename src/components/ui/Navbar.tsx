import NextLink from "next/link";
import { AppBar, Badge, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material';
import { Notifications } from "@mui/icons-material";

export const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <NextLink href='/' passHref legacyBehavior>
          <Link display='flex' alignItems='center' sx={{ color: '#000000de' }}>
            <Typography variant="h6">Zaiko |</Typography>
            <Typography variant="h6" sx={{ ml: 0.5 }}>Software</Typography>
          </Link>
        </NextLink>

        <Box flex={1} />

        <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
          {/* <NextLink href='/clientes' passHref legacyBehavior>
            <Link>
              <Button>Clientes</Button>
            </Link>
          </NextLink> */}
          <NextLink href='/productos' passHref legacyBehavior>
            <Link>
              <Button>Productos</Button>
            </Link>
          </NextLink>
          <NextLink href='/ventas' passHref legacyBehavior>
            <Link>
              <Button>Ventas</Button>
            </Link>
          </NextLink>
          {/* <NextLink href='/compras' passHref legacyBehavior>
            <Link>
              <Button>Compras</Button>
            </Link>
          </NextLink> */}
          {/* <NextLink href='/proveedores' passHref legacyBehavior>
            <Link>
              <Button>Proveedores</Button>
            </Link>
          </NextLink> */}
          <NextLink href='/admin' passHref legacyBehavior>
            <Link>
              <Button>Administración</Button>
            </Link>
          </NextLink>
          {/* <NextLink href='/reportes' passHref legacyBehavior>
            <Link>
              <Button>Reportes</Button>
            </Link>
          </NextLink> */}
        </Box>

        <Box flex={1} />

        <NextLink href='/notificaciones' passHref legacyBehavior>
          <Link>
            <IconButton>
              <Badge badgeContent={2} color="secondary">
                <Notifications />
              </Badge>
            </IconButton>
          </Link>
        </NextLink>

        <Button>
          Menú
        </Button>

      </Toolbar>
    </AppBar>

  )
}
