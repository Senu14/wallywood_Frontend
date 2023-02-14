import { CartListStyle } from "../../Pages/Cart/CartListStyle";
import { useCartData } from '../../App/Providers/CartProvider';
import { ReactComponent as IconTrashSVG } from '../../../Assets/Svg/icon_trash.svg';
import { useAuth } from "../../App/Providers/AuthProvider";
import axios from "axios";

const CartList = () => {
	const { cartData, setCartData } = useCartData()
	const { loginData } = useAuth()


	let sum = cartData.reduce((prev, current) => {
		return prev + +current.poster.price
	}, 0)

	const handleTrashClick = async (id) => {
		const options = {
			headers: {
				Authorization: `Bearer ${loginData.access_token}`
			}
		}
		const endpoint = `http://localhost:4000/cart/${id}`
		const result = await axios.delete(endpoint, options)
		if(result.data) {
			const endpoint = `http://localhost:4000/cart`
			const newCartData = await axios.get(endpoint, options)
			setCartData(newCartData.data)
		}
	}

	return (
		<CartListStyle>
			<div>
				<div>Produkt</div>
				<div>Antal</div>
				<div>Pris</div>
				<div>Handling</div>
			</div>
		{cartData && cartData.map(item => {
			return (
				<div key={item.id}>
					<div>{item.poster.name}</div>
					<div>{item.quantity}</div>
					<div>{item.poster.price},00 DKK</div>
					<div>
						<IconTrashSVG onClick={() => handleTrashClick(item.id)} />
					</div>
				</div>
			)
		})}
			<div>
				<div>Total</div>
				<div></div>
				<div>{sum},00 DKK</div>
			</div>	
		</CartListStyle>
	);
}

export default CartList;