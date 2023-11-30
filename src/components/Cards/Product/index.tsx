import React, { type FC } from 'react';
import Image from 'next/image';
import { ProductPrice } from './Price';
import { ProductRate } from './Rate';

interface IProductCardProps extends IProduct {}

export const ProductCard: FC<IProductCardProps> = ({
  thumbnail,
  title,
  description,
  price,
  discountPercentage,
  category,
  rating,
}) => {
  return (
    <div className="relative h-auto cursor-pointer bg-white border border-gray-200 rounded-lg hover:border-transparent hover:shadow-lg duration-300 transition-all">
      <span className="absolute top-2 left-5 bg-blue-100 text-blue-800 text-xs rounded-md font-semibold px-2.5 py-0.5 my-2 block w-fit">
        {category}
      </span>
      <div className="flex flex-col justify-between px-5 py-5 h-full">
        <div className="h-[250px] w-full relative">
          <Image
            className="p-10 rounded-t-lg m-auto relative"
            src={thumbnail}
            alt="product image"
            fill
          />
        </div>
        <div className="flex flex-col justify-between">
          <div className="min-h-18">
            <div className="min-h-12 line-clamp-1" title={title}>
              <h5 className="text-lg font-semibold tracking-tight text-gray-900">
                {title}
              </h5>
            </div>
            <p className="line-clamp-1 text-sm min-h-10">{description}</p>
          </div>
          <div className="flex justify-between items-center my-2.5">
            <ProductRate rating={rating} />
          </div>
        </div>
        <ProductPrice discountPercentage={discountPercentage} price={price} />
      </div>
    </div>
  );
};
