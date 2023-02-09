import { ContentWrapper } from "../../Components/App/ContentWrapper/contentWrapper";
import { usePosterData } from "../../Components/App/PosterNList/PosterNList";
import SlideWrapper from "../../Components/App/SlideWrapper/SlideWrapper";
import { useAuth } from "../../Components/Providers/AuthProvider";




const Home = () => {
   const { loginData } = useAuth()
   console.log(loginData)

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
				<p>{loginData ? 'Du er logget ind' : 'Du er ikke logget ind'}</p>
	          </ContentWrapper>

	</>
	
  )
}

export default Home