import { FC } from 'react';
interface ProductPriceProps
  extends Pick<IProduct, 'discountPercentage' | 'price'> {}

export const ProductPrice: FC<ProductPriceProps> = ({
  discountPercentage,
  price,
}) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <span className="font-bold text-gray-900 text-2xl block">
          $
          {Math.floor(
            price * (discountPercentage ? 100 - discountPercentage : 1),
          )}
        </span>
        {discountPercentage ? (
          <span className="line-through text-md text-gray-400 block">
            ${price}
          </span>
        ) : null}
      </div>
      {discountPercentage ? (
        <span className="bg-red-500 text-white p-2 rounded-xl text-xs w-10 text-center">
          {Math.round(discountPercentage)}%
        </span>
      ) : null}
    </div>
  );
};
