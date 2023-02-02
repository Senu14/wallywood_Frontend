import { PostersList } from '../../Movies/PostersList';
import Plakater from '../../../Pages/Plakater/Plakater';
import Notfound from '../../../Pages/NotFound/Notfound';
import Kontakt from '../../../Pages/Kontakt/Kontakt';
import { Routes, Route } from 'react-router-dom';
import Login from '../../../Pages/Login/Login';
import Home from '../../../Pages/Home/Home';
import Omos from '../../../Pages/Omos/Omos';
import { Movie } from '../../Movies/Movie';



const AppRouter = () => {
  return (
      <Routes>

             <Route index element={<Home />} />
             <Route path='/plakater' element={<Plakater />} >
             <Route index element={<PostersList />} />
              <Route path=":id" element={<Movie />}/>
              
              </Route>

             <Route path='*' element={<Notfound />} />
             <Route path='/omos' element={<Omos />} />
             <Route path='/kontakt'element={<Kontakt />} />
             <Route path='/Login'element={<Login />} />

      </Routes>
  );
}

export default  AppRouter;
