import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Shop from './pages/ShopPage/ShopPage';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';
import Notfound from './pages/NotfoundPage';
import ProductDetail from './pages/ProductDetailPage/ProductDetailPage';
import Dashboard from './pages/admin/Dashboard';
import { useEffect, useState } from 'react';
import { TProduct } from './interfaces/Product';
import instance from './apis';
import AddProduct from './pages/admin/AddProduct';
import { createProduct } from './apis/product';

const App: React.FC = () => {
	const [products, setProducts] = useState<TProduct[]>([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const { data } = await instance.get(`/products`);
			setProducts(data);
		};
		fetchProducts();
	}, []);

	const handleSubmit = (product: TProduct) => {
		async () => {
			const data = await createProduct(product);
			setProducts([...products, data]);
		};
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
							element={<AddProduct onAdd={handleSubmit} />}
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
