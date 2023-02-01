// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { NavBarPrimarystyle } from './NavBarPrimary.style';
import { NavLink } from 'react-router-dom';

const NavBarPrimary = () => {
  return (
        <NavBarPrimarystyle>
         {/* <FontAwesomeIcon icon="fa-solid fa-basket-shopping-simple" /> */}
           <ul>
                <li><NavLink to= "/">HOME</NavLink></li>
                <li><NavLink to= "/plakater">PLAKATER</NavLink></li>
                <li><NavLink to= "/omos">OM OS</NavLink></li>
                <li><NavLink to= "/kontakt">KONTAKT</NavLink></li>
                <li><NavLink to= "/login">LOGIN</NavLink></li>
            </ul>
        </NavBarPrimarystyle>
   
  );
}

export default NavBarPrimary;
