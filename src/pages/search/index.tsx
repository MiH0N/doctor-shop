import { useRouter } from 'next/router';
import { ProductsList } from '@/components/List/Products';
import { PAGE_SIZE } from '@/constants/pagination';
import ProductsServices from '@/services/products';
import type { ParsedUrlQuery } from 'querystring';
import type { GetServerSideProps } from 'next/types';
import isCSR from '@/utils/isCSR';
import useProductsSearch from '@/hooks/api/products/useProductsSearch';
import { searchProductsResponse } from '@/services/products/search';
import { HTTPResponse, HttpResponsePaginationProps } from '@/utils/Http';

interface SearchPageProps
  extends HTTPResponse<searchProductsResponse, HttpResponsePaginationProps> {
  query: ParsedUrlQuery;
}

export default function SearchPage({ query, ...initialData }: SearchPageProps) {
  const router = useRouter();

  const { data, isLoading } = useProductsSearch({
    skip: (parseInt(router.query.page as string) - 1) * 10,
    limit: PAGE_SIZE,
    search: router.query.q as string,
  });

  const mainData =
    !!initialData && Object.keys(initialData).length ? initialData : data;

  return (
    <ProductsList
      products={mainData?.products ?? []}
      isLoading={
        (!initialData || !Object.keys(initialData).length) && isLoading
      }
      pagination={{
        page: parseInt(router.query.page as string),
        count: !!mainData ? mainData?.total / PAGE_SIZE : 0,
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

  const productsResult = isCSR(req)
    ? null
    : await ProductsServices.search({
        limit: PAGE_SIZE,
        skip: (parseInt(query.page as string) - 1) * 10,
        search: query.q as string,
      });

  return {
    props: {
      query,
      ...productsResult,
    },
  };
};
