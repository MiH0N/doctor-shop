import { useQuery } from '@tanstack/react-query';
import ProductsServices from '@/services/products';
import endpoints from '@/constants/endpoints';
import type { HttpResponsePaginationProps } from '@/utils/Http';

const useProductsSearch = (
  params: Omit<HttpResponsePaginationProps, 'total'> & {
    search: string;
  },
) => {
  const { data, isLoading } = useQuery({
    queryKey: [endpoints.searchProducts, params],
    queryFn: () => ProductsServices.search(params),
  });

  return {
    data,
    isLoading: isLoading && !data,
  };
};

export default useProductsSearch;
