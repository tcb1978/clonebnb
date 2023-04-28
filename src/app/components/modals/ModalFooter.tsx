import type { FC, MouseEvent } from 'react';
import { Button } from '../Button';
import { ModalProps } from './Modal';

interface ModalFooterProps {
	actionLabel: ModalProps['actionLabel'];
	secondaryActionLabel: ModalProps['secondaryActionLabel'];
	secondaryAction: ModalProps['secondaryAction'];
	disabled: ModalProps['disabled'];
	handleSubmit: (e: MouseEvent<HTMLButtonElement>) => void;
	handleSecondaryAction: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const ModalFooter: FC<ModalFooterProps> = ({
	actionLabel = 'Submit',
	secondaryActionLabel,
	disabled,
	handleSubmit,
	handleSecondaryAction,
	secondaryAction,
}) => {
	return (
		<div className='flex flex-col gap-2 p-6'>
			<div className='flex flex-row items-center w-full gap-4'>
				{secondaryAction && secondaryActionLabel && (
					<Button
						outline
						disabled={disabled}
						label={secondaryActionLabel}
						onClick={handleSecondaryAction}
					/>
				)}
				<Button
					disabled={disabled}
					label={actionLabel}
					onClick={handleSubmit}
				/>
			</div>
		</div>
	);
};
