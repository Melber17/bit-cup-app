import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface IProps {
	color?: string;
}

export const BackArrowIcon: React.FC<IProps> = ({ color }) => {
	return (
		<Svg
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
		>
			<Path
				d="M16 4l-8 8 8 8"
				stroke={color ? color : "#03061D"}
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	);
};
