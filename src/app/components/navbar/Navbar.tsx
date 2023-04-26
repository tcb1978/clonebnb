'use client';

import { FC } from 'react';
import { Logo, Search, UserMenu } from '.';
import { Container } from '..';

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = ({}) => {
	return (
		<nav className='fixed z-10 w-full bg-white shadow-sm'>
			<div
				className='
        py-4
        border
        border-b-[1px]'>
				<Container>
					<div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
						<Logo />
						<Search />
						<UserMenu />
					</div>
				</Container>
			</div>
		</nav>
	);
};
