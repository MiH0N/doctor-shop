import Pagination from '@/components/kit/Pagination';
import { ProductCard } from '@/components/Cards/Product';
import useProduct from '@/hooks/api/products/useProducts';
import { PAGE_SIZE } from '@/constants/pagination';
import { ProductCardLoader } from '@/components/Cards/Product/Loader';

export default function Home() {
  const { data, isLoading } = useProduct({
    skip: 10,
    limit: PAGE_SIZE,
  });

  return (
    <div className="p-5">
      <div className="grid grid-cols-3 gap-3 p-4">
        {isLoading || 1 ? (
          <>
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
      <Pagination
        onPageChange={(page) => console.log(page)}
        siblingCount={1}
        currentPage={5}
        count={10}
      />
    </div>
  );
}
