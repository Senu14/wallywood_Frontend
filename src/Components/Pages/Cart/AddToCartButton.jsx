import axios from 'axios';
import { useAuth } from '../../App/Providers/AuthProvider';
import { AddToCartButtonStyle } from "./AddToCartButton.style";
import { useCartData } from "../../App/Providers/CartProvider";

const AddToCartButton = props => {
	const { loginData } = useAuth() // This is our coustom hook Auth()
	const { cartData, setCartData } = useCartData()


	const submitToCart = async () => {
		console.log(cartData)
		const options = {
			headers: {
				Authorization: `Bearer ${loginData.access_token}`
			}
		}

		const formdata = new URLSearchParams()
		formdata.append('poster_id', props.id)
		formdata.append('quantity', 1)
		const endpoint = `http://localhost:4000/cart`
		const result = await axios.post(endpoint, formdata, options)
		if(result.data) {
			const newCartData = await axios.get(endpoint, options)
			setCartData(newCartData.data)
		}
		console.log(result)
	}

	return cartData.find(x => x.poster_id === props.id) ? 
	(
		<>Dette produkt ligger allerede i kurven</>
	) : 
	(
		<AddToCartButtonStyle onClick={submitToCart}>
			{props.children}
		</AddToCartButtonStyle>
	);
}

export default AddToCartButton;