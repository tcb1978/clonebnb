'use client';

import clsx from 'clsx';
import { useCallback } from 'react';
import type { FC } from 'react';
import { ReactElement, useEffect, useState } from 'react';
import { ModalHeader } from './ModalHeader';
import { ModalBody } from './ModalBody';
import { ModalFooter } from './ModalFooter';

export interface ModalProps {
	isOpen?: boolean;
	onClose: () => void;
	onSubmit: () => void;
	title?: string;
	body?: ReactElement;
	footer?: ReactElement;
	actionLabel: string;
	disabled?: boolean;
	secondaryAction?: () => void;
	secondaryActionLabel?: string;
}

export const Modal: FC<ModalProps> = ({
	isOpen = true,
	onClose,
	onSubmit,
	title = '',
	body,
	footer,
	actionLabel,
	disabled,
	secondaryAction,
	secondaryActionLabel,
}) => {
	const [showModal, setShowModal] = useState<boolean>(isOpen);

	useEffect(() => {
		setShowModal(isOpen);
	}, [isOpen]);

	const handleClose = useCallback(() => {
		if (disabled) {
			return;
		}
		setShowModal(false);
		setTimeout(() => {
			onClose();
		}, 300);
	}, [disabled, onClose]);

	const handleSubmit = useCallback(() => {
		if (disabled) {
			return;
		}
		onSubmit();
	}, [disabled, onSubmit]);

	const handleSecondaryAction = useCallback(() => {
		if (disabled || !secondaryAction) {
			return;
		}
		secondaryAction();
	}, [disabled, secondaryAction]);

	if (!isOpen) {
		return null;
	}

	return (
		<>
			<div className='fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none bg-neutral-800/70'>
				<div className='relative w-full h-full mx-auto my-6 md:w-4/6 lg:w-3/6 xl:w-2/5 lg:h-auto md:h-auto'>
					{/* CONTENT */}
					<div
						className={clsx('translate duration-300h-full', {
							'translate-y-0 opacity-100': showModal,
							'translate-y-full opacity-0': !showModal,
						})}>
						<div className='relative flex flex-col w-full h-full bg-white border-0 rounded-lg shadow-lg outline-none translate lg:h-auto md:h-auto focus:outline-none'>
							<ModalHeader handleClose={handleClose} title={title} />
							<ModalBody body={body} />
							<ModalFooter
								actionLabel={actionLabel}
								secondaryAction={secondaryAction}
								secondaryActionLabel={secondaryActionLabel}
								disabled={disabled}
								handleSubmit={handleSubmit}
								handleSecondaryAction={handleSecondaryAction}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
