import React, { type FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ProductPrice } from './Price';
import { ProductRate } from './Rate';
import CategoryHelper from '@/helpers/category';

interface IProductCardProps extends IProduct {
  categoryStyle: {
    background: string;
  };
}

export const ProductCard: FC<IProductCardProps> = ({
  thumbnail,
  title,
  description,
  price,
  discountPercentage,
  category,
  rating,
  categoryStyle,
}) => {
  return (
    <div className="relative h-auto cursor-pointer bg-white border text-dark-title border-gray-200 rounded-lg hover:border-transparent hover:shadow-lg duration-300 transition-all">
      <span
        className="absolute top-2 left-5 z-10 text-xs rounded-md font-semibold px-2.5 py-0.5 my-2 block w-fit text-blue-100"
        style={{
          ...categoryStyle,
        }}
      >
        <Link href={'/category/[id]'} as={`/category/${category}`}>
          {CategoryHelper.formatTitle(category)}
        </Link>
      </span>
      <div className="flex flex-col justify-between px-5 py-5 h-full">
        <div className="w-[180px] h-[180px] fablet:h-[250px] fablet:w-full relative m-auto">
          <Image
            className="fablet:p-10 rounded-t-lg m-auto relative"
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
