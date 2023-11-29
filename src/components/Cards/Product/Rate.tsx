import { StarIcon } from '@/components/Icons/Star';
import { FC } from 'react';

interface ProductRateProps extends Pick<IProduct, 'rating'> {}

export const ProductRate: FC<ProductRateProps> = ({ rating }) => (
  <div className="flex items-center space-x-1 rtl:space-x-reverse">
    {[...Array(Math.floor(rating))].map(() => (
      <StarIcon key={crypto.randomUUID()} isFill />
    ))}
    {[...Array(5 - Math.floor(rating))].map(() => (
      <StarIcon key={crypto.randomUUID()} />
    ))}
  </div>
);
