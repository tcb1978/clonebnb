'use client';

import type { FC } from 'react';
import { Toaster } from 'react-hot-toast';

interface ToasterProviderProps {}

export const ToasterProvider: FC<ToasterProviderProps> = ({}) => {
	return <Toaster />;
};
