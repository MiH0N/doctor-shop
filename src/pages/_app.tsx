import { HydrationBoundary } from '@tanstack/react-query';
import { Layout } from '@/components/Layout';
import AppQueryClientProvider from '@/contexts/Query';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import ProductsServices from '@/services/products';
import type { AppContextProps } from '@/contexts/AppData';
import AppContextProvider from '@/contexts/AppData';

export default function App({
  Component,
  pageProps,
  categories,
}: AppProps & AppContextProps) {
  return (
    <AppQueryClientProvider>
      <HydrationBoundary state={pageProps?.dehydratedState}>
        <AppContextProvider categories={categories}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AppContextProvider>
      </HydrationBoundary>
    </AppQueryClientProvider>
  );
}

App.getInitialProps = async function () {
  const categories = await ProductsServices.getCategories();
  return {
    categories,
  };
};
