import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import instance from '~/apis';
import { TProduct } from '~/interfaces/Product';

const productSchema = Joi.object({
	title: Joi.string().required().min(3).max(255),
	price: Joi.number().required().min(0),
	description: Joi.string().allow(null, ''),
});

type Props = {
	onEdit: (product: TProduct) => void;
};

const EditProduct = ({ onEdit }: Props) => {
	const { id } = useParams();
	const [product, setProduct] = useState<TProduct | null>(null);
	const {
		register,
		handleSubmit,
		formState: { errors },
		// reset,
	} = useForm<TProduct>({
		resolver: joiResolver(productSchema),
	});
	useEffect(() => {
		(async () => {
			const { data } = await instance.get(`/products/${id}`);
			console.log(data);
			setProduct(data);
			// reset(data);
		})();
	}, []);
	const onSubmit = (product: TProduct) => {
		onEdit({ ...product, id: Number(id) });
	};
	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h2>Edit Product</h2>
				<div className="fromGroup">
					<label htmlFor="">Title</label>
					<input
						className="form-control"
						type="text"
						{...register('title', {
							required: true,
							minLength: 3,
							maxLength: 255,
						})}
						defaultValue={product?.title}
					/>
					{errors.title && (
						<div className="text-danger">{errors.title.message}</div>
					)}
				</div>
				<div className="fromGroup">
					<label htmlFor="">Price</label>
					<input
						className="form-control"
						type="number"
						{...register('price', { required: true, min: 0 })}
						defaultValue={product?.price}
					/>
					{errors.price && (
						<div className="text-danger">{errors.price.message}</div>
					)}
				</div>
				<div className="fromGroup">
					<label htmlFor="">Description</label>
					<input
						className="form-control"
						type="text"
						{...register('description')}
						defaultValue={product?.description}
					/>
				</div>
				<button className="btn btn-primary w-100">Submit</button>
			</form>
		</div>
	);
};

export default EditProduct;
