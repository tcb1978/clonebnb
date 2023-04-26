import { FC } from 'react';
import { Container } from '../Container';
import { Logo, Search } from '.';

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = ({}) => {
	return (
		<div className='fixed z-10 w-full bg-white shadow-sm'>
			<div
				className='
        py-4
        border
        border-b-[1px]'>
				<Container>
					<div className='flex flex-row items-center gap-3 md:gap-0'>
						<Logo />
						<Search />
					</div>
				</Container>
			</div>
		</div>
	);
};
