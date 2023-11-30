import { useEffect, useRef, useState } from 'react';
import Pagination from '@/components/kit/Pagination';
import { ProductCard } from '@/components/Cards/Product';
import useProduct from '@/hooks/api/products/useProducts';
import { PAGE_SIZE } from '@/constants/pagination';
import { ProductCardLoader } from '@/components/Cards/Product/Loader';

export default function Home() {
  const wrapper = useRef<HTMLInputElement | null>(null);

  const [page, setPage] = useState(1);
  const { data, isLoading } = useProduct({
    skip: (page - 1) * 10,
    limit: PAGE_SIZE,
  });

  useEffect(() => {
    wrapper.current?.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }, [page]);

  return (
    <div className="p-5 scroll-my-20" ref={wrapper}>
      <div className="grid grid-cols-3 gap-3 p-4">
        {isLoading ? (
          <>
            <ProductCardLoader />
            <ProductCardLoader />
            <ProductCardLoader />
            <ProductCardLoader />
            <ProductCardLoader />
          </>
        ) : (
          data?.products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))
        )}
      </div>
      {!!data ? (
        <Pagination
          onPageChange={(_page) => setPage(_page)}
          siblingCount={1}
          currentPage={page}
          count={data.total / PAGE_SIZE}
        />
      ) : null}
    </div>
  );
}
