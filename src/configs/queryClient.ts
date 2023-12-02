import queryFn from '@/helpers/queryFn';

const queryClientConfig = {
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
};

export default queryClientConfig;
