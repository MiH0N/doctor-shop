import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import queryClientConfig from '@/configs/queryClient';
import type { HOCFunctionalComponent } from '@/types/components';


const AppQueryClientProvider: HOCFunctionalComponent = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient(queryClientConfig));

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default AppQueryClientProvider;
