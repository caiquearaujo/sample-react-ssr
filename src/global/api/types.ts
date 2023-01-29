export enum APIStatus {
	IDLE,
	PENDING,
	REJECTED,
	FULFILLED,
}

export type APIError = {
	message: string;
	code: number;
};

export type APIResponse<DataType = any> = {
	status: APIStatus;
	data?: DataType;
	error?: APIError;
};
