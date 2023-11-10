import React, { useEffect, useState } from "react";
import NetInfo, { NetInfoStateType } from "@react-native-community/netinfo";

import NetworkErrorContent from "./NetworkErrorContent";

interface INetworkErrorHandlerProps {
	children: React.ReactNode;
}

export const NetworkErrorHandler: React.FC<INetworkErrorHandlerProps> = ({
	children,
}) => {
	const [isError, setIsError] = useState(false);

	const handleGetNetworkStatus = async () => {
		const result = await NetInfo.fetch();

		if (
			result.type === NetInfoStateType.none ||
			result.type === NetInfoStateType.unknown
		) {
			setIsError(true);

			return;
		}
		if (isError) {
			setIsError(false);
		}
	};

	useEffect(() => {
		handleGetNetworkStatus();
	}, []);

	return (
		<>
			{isError ? (
				<NetworkErrorContent onPress={handleGetNetworkStatus} />
			) : (
				<>{children}</>
			)}
		</>
	);
};
