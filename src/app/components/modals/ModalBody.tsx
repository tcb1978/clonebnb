import type { FC, ReactElement } from 'react';

interface ModalBodyProps {
	body?: ReactElement;
}

export const ModalBody: FC<ModalBodyProps> = ({ body }) => {
	return <div className='relative flex-auto p-6'>{body}</div>;
};
