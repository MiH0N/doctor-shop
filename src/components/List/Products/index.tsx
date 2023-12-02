import React, { useRef, useEffect, type FC } from 'react';
import Pagination from '@/components/kit/Pagination';
import { ProductCard } from '@/components/Cards/Product';
import { ProductCardLoader } from '@/components/Cards/Product/Loader';
import StyleGenerator from '@/utils/StyleGenerator';

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
  const styleGenerator = new StyleGenerator();

  useEffect(() => {
    wrapper.current?.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }, [pagination.page]);

  return (
    <div className="p-3 xl:p-5 scroll-my-20" ref={wrapper}>
      {!isLoading && !!products && products.length === 0 ? (
        <div className="flex justify-center items-center h-96 text-2xl">
          No data for show :(
        </div>
      ) : null}
      <div className="grid sm:grid-cols-2 fablet:grid-cols-1 md:grid-cols-2 tb:grid-cols-3 gap-2 xl:gap-3 p-2 xl:p-4">
        {isLoading
          ? [...Array(6)].map(() => (
              <ProductCardLoader key={crypto.randomUUID()} />
            ))
          : products.map((product) => (
              <ProductCard
                key={product.id}
                categoryStyle={{
                  background: styleGenerator.generateStyle(
                    product.category,
                    20,
                    40,
                  ).color,
                }}
                {...product}
              />
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
