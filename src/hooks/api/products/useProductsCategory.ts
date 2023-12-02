import { useQuery } from '@tanstack/react-query';
import ProductsServices from '@/services/products';
import endpoints from '@/constants/endpoints';
import type { HttpResponsePaginationProps } from '@/utils/Http';

const useProductsCategory = (
  params: Omit<HttpResponsePaginationProps, 'total'> & {
    category: Maybe<string>;
  },
) => {
  const { category, ...restParam } = params;
  const { data, isLoading } = useQuery({
    queryKey: [endpoints.products, params],
    queryFn: () =>
      ProductsServices.getProductsCategory({
        category: category!,
        ...restParam,
      }),
    enabled: !!category && category?.length > 0,
  });

  return {
    data,
    isLoading: isLoading && !data,
  };
};

export default useProductsCategory;
