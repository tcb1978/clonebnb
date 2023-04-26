'use client';

import { FC } from 'react';
import { BiSearch } from 'react-icons/bi';

interface SearchProps {}

export const Search: FC<SearchProps> = ({}) => {
	return (
		<div
			className='border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer'
			role='search'>
			<div className='flex flex-row items-center justify-between'>
				<button className='px-6 text-sm font-semibold'>Anywhere</button>
				<button className='hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center'>
					Any Week
				</button>
				<div className='flex flex-row items-center gap-3 pl-6 pr-2 text-sm text-gray-600'>
					<button className='hidden sm:block'>Add Guests</button>
					<button className='p-2 text-white rounded-full bg-rose-500'>
						<BiSearch size={18} />
					</button>
				</div>
			</div>
		</div>
	);
};
