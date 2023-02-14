import { CartIconStyle } from "../../Pages/Cart/CartIconStyle";
import { ReactComponent as IconCartSVG } from '../../../Assets/Svg/icon_cart.svg'
import { useCartData } from "../../App/Providers/CartProvider";
import { Link } from "react-router-dom";

const CartIcon = () => {
	const { cartData } = useCartData()

	return (
		<CartIconStyle>
			<Link to="/cart">
				<IconCartSVG />
			</Link>
			<p>
			<Link to="/cart">
				Du har {cartData.length} varer i kurven
			</Link>	
			</p>
		</CartIconStyle>
	);
}

export default CartIcon;