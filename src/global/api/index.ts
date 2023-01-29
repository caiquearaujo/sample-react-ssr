import axios from 'axios';
import { UserObject } from '@global/types';

const getAllUsers = async (): Promise<UserObject[]> => {
	try {
		const { data } = await axios.get(
			'https://jsonplaceholder.typicode.com/users'
		);
		return data;
	} catch (error) {
		console.error(error);
		return [];
	}
};

// eslint-disable-next-line import/prefer-default-export
export { getAllUsers };
