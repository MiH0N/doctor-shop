import capitalizeFirstLetter from '@/helpers/capitalizeFirstLetter';
import useCategory from '@/hooks/api/products/useCategory';
import classnames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { FC } from 'react';
interface ICategoryListProps {}

export const CategoryList: FC<ICategoryListProps> = (props) => {
  const { data, isLoading } = useCategory();
  const route = useRouter();

  return (
    <div className="p-3 rounded-lg bg-white">
      <ul className="space-y-3">
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
                {capitalizeFirstLetter(category.split('-').join(' '))}
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
