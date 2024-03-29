import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.scss';

const Header: React.FC = () => {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<NavLink className={style.itemLink} to="/">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink className={style.itemLink} to="/shop">
							San pham HOT
						</NavLink>
					</li>
					<li>
						<NavLink className={style.itemLink} to="/login">
							Login
						</NavLink>
					</li>
					<li>
						<NavLink className={style.itemLink} to="/register">
							Register
						</NavLink>
					</li>
					<li>
						<NavLink className={style.itemLink} to="/admin">
							AdminPage
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
