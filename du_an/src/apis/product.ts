import { TProduct } from '~/interfaces/Product';
import instance from '.';

export const createProduct = async (product: TProduct) => {
	try {
		const { data } = await instance.post('/products', product);
		return data;
	} catch (error) {
		console.log(error);
	}
};
