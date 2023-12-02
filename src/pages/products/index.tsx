import { useRouter } from 'next/router';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { ProductsList } from '@/components/List/Products';
import useProduct from '@/hooks/api/products/useProducts';
import { PAGE_SIZE } from '@/constants/pagination';
import endpoints from '@/constants/endpoints';
import { isCSR } from '@/utils/isCSR';
import ProductsServices from '@/services/products';
import type { GetServerSideProps } from 'next/types';

export default function ProductsPage() {
  const router = useRouter();
  const { data, isLoading } = useProduct({
    limit: PAGE_SIZE,
    skip: (parseInt(router.query.page as string) - 1) * 10,
  });

  return (
    <>
      <ProductsList
        products={data?.products ?? []}
        isLoading={isLoading}
        pagination={{
          page: parseInt(router.query?.page as string),
          count: !!data ? data?.total / PAGE_SIZE : 0,
          pageHandler: (_page) =>
            router.replace({
              query: { ...router.query, page: _page },
            }),
        }}
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { query, req } = ctx;

  if (!query.page) {
    return {
      redirect: {
        permanent: true,
        destination: `products/?page=1`,
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
  };

  await queryClient.prefetchQuery({
    queryKey: [endpoints.products, params],
    queryFn: () => ProductsServices.getAll(params),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
