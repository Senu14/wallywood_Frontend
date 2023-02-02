import { ContentWrapper } from "../../Components/App/ContentWrapper/contentWrapper"
import SlideWrapper from "../../Components/App/SlideWrapper/SlideWrapper"
import { useFilmData } from "../../Components/App/FilmLisst/FilmList"



const Home = () => {
	const { FilmList } = useFilmData()
	console.log(FilmList);
  return (
	<>
	<SlideWrapper />
	<ContentWrapper 
	
	title="Sidste nyt..."
	
	description=""
	subtitle="Alt i filmplakater">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, necessitatibus dicta, neque dignissimos odio fugiat enim fuga temporibus soluta recusandae itaque illo vitae, totam dolore distinctio praesentium accusantium. Maxime, aspernatur.
	</ContentWrapper>

	</>
	
  )
}

export default Home