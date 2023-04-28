import type { FC } from 'react';
import { IoMdClose } from 'react-icons/io';

interface ModalHeaderProps {
	handleClose: () => void;
	title: string;
}

export const ModalHeader: FC<ModalHeaderProps> = ({ handleClose, title }) => {
	return (
		<div className='relative flex items-center justify-center p-6 rounded-t '>
			<button
				className='absolute p-1 transition border-0 hover:opacity-70 left-9'
				onClick={handleClose}>
				<IoMdClose size={18} />
			</button>
			<div className='text-lg font-semibold'>{title}</div>
		</div>
	);
};
