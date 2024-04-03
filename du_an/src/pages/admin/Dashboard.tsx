import React from 'react';
import { Link } from 'react-router-dom';
import { TProduct } from '~/interfaces/Product';

type Props = {
	products: TProduct[];
};

const Dashboard: React.FC<Props> = ({ products }) => {
	return (
		<div>
			<h1>Hello, admin</h1>
			<Link className="btn btn-primary" to="/admin/add">
				Add new product
			</Link>
			<h2>Danh sách sản phẩm</h2>
			<table className="table table-bordered table-striped">
				<thead>
					<tr>
						<th>#</th>
						<th>Title</th>
						<th>Price</th>
						<th>Thumbnail</th>
						<th>Description</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{products.map((item) => (
						<tr key={item.id}>
							<td>{item.id}</td>
							<td>{item.title}</td>
							<td>{item.price}</td>
							<td>
								<img src={item.thumbnail} alt={item.title} width="200px" />
							</td>
							<td>{item.description}</td>
							<td>
								<button className="btn btn-danger">Delete</button>{' '}
								<Link to={`/admin/edit/${item.id}`} className="btn btn-warning">
									Edit
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Dashboard;
