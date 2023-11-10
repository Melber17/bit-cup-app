import axios, { AxiosRequestConfig } from "axios";

export const instanceConfig = {
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
};

export const instance = axios.create({
	baseURL: "https://api.pexels.com/v1/",
	...instanceConfig,
});

export const interceptorRequest = async (requestConfig: AxiosRequestConfig) => {
	requestConfig.headers.Authorization = `uFMRFSsP8O2yxsCZfL2xKwLwwatDbzqn1m9p1HfClIMRiCcJcPaRWjVq`;

	return requestConfig;
};

instance.interceptors.request.use(interceptorRequest);
