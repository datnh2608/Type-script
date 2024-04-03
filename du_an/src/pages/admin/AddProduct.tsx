import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { useForm } from 'react-hook-form';
import { TProduct } from '~/interfaces/Product';

const productSchema = Joi.object({
	title: Joi.string().required().min(3).max(255),
	price: Joi.number().required().min(0),
	description: Joi.string().allow(null, ''),
});

type Props = {
	onAdd: (product: TProduct) => void;
};

const AddProduct = ({ onAdd }: Props) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TProduct>({
		resolver: joiResolver(productSchema),
	});

	const onSubmit = (product: TProduct) => {
		onAdd(product);
	};
	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h2>AddProduct</h2>
				<div className="formGroup">
					<label htmlFor="title">Title product</label>
					<input
						className="form-control"
						type="text"
						placeholder="title"
						{...register('title', {
							required: true,
							minLength: 3,
							maxLength: 255,
						})}
					/>
					{errors.title && <p>{errors.title.message}</p>}
				</div>
				<div className="formGroup">
					<label htmlFor="price">Price product</label>
					<input
						className="form-control"
						type="number"
						placeholder="price"
						{...register('price', { required: true, min: 0 })}
					/>
					{errors.price && <p>{errors.price.message}</p>}
				</div>
				<div className="formGroup">
					<label htmlFor="description">Description product</label>
					<input
						className="form-control"
						type="text"
						placeholder="description"
						{...register('description')}
					/>
				</div>
				<div className="formGroup">
					<button className="btn btn-primary w-100" type="submit">
						Add Product
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddProduct;
