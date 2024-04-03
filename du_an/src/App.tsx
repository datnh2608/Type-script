import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import instance from './apis';
import { createProduct } from './apis/product';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { TProduct } from './interfaces/Product';
import Login from './pages/LoginPage';
import Notfound from './pages/NotfoundPage/NotfoundPage';
import ProductDetail from './pages/ProductDetailPage/ProductDetailPage';
import Register from './pages/RegisterPage';
import Shop from './pages/ShopPage/ShopPage';
import AddProduct from './pages/admin/AddProduct';
import Dashboard from './pages/admin/Dashboard';
import EditProduct from './pages/admin/EditProduct';

const App: React.FC = () => {
	const navigate = useNavigate();
	const [products, setProducts] = useState<TProduct[]>([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const { data } = await instance.get(`/products`);
			setProducts(data);
		};
		fetchProducts();
	}, []);

	const handleAddProduct = (product: TProduct) => {
		(async () => {
			const data = await createProduct(product);
			setProducts([...products, data]);
			navigate('/admin');
		})();
	};
	const handleEditProduct = (product: TProduct) => {
		(async () => {
			const { data } = await instance.put(`/products/${product.id}`, product);
			setProducts(products.map((item) => (item.id === data.id ? data : item)));
			navigate('/admin');
		})();
	};

	return (
		<div>
			<Header />
			<main id="main" className="container">
				<Routes>
					<Route path="/">
						<Route index element={<Shop products={products} />} />
						<Route path="/shop/:productId" element={<ProductDetail />} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
					</Route>
					<Route path="/admin">
						<Route index element={<Dashboard products={products} />} />
						<Route
							path="/admin/add"
							element={<AddProduct onAdd={handleAddProduct} />}
						/>
						<Route
							path="/admin/edit/:id"
							element={<EditProduct onEdit={handleEditProduct} />}
						/>
					</Route>
					<Route path="*" element={<Notfound />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
};

export default App;
