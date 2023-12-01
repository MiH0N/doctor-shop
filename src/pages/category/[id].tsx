import { useState } from 'react';
import { useRouter } from 'next/router';
import { ProductsList } from '@/components/List/Products';
import { PAGE_SIZE } from '@/constants/pagination';
import useProductsCategory from '@/hooks/api/products/useProductsCategory';
import type { NextPage } from 'next/types';

const ProductsCategoryPage: NextPage = (props) => {
  const route = useRouter();
  const [page, setPage] = useState(1);

  const { data, isLoading } = useProductsCategory({
    category: route.query.id as string,
    skip: (page - 1) * 10,
    limit: PAGE_SIZE,
  });

  return (
    <>
      <ProductsList
        products={data?.products ?? []}
        isLoading={isLoading}
        pagination={{
          page,
          count: !data ? 0 : data.total / PAGE_SIZE,
          pageHandler: (_page) => setPage(_page),
        }}
      />
    </>
  );
};

export default ProductsCategoryPage;
