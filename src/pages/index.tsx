import useProduct from '@/hooks/api/products/useProducts';
import { PAGE_SIZE } from '@/constants/pagination';
import { ProductCard } from '@/components/Cards/Product';

export default function Home() {
  const { data } = useProduct({
    skip: 10,
    limit: PAGE_SIZE,
  });

  return (
    <div className="p-5">
      <div className="grid grid-cols-3 gap-3 p-4">
        {data?.products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
