import { Link } from 'react-router-dom';
import { HeaderStyle } from './Header.style';
import NavBarPrimary from './NavBarPrimary';


const Header = () => {
  return (
          <HeaderStyle>
                  <Link to="/">Wallywood</Link>
                  <NavBarPrimary />
          </HeaderStyle>
  );
}

export default Header;
