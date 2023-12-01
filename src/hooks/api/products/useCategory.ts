import { useQuery } from '@tanstack/react-query';
import ProductService from '@/services/products';
import endpoints from '@/constants/endpoints';

const useCategory = () => {
  const { data, isLoading } = useQuery({
    queryKey: [endpoints.products],
    queryFn: () => ProductService.getCategories(),
  });

  return {
    data,
    isLoading: isLoading && !data,
  };
};

export default useCategory;
