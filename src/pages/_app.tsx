import { HydrationBoundary } from '@tanstack/react-query';
import { Layout } from '@/components/Layout';
import AppQueryClientProvider from '@/contexts/Query';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppQueryClientProvider>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </HydrationBoundary>
    </AppQueryClientProvider>
  );
}
