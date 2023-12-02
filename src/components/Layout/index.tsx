import { CategoryList } from '../List/Category';
import Header from './Header';
import type { HOCFunctionalComponent } from '@/types/components';

export const Layout: HOCFunctionalComponent = ({ children }) => {
  return (
    <div className="bg-gray-50 text-dark-body">
      <Header />
      <main className="w-full">
        <div className="grid grid-cols-12">
          <div className="col-span-3 p-8">
            <CategoryList />
          </div>
          <div className="col-span-9 p-2">{children}</div>
        </div>
      </main>
    </div>
  );
};
