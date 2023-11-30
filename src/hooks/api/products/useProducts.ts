import { useQuery } from '@tanstack/react-query';
import ProductService from '@/services/products';
import endpoints from '@/constants/endpoints';
import type { HttpResponsePaginationProps } from '@/utils/Http';

const useProduct = (params: Omit<HttpResponsePaginationProps, 'total'>) => {
  const { data, isLoading } = useQuery({
    queryKey: [endpoints.products, params],
    queryFn: () => ProductService.getAll(params),
  });

  return {
    data,
    isLoading: isLoading && !data,
  };
};

export default useProduct;
