import { Link } from 'react-router-dom';
import style from './ShopPage.module.scss';
import React from 'react';
import { TProduct } from '~/interfaces/Product';
type Props = {
	products: TProduct[];
};
const Shop: React.FC<Props> = ({ products }) => {
	return (
		<div>
			<h1>Danh sách sản phẩm bán chạy</h1>
			<div className="row">
				{products.map((item) => (
					<div className="col-4" key={item.id}>
						<div className={style.productCart} key={item.id}>
							<Link to={`/shop/${item.id}`}>
								<h3 className="card-title">{item.title}</h3>
							</Link>
							<div>{item.price}</div>
							<Link to={`/shop/${item.id}`}>
								<img width={'100%'} src={item.thumbnail} alt={item.title} />
							</Link>
							<p>{item.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Shop;
