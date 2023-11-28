import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HOCFunctionalComponent } from '@/types/components';
import queryFn from '@/helpers/queryFn';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      queryFn,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchIntervalInBackground: false,
      refetchOnReconnect: false,
    },
  },
});

const AppQueryClientProvider: HOCFunctionalComponent = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export default AppQueryClientProvider;
