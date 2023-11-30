import { Layout } from '@/components/Layout';
import AppQueryClientProvider from '@/contexts/Query';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppQueryClientProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppQueryClientProvider>
  );
}
