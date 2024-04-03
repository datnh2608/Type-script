import React from 'react';
import { TProduct } from '~/interfaces/Product';
import style from './ProductItem.module.scss'; // Import module CSS

type Props = {
	product: TProduct | null;
	viewMode: string;
};

const ProductItem = (props: Props) => {
	const viewMode = props.viewMode;
	return (
		<div className={style.productItem}>
			{' '}
			{/* Sử dụng lớp CSS từ module */}
			<h2>{props.product?.title}</h2>
			<img
				width={viewMode === 'full' ? 300 : 160}
				src={props.product?.thumbnail}
				alt={props.product?.title}
			/>
			<div>Gia san pham: {props.product?.price}</div>
		</div>
	);
};

export default ProductItem;
