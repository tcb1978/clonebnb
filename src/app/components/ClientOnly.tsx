import { type FC, useState } from 'react';

interface ClientOnlyProps {}

export const ClientOnly: FC<ClientOnlyProps> = ({}) => {
	const [hasMounted, setHasMounted] = useState<boolean>(false);
	return <div>ClientOnly</div>;
};
