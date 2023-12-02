import { SearchInput } from '@/components/Search/input';

export default function Header() {
  return (
    <nav className="sticky flex w-full flex-wrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 lg:py-4">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <a className="ml-2 text-xl text-neutral-800" href="#">
          Shopping Doctor
        </a>

        <div className="me-5 w-[30%]">
          <SearchInput />
        </div>
      </div>
    </nav>
  );
}
