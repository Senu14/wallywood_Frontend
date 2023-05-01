/**
 * Udskriver billede på forside
 * Kan skiftes ud med et slideshow
 */
import { SlideWrapperStyle } from './SlideWrapperStyel';

export default function SlideWrapper() {
  return (
	<SlideWrapperStyle>
		<img src={require('../../../../Assets/Images/curtain.jpg')} alt="Wallywood" />
		
	</SlideWrapperStyle>
  )
}



