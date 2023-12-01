import endpoints from '@/constants/endpoints';
import Http, { type HttpResponsePaginationProps } from '@/utils/Http';

interface GetProductListResponse {
  products: IProduct[];
}

export default async function getProductList(
  params: Omit<HttpResponsePaginationProps, 'total'>,
) {
  const result = await Http.get<
    GetProductListResponse,
    HttpResponsePaginationProps
  >({
    url: endpoints.products,
    params,
  });
  return result;
}
