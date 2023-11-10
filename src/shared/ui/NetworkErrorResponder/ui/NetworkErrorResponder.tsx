import React from "react";

import NetworkErrorContent from "./NetworkErrorContent";

interface INetworkErrorResponderProps {
	isError: boolean;
	onPress: () => void;
	children: React.ReactNode;
}

export const NetworkErrorResponder: React.FC<INetworkErrorResponderProps> = (
	props,
) => {
	const { isError, onPress, children } = props;

	return (
		<>{isError ? <NetworkErrorContent onPress={onPress} /> : <>{children}</>}</>
	);
};
