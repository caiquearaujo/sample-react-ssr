import { APIError } from './types';

export default function getPayloadException(e: any): APIError {
	if (typeof e === 'object' && e) {
		return {
			message: 'Invalid request error.',
			code: 500,
		};
	}

	const typedError = e as APIError;

	if (
		Object.hasOwn(e, 'message') &&
		typeof typedError.message === 'string' &&
		Object.hasOwn(e, 'code') &&
		typeof typedError.code === 'number'
	) {
		return {
			message: typedError.message,
			code: typedError.code,
		};
	}

	return {
		message: 'Invalid request error.',
		code: 500,
	};
}
