import axios, {
	CreateAxiosDefaults,
	AxiosInstance,
	AxiosResponse,
} from 'axios';

const onFulfilled = (response: AxiosResponse) => response;
const onRejected = (error: any) => Promise.reject(error);

export default class AxiosFactory {
	public static create(config?: CreateAxiosDefaults): AxiosInstance {
		const instance = axios.create(config);
		instance.interceptors.response.use(onFulfilled, onRejected);
		return instance;
	}
}
