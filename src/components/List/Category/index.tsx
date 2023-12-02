import { useRouter } from 'next/router';
import Link from 'next/link';
import classnames from 'classnames';
import useCategory from '@/hooks/api/products/useCategory';
import CategoryHelper from '@/helpers/category';
import type { FC } from 'react';
interface ICategoryListProps {}

export const CategoryList: FC<ICategoryListProps> = (props) => {
  const { data, isLoading } = useCategory();
  const route = useRouter();

  return (
    <div className="p-3 rounded-lg bg-white">
      <ul className="space-y-3">
        <Link href={'products'}>
          <li
            className={
              'py-1 border-blue-200 cursor-pointer duration-100 transition-all text-black/60 hover:text-black hover:ps-1 hover:border-l-2'
            }
          >
            <span className="ps-6 text-sm">All</span>
          </li>
        </Link>
        {data?.map((category) => (
          <Link
            key={crypto.randomUUID()}
            href={'/category/[id]'}
            as={`/category/${category}`}
          >
            <li
              className={classnames(
                'py-1 border-blue-200 cursor-pointer duration-100 transition-all',
                route.query?.id === category
                  ? 'text-blue-800 border-l-2'
                  : 'text-black/60 hover:text-black hover:ps-1 hover:border-l-2',
              )}
            >
              <span className="ps-6 text-sm">
                {CategoryHelper.formatTitle(category)}
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
