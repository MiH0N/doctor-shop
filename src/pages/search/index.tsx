import { QueryClient, dehydrate } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { ProductsList } from '@/components/List/Products';
import useProductsSearch from '@/hooks/api/products/useProductsSearch';
import isCSR from '@/utils/isCSR';
import ProductsServices from '@/services/products';
import endpoints from '@/constants/endpoints';
import { PAGE_SIZE } from '@/constants/pagination';
import type { GetServerSideProps } from 'next/types';

export default function SearchPage() {
  const router = useRouter();

  const { data, isLoading } = useProductsSearch({
    skip: (parseInt(router.query.page as string) - 1) * 10,
    limit: PAGE_SIZE,
    search: router.query.q as string,
  });

  return (
    <ProductsList
      products={data?.products ?? []}
      isLoading={isLoading}
      pagination={{
        page: parseInt(router.query.page as string),
        count: !!data ? data?.total / PAGE_SIZE : 0,
        pageHandler: (_page) =>
          router.replace({
            query: { ...router.query, page: _page },
          }),
      }}
    />
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { query, req } = ctx;

  if (!query.page) {
    return {
      redirect: {
        permanent: true,
        destination: `search/?page=1&q=${query.q}`,
      },
    };
  }

  if (isCSR(req))
    return {
      props: {
        query,
      },
    };

  const queryClient = new QueryClient();

  const params = {
    limit: PAGE_SIZE,
    skip: (parseInt(query.page as string) - 1) * 10,
    search: query.q as string,
  };

  await queryClient.prefetchQuery({
    queryKey: [endpoints.searchProducts, params],
    queryFn: () => ProductsServices.search(params),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
