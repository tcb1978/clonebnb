'use client';

import type { FC } from 'react';
import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import { useRegisterModal } from '../../hooks/useRegisterModal';
import { Modal } from './Modal';
import { Heading } from '../Heading';
import { Input } from '../inputs/Input';
import { toast } from 'react-hot-toast';
import { Button } from '../Button';

interface RegisterModalProps {}

export const RegisterModal: FC<RegisterModalProps> = ({}) => {
	const registerModal = useRegisterModal();
	const { isOpen, onClose } = registerModal;
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			name: '',
			email: '',
			password: '',
		},
	});

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true);

		axios
			.post('/api/register', data)
			.then(() => {
				onClose();
			})
			.catch((error) => {
				console.error(error);
				toast.error(
					`Something went wrong, ${JSON.stringify(error['message'], null, 2)}`
				);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const bodyContent = (
		<div className='flex flex-col gap-4'>
			<Heading title='Welcome to CloneBnB' subtitle='Create an account!' />
			<Input
				id='email'
				label='Email'
				disabled={isLoading}
				register={register}
				errors={errors}
				required
			/>
			<Input
				id='name'
				label='Name'
				disabled={isLoading}
				register={register}
				errors={errors}
				required
			/>
			<Input
				id='password'
				label='Password '
				disabled={isLoading}
				register={register}
				errors={errors}
				required
			/>
		</div>
	);

	const footerContent = (
		<div className='flex flex-col gap-4 mt-3'>
			<hr />
			<Button
				outline
				label='Continue with Google'
				icon={FcGoogle}
				onClick={() => {}}
			/>
			<Button
				outline
				label='Continue with Github'
				icon={AiFillGithub}
				onClick={() => {}}
			/>
			<div className='mt-4 font-light text-center text-neutral-500'>
				<div className='flex flex-row items-center justify-center gap-2'>
					<div>Already have an account?</div>
					<div
						className='cursor-pointer text-neutral-800 hover:underline'
						onClick={onClose}>
						Login
					</div>
				</div>
			</div>
		</div>
	);

	return (
		<Modal
			disabled={isLoading}
			isOpen={isOpen}
			title='Register'
			actionLabel='Continue'
			onClose={onClose}
			onSubmit={handleSubmit(onSubmit)}
			body={bodyContent}
			footer={footerContent}
		/>
	);
};
