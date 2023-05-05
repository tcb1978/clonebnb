import clsx from 'clsx';
import type { FC } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { BiDollar } from 'react-icons/bi';

interface InputProps {
	id: string;
	label: string;
	type?: string;
	disabled?: boolean;
	formatPrice?: boolean;
	required?: boolean;
	register: UseFormRegister<FieldValues>;
	errors: FieldErrors;
}

export const Input: FC<InputProps> = ({
	id,
	label,
	type = 'text',
	disabled,
	formatPrice,
	register,
	required,
	errors,
}) => {
	return (
		<div className='relative w-full'>
			{formatPrice && (
				<BiDollar
					size={24}
					className='absolute text-neutral-700 top-5 left-2'
				/>
			)}
			<input
				type={type}
				id={id}
				disabled={disabled}
				{...register(id, { required })}
				placeholder=' '
				className={clsx(
					'peer w-full p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed',
					{
						'pl-9': formatPrice,
						'pl-4': !formatPrice,
						'border-rose-500 focus:border-rose-500': errors[id],
						'border-neutral-300 focus:border-black': !errors[id],
					}
				)}
			/>
			<label
				className={clsx(
					'absolute text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4',
					{
						'left-9': formatPrice,
						'left-4': !formatPrice,
						'text-rose-500': errors[id],
						'text-zinc-400': !errors[id],
					}
				)}
				htmlFor={id}>
				{label}
			</label>
		</div>
	);
};
