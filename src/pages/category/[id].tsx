import { useRouter } from 'next/router';
import type { NextPage } from 'next/types';

const ProductsCategoryPage: NextPage = (props) => {
  const route = useRouter();
  console.log(route.query.id);

  return <div></div>;
};

export default ProductsCategoryPage;
