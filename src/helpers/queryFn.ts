import Http from '@/utils/Http';
import type { QueryFunction } from '@tanstack/react-query';

const queryFn: QueryFunction = ({ queryKey }) => {
  const url = Array.isArray(queryKey) ? queryKey[0] : queryKey;
  const params = queryKey[1] as Maybe<Dictionary>;
  return Http.get({
    url,
    params,
  });
};
export default queryFn;
