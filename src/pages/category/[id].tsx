import { useState } from 'react';
import { useRouter } from 'next/router';
import { ProductsList } from '@/components/List/Products';
import { PAGE_SIZE } from '@/constants/pagination';
import useProductsCategory from '@/hooks/api/products/useProductsCategory';
import type { GetServerSideProps, NextPage } from 'next/types';
import isCSR from '@/utils/isCSR';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import endpoints from '@/constants/endpoints';
import ProductsServices from '@/services/products';

const ProductsCategoryPage: NextPage = () => {
  const router = useRouter();

  const { data, isLoading } = useProductsCategory({
    category: router.query.id as string,
    skip: (parseInt(router.query.page as string) - 1) * 10,
    limit: PAGE_SIZE,
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
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { query, req } = ctx;

  if (!query.page) {
    return {
      redirect: {
        permanent: false,
        destination: `/category/${query.id as string}/?page=1`,
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
    category: query.id as string,
    limit: PAGE_SIZE,
    skip: (parseInt(query.page as string) - 1) * 10,
  };

  await queryClient.prefetchQuery({
    queryKey: [endpoints.productsCategory(query.id as string), params],
    queryFn: () => ProductsServices.getProductsCategory(params),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default ProductsCategoryPage;
