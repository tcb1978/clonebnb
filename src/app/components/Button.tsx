import clsx from 'clsx';
import type { FC, MouseEvent, ReactNode } from 'react';
import type { IconType } from 'react-icons';

interface ButtonProps {
	disabled?: boolean;
	label?: string;
	icon?: IconType;
	onClick: (e: MouseEvent<HTMLButtonElement>) => void;
	outline?: boolean;
	small?: boolean;
}

export const Button: FC<ButtonProps> = ({
	disabled,
	icon: Icon,
	label,
	onClick,
	outline,
	small,
}) => {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={clsx(
				'relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full flex items-center justify-start',
				{
					'bg-white border-black text-black': outline,
					'bg-rose-500 border-rose-500 text-white': !outline,
					'py-1 text-sm font-light border-[1px]': small,
					'py-3 text-md font-semibold border-2': !small,
				}
			)}>
			{Icon && (
				<span className='px-3'>
					<Icon className='flex flex-row items-center w-full gap-4' />
				</span>
			)}
			<span className='w-full'>{label}</span>
		</button>
	);
};
