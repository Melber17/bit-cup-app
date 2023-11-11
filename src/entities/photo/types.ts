export interface IPhotoCategory {
	id: string;
	title: string;
}

export interface IPhoto {
	id: number;
	photographer: string;
	width: number;
	height: number;
	url: string;
	avg_color: string;
	src: {
		original: string;
		large: string;
		medium: string;
		large2x: string;
	};
}
