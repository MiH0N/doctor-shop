import { useQuery } from '@tanstack/react-query';
import ProductService from '@/services/products';
import endpoints from '@/constants/endpoints';
import type { HttpResponsePaginationProps } from '@/utils/Http';

const useProductsCategory = (
  params: Omit<HttpResponsePaginationProps, 'total'> & {
    category: Maybe<string>;
  },
) => {
  const { data, isLoading } = useQuery({
    queryKey: [endpoints.products, params],
    queryFn: () => ProductService.getProductsCategory(params),
    enabled: !!params?.category,
  });

  return {
    data,
    isLoading: isLoading && !data,
  };
};

export default useProductsCategory;
