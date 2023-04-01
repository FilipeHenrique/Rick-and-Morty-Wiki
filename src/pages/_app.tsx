import '../styles/global.css'
import type { AppProps } from 'next/app'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import NavIcon from '@/components/NavIcon/NavIcon'

export default function App({ Component, pageProps }: AppProps) {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
        <NavIcon />
        <Component  {...pageProps} />
    </QueryClientProvider>
  )

}
