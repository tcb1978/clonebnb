'use client';

import type { FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface LogoProps {}

export const Logo: FC<LogoProps> = ({}) => {
	const router = useRouter();
	return (
		<Image
			alt='Logo'
			className='hidden cursor-pointer md:block'
			src='/images/logo.png'
			height='100'
			width='100'
		/>
	);
};
