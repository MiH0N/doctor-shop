import { StarIcon } from '@/components/kit/Icons/Star';
import { FC } from 'react';

interface ProductRateProps extends Pick<IProduct, 'rating'> {}

export const ProductRate: FC<ProductRateProps> = ({ rating }) => (
  <div className="flex items-center space-x-1 rtl:space-x-reverse">
    <StarIcon key={crypto.randomUUID()} isFill />
    <span className="text-sm ms-2">{rating}</span>
  </div>
);
