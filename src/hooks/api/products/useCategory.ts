import { useQuery } from '@tanstack/react-query';
import ProductsServices from '@/services/products';
import endpoints from '@/constants/endpoints';

const useCategory = () => {
  const { data, isLoading } = useQuery({
    queryKey: [endpoints.products],
    queryFn: () => ProductsServices.getCategories(),
  });

  return {
    data,
    isLoading: isLoading && !data,
  };
};

export default useCategory;
