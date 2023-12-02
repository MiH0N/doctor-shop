import endpoints from '@/constants/endpoints';
import Http, { type HttpResponsePaginationProps } from '@/utils/Http';

export interface searchProductsResponse {
  products: IProduct[];
}

export default async function searchProducts(
  params: Omit<HttpResponsePaginationProps, 'total'> & {
    search: string;
  },
) {
  const { search, ...restParam } = params;
  const result = await Http.get<
    searchProductsResponse,
    HttpResponsePaginationProps
  >({
    url: endpoints.searchProducts,
    params: { q: search, ...restParam },
  });
  return result;
}
