import endpoints from '@/constants/endpoints';
import Http, { type HttpResponsePaginationProps } from '@/utils/Http';

interface GetProductsCategoryResponse {
  products: IProduct[];
}

export default async function getProductsCategory(
  params: Omit<HttpResponsePaginationProps, 'total'> & {
    category: string;
  },
) {
  const { category, ...restParam } = params;
  const result = await Http.get<
    GetProductsCategoryResponse,
    HttpResponsePaginationProps
  >({
    url: endpoints.productsCategory(category),
    params: restParam,
  });
  return result;
}
