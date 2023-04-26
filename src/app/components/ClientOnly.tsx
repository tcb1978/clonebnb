import { type FC, useState, useEffect, type ReactNode } from 'react';

interface ClientOnlyProps {
	children: ReactNode;
}

export const ClientOnly: FC<ClientOnlyProps> = ({ children }) => {
	const [hasMounted, setHasMounted] = useState<boolean>(false);

	useEffect(() => {
		setHasMounted(true);
	}, []);

	if (!hasMounted) {
		return null;
	}

	return <>{children}</>;
};
