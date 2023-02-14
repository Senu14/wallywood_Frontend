import { Posters } from '../../Pages/Posters/Posters';
import { Routes, Route } from 'react-router-dom';
import{ Cart } from '../Cart/Cart';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import Notfound from '../../Pages/NotFound/Notfound';

import { PosterList } from '../../Pages/Posters/PosterList'
import  PosterDetails  from '../../Pages/Posters/PosterDetails'
const AppRouter = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="/posters" element={<Posters />}>
				<Route path=":genre" element={<PosterList />} />
				<Route path=":genre/:poster" element={<PosterDetails />} />
			</Route>
			<Route path="/cart" element={<Cart />} />
			<Route path="/login" element={<Login />} />
			<Route path="*" element={<Notfound />} />
		</Routes>
	);
}

export default  AppRouter;
