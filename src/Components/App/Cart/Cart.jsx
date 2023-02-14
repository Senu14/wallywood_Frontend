import CartList from '../../Pages/Cart/CartList';
import { ContentWrapper } from '../Elements/ContentWrapper/contentWrapper'

export const Cart = () => {
	return (
		<ContentWrapper title="Indkøbskurv">
			<CartList />
		</ContentWrapper>
	);
}

