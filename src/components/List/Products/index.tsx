import React, { useRef, type FC, useState, useEffect } from 'react';
import Pagination from '@/components/kit/Pagination';
import { ProductCard } from '@/components/Cards/Product';
import { ProductCardLoader } from '@/components/Cards/Product/Loader';

interface IProductsListProps {
  products: IProduct[];
  isLoading?: boolean;
  pagination: {
    page: number;
    count: number;
    pageHandler: (page: number) => void;
  };
}

export const ProductsList: FC<IProductsListProps> = ({
  products,
  isLoading,
  pagination,
}) => {
  const wrapper = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    wrapper.current?.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }, [pagination.page]);

  return (
    <div className="p-5 scroll-my-20" ref={wrapper}>
      <div className="grid grid-cols-3 gap-3 p-4">
        {isLoading
          ? [...Array(6)].map(() => (
              <ProductCardLoader key={crypto.randomUUID()} />
            ))
          : products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
      </div>
      {!!products && pagination.count > 1 ? (
        <Pagination
          onPageChange={pagination.pageHandler}
          siblingCount={1}
          currentPage={pagination.page}
          count={pagination.count}
        />
      ) : null}
    </div>
  );
};
