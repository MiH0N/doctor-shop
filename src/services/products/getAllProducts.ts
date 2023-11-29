import endpoints from '@/constants/endpoints';
import Http, { type HttpResponsePaginationProps } from '@/utils/Http';

interface GetAllProductsResponse {
  products: IProduct;
}

export default async function getAllProducts(
  params: Omit<HttpResponsePaginationProps, 'total'>,
) {
  const result = await Http.get<
    GetAllProductsResponse,
    HttpResponsePaginationProps
  >({
    url: endpoints.products,
    params,
  });
  return result;
}
