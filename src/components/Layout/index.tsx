import { CategoryList } from '../List/Category';
import Header from './Header';
import type { HOCFunctionalComponent } from '@/types/components';

export const Layout: HOCFunctionalComponent = ({ children }) => {
  return (
    <div className="bg-gray-50 text-dark-body">
      <Header />
      <main className="w-full">
        <div className="grid grid-cols-12">
          <div className="hidden fablet:block fablet:col-span-4 md:col-span-3 p-3 xl:p-8">
            <CategoryList />
          </div>
          <div className="col-span-12 fablet:col-span-8 md:col-span-9 ">{children}</div>
        </div>
      </main>
    </div>
  );
};
