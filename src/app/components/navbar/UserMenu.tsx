'use client';

import { useState, useCallback } from 'react';
import type { FC } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

import { MenuItem } from './MenuItem';
import { Avatar } from '../Avatar';
import { useRegisterModal } from '@/app/hooks/useRegisterModal';

interface UserMenuProps {}

export const UserMenu: FC<UserMenuProps> = ({}) => {
	const registerModal = useRegisterModal();
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleOpen = useCallback(() => {
		setIsOpen((value) => !value);
	}, []);

	return (
		<div className='relative'>
			<div className='flex flex-row items-center gap-3'>
				<button
					className='hidden px-4 py-3 text-sm font-semibold transition rounded-full cursor-pointer md:block hover:bg-neutral-100'
					onClick={() => {}}>
					Airbnb your home
				</button>
				<button
					className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
					onClick={toggleOpen}>
					<AiOutlineMenu />
					<div className='hidden md:block'>
						<Avatar />
					</div>
				</button>
			</div>
			{isOpen && (
				<div className='absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm'>
					<div className='flex flex-col cursor-pointer'>
						<>
							<MenuItem onClick={registerModal.onOpen} label='Login' />
							<MenuItem onClick={() => {}} label='Sign up' />
						</>
					</div>
				</div>
			)}
		</div>
	);
};
