import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import '@/styles/globals.css'
import { lightTheme } from '../../themes'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeProvider theme={lightTheme} >
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
