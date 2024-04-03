import { User } from '~/interfaces/User';
import instance from '.';

export const onRegister = async (user: User) => {
	try {
		const { data } = await instance.post('/register', user);
		return data;
	} catch (error) {
		console.log(error);
	}
};
