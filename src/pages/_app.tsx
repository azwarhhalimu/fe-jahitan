import MainLayout from '@/layout/MainLayout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  console.log(router);
  if (router.pathname == "/login.html") {
    return <Component {...pageProps} />
  }
  else {
    return <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  }

}
