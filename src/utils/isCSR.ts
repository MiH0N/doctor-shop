import type { GetServerSidePropsContext } from 'next/types';

export function isCSR(req: GetServerSidePropsContext['req']) {
  const url = req?.url as string;
  return url.startsWith('/_next');
}

export default isCSR;
