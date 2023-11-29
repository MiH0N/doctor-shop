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
    <div className=" relative w-full flex flex-col cursor-pointer bg-white border border-gray-200 rounded-lg hover:border-transparent hover:shadow-lg duration-300 transition-all">
      <div className="h-[200px]">
        <Image
          className="p-8 rounded-t-lg m-auto"
          src={thumbnail}
          alt="product image"
          width={200}
          height={200}
        />
      </div>
      <div className="px-5 pb-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="">
            <h5 className="text-lg font-semibold tracking-tight text-gray-900">
              {title}
              <span className="bg-blue-100 text-blue-800 text-xs rounded-md font-semibold px-2.5 py-0.5 my-1 mb-3 block w-fit">
                {category}
              </span>
            </h5>
            <p>{description}</p>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center my-2.5">
            <ProductRate rating={rating} />
          </div>
          <ProductPrice discountPercentage={discountPercentage} price={price} />
        </div>
      </div>
    </div>
  );
};
