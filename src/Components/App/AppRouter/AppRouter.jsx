import { Posters } from '../../Pages/Posters/Posters';
import { Routes, Route } from 'react-router-dom';
import{ Cart } from '../Cart/Cart';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import Notfound from '../../Pages/NotFound/Notfound';
import Omos from '../../Pages/Omos/Omos';
import { PosterList } from '../../Pages/Posters/PosterList'
import  PosterDetails  from '../../Pages/Posters/PosterDetails'
import Kontakt from '../../Pages/Kontakt/Kontakt';
const AppRouter = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="/posters" element={<Posters />}>
				<Route path="" exact element={<PosterList />} />
				<Route path=":genre" element={<PosterList />} />
				<Route path=":genre/:poster" element={<PosterDetails />} />
			</Route>
			<Route path="/cart" element={<Cart />} />
			<Route path="/login" element={<Login />} />
			<Route path ="/omos" element={<Omos/>} />
			<Route path="/kontakt" element={<Kontakt/>}/>
			<Route path="*" element={<Notfound />} />
		</Routes>
	);
}

export default  AppRouter;
