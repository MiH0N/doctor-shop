import Header from './Header';
import type { HOCFunctionalComponent } from '@/types/components';

export const Layout: HOCFunctionalComponent = ({ children }) => {
  return (
    <div className="">
      <Header />
      <main className="w-full">
        <div className="grid grid-cols-12">
          <div className="col-span-3 p-2">
            <div className="sticky top-12 bg-indigo-500 text-white h-[100px]">
              sidebar
            </div>
          </div>
          <div className="col-span-9 bg-gray-50 h-screen p-2">{children}</div>
        </div>
      </main>
    </div>
  );
};
