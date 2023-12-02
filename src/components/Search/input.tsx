import { useState, type FC } from 'react';
import { useRouter } from 'next/router';
import { SearchIcon } from '../kit/Icons/Search';

interface ISearchInputProps {}

export const SearchInput: FC<ISearchInputProps> = () => {
  const router = useRouter();
  const [value, setValue] = useState((router.query.q as Maybe<string>) ?? '');

  const handleSubmit = () => {
    router.push({ pathname: '/products', query: { q: value } });
  };

  return (
    <div className="relative flex w-full">
      <div
        className={
          'absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'
        }
      >
        <SearchIcon />
      </div>
      <input
        type="search"
        id="product-search"
        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        placeholder="Search Products like Mobiles, ..."
        required
        value={value}
        onChange={({ target }) => setValue(target.value)}
      />
      <button
        onClick={handleSubmit}
        type="submit"
        className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
      >
        Search
      </button>
    </div>
  );
};
