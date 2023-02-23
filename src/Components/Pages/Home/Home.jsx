import { ContentWrapper } from '../../App/Elements/ContentWrapper/contentWrapper'
import SlideWrapper from "../../App/Elements/SlideWrapper/SlideWrapper"
import { useAuth } from "../../App/Providers/AuthProvider"
import { useState, useEffect } from 'react'
import axios from 'axios'

const Home = () => {
	const { loginData } = useAuth()
	// const [ data, setData ]= useState ([])
	// //  console.log(data)
	// useEffect(() => {
	// 	const getData = async () => {
	// const genre = "action"
	// 	  const endpoint = `http://localhost:4000/poster/details/1452`
	// 	  const result = await axios.get(endpoint)
	// 	  // console.log(result.data);
	// 	  setData(result.data)
	// 	  console.log(data);
	// 	}
	// 	getData()
	//    }, [])

	

  return (
	<>
		<SlideWrapper />
		<ContentWrapper 
		title="Velkommen"
		
		description="Her finder du nye og gamle film plakater"
		subtitle="Alt i filmplakater">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, necessitatibus dicta, neque dignissimos odio fugiat enim fuga temporibus soluta recusandae itaque illo vitae, totam dolore distinctio praesentium accusantium. Maxime, aspernatur.
			<p>{loginData ? 'Du er logget ind' : 'Du er IKKE logget ind'}</p>
			<p>Hello</p>
		</ContentWrapper>
	</>
  )
}

export default Home;