import { Routes, Route } from 'react-router-dom';
import Home from '../../../Pages/Home/Home';
import Plakater from '../../../Pages/Plakater/Plakater';
import Omos from '../../../Pages/Omos/Omos';
import Kontakt from '../../../Pages/Kontakt/Kontakt';
import Login from '../../../Pages/Login/Login';
import Notfound from '../../../Pages/NotFound/Notfound';


const AppRouter = () => {
  return (
      <Routes>

             <Route index element={<Home />} />
             <Route path='/plakater' element={<Plakater />} />
             <Route path='*' element={<Notfound />} />
             <Route path='/omos' element={<Omos />} />
             <Route path='/kontakt'element={<Kontakt />} />
             <Route path='/Login'element={<Login />} />

      </Routes>
  );
}

export default  AppRouter;
