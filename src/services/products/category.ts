import endpoints from '@/constants/endpoints';
import Http from '@/utils/Http';

export default async function getCategoryList() {
  const result = await Http.get<string[]>({
    url: endpoints.categories,
  });
  return result;
}
