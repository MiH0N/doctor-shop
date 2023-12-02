import { createContext } from 'react';
import type { HOCFunctionalComponent } from '@/types/components';

export type AppContextProps = {
  categories: string[];
};

export const AppContext = createContext<AppContextProps>({
  categories: [],
});

const AppContextProvider: HOCFunctionalComponent<AppContextProps> = ({
  children,
  categories,
}) => {
  return (
    <AppContext.Provider value={{ categories }}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
