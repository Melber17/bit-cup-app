import { PermissionsAndroid, ToastAndroid } from "react-native";
import RNFetchBlob from "rn-fetch-blob";
import DeviceInfo from "react-native-device-info";

export const checkDownloadFilePermission = async (fileUrl: string) => {
	try {
		const sdkVersion = DeviceInfo.getSystemVersion();

		const granted = await PermissionsAndroid.request(
			+sdkVersion >= 13
				? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
				: PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
		);

		if (granted === PermissionsAndroid.RESULTS.GRANTED) {
			downloadFile(fileUrl);
		} else {
			ToastAndroid.showWithGravity(
				"Error, no permission to download",
				ToastAndroid.SHORT,
				ToastAndroid.BOTTOM,
			);
		}
	} catch (err) {
		ToastAndroid.showWithGravity(
			"An error occurred while downloading",
			ToastAndroid.SHORT,
			ToastAndroid.BOTTOM,
		);
	}
};

export const downloadFile = (fileUrl: string) => {
	const date = new Date();
	const FILE_URL = fileUrl;
	let fileExtension: Nullable<RegExpExecArray | string | undefined> =
		getFileExtension(FILE_URL);

	if (fileExtension) {
		fileExtension = "." + fileExtension[0];

		const { config, fs } = RNFetchBlob;
		const RootDir = fs.dirs.PictureDir;
		const options = {
			fileCache: true,

			addAndroidDownloads: {
				path:
					RootDir +
					"/file_" +
					Math.floor(date.getTime() + date.getSeconds() / 2) +
					fileExtension,
				description: "Loading...",
				notification: true,
				useDownloadManager: true,
			},
			path:
				fs.dirs.LibraryDir +
				"/file_" +
				Math.floor(date.getTime() + date.getSeconds() / 2) +
				fileExtension,
		};

		config(options).fetch("GET", FILE_URL);
	}
};

const getFileExtension = (
	fileUrl: string,
): RegExpExecArray | null | undefined => {
	return /[.]/.exec(fileUrl) ? /[^.]+$/.exec(fileUrl) : undefined;
};
