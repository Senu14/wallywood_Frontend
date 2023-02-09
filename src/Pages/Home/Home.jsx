import { ContentWrapper } from "../../Components/App/ContentWrapper/contentWrapper";
import { usePosterData } from "../../Components/App/PosterNList/PosterNList";
import SlideWrapper from "../../Components/App/SlideWrapper/SlideWrapper";




const Home = () => {
	const { PosterList } = usePosterData()
	console.log(PosterList);
  return (
	<>
	          <SlideWrapper />
	          <ContentWrapper 
	          title="Sidste nyt..."
	          description=""
	          subtitle="Alt i Posterplakater">
		             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, necessitatibus dicta, neque dignissimos odio fugiat enim fuga temporibus soluta recusandae itaque illo vitae, totam dolore distinctio praesentium accusantium. Maxime, aspernatur.
	          </ContentWrapper>

	</>
	
  )
}

export default Home