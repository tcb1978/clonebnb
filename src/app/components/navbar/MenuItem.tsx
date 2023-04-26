'use client';

import { type FC } from 'react';

interface MenuItemProps {
	onClick: () => void;
	label: string;
}

export const MenuItem: FC<MenuItemProps> = ({ onClick, label }) => {
	return (
		<div
			className='px-4 py-3 font-semibold transition hover:bg-neutral-100'
			onClick={onClick}>
			{label}
		</div>
	);
};
