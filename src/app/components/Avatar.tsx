'use client';

import { type FC } from 'react';
import Image from 'next/image';

interface AvatarProps {}

export const Avatar: FC<AvatarProps> = ({}) => {
	return (
		<Image
			className='rounded-full'
			height='30'
			width='30'
			alt='avatar'
			src='/images/placeholder.jpg'
		/>
	);
};
