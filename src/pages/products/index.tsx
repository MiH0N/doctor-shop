import { useState } from 'react';
import { ProductsList } from '@/components/List/Products';
import useProduct from '@/hooks/api/products/useProducts';
import { PAGE_SIZE } from '@/constants/pagination';

export default function ProductsPage() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useProduct({
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
}
