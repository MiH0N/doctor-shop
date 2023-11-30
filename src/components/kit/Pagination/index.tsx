import React, { type FC } from 'react';
import classnames from 'classnames';
import { DOTS, usePagination } from '@/hooks/usePagination';
import { ArrowLeft } from '../Icons/Arrow/Left';
import { ArrowRight } from '../Icons/Arrow/Right';

interface IPaginationProps {
  onPageChange: (page: number) => void;
  siblingCount: number;
  currentPage: number;
  count: number;
  disable?: boolean;
}

const paginationItemsStyle =
  'p-2 h-8 min-w-[32px] text-center my-auto mx-1 flex justify-center box-border items-center rounded-full cursor-pointer noselect';

const Pagination: FC<IPaginationProps> = ({
  onPageChange,
  siblingCount = 1,
  currentPage,
  count,
  disable = false,
  ...props
}) => {
  const paginationRange = usePagination({
    count,
    siblingCount,
    currentPage,
  });

  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null;
  }

  const onNext = () => {
    if (!disable) {
      onPageChange(currentPage + 1);
    }
  };

  const onPrevious = () => {
    if (!disable) {
      onPageChange(currentPage - 1);
    }
  };

  let lastPage = !!paginationRange
    ? paginationRange[paginationRange?.length - 1]
    : 1;

  return (
    <div
      className={'p-2 border border-gray-200 rounded-xl w-fit mx-auto my-4'}
    >
      <ul className="flex list-none text-12">
        <li
          className={classnames(
            'flex p-2 justify-center items-center cursor-pointer me-4',
            currentPage === 1
              ? 'pointer-events-none hover:bg-transparent hover:cursor-default'
              : '',
          )}
          onClick={onPrevious}
        >
          {/* <Icon
            icon={'arrow-right'}
            size={20}
            className={classnames(
              currentPage === 1 ? 'before:border-secondry-fade' : '',
            )}
          /> */}
          <ArrowLeft />
        </li>
        {paginationRange?.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return (
              <li
                key={index}
                className={classnames(
                  paginationItemsStyle,
                  'hover:bg-transparent hover:cursor-default',
                )}
              >
                &#8230;
              </li>
            );
          }

          return (
            <li
              key={index}
              className={classnames(
                paginationItemsStyle,
                pageNumber === currentPage
                  ? 'bg-blue-500 text-white'
                  : 'hover:bg-gray-200',
              )}
              onClick={() => {
                if (!disable) onPageChange(parseInt(pageNumber.toString()));
              }}
            >
              {pageNumber.toString()}
            </li>
          );
        })}
        <li
          className={classnames(
            'flex p-2 justify-center items-center cursor-pointer ms-4',
            currentPage === lastPage
              ? 'pointer-events-none hover:bg-transparent hover:cursor-default'
              : '',
          )}
          onClick={onNext}
        >
          {/* <Icon
            icon={'arrow-left'}
            size={20}
            className={classnames(
              currentPage === lastPage ? 'before:border-secondry-fade' : '',
            )}
          /> */}
          <ArrowRight />
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
