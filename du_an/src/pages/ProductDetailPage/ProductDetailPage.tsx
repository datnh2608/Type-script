import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import instance from '~/apis';
import ProductItem from '~/components/ProductItem/ProductItem';
import { TProduct } from '~/interfaces/Product';

type Props = {};

const ProductDetail = (props: Props) => {
	const params = useParams();
	const [product, setProduct] = useState<TProduct | null>(null);

	useEffect(() => {
		const getProduct = async () => {
			const { data } = await instance.get(`/products/${params.productId}`);
			setProduct(data);
		};
		getProduct();
	}, []);
	return (
		<div>
			<ProductItem product={product} viewMode={'popup'} />
		</div>
	);
};

export default ProductDetail;
