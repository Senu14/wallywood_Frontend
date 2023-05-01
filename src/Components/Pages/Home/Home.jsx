import { ContentWrapper } from '../../App/Elements/ContentWrapper/contentWrapper'
import SlideWrapper from "../../App/Elements/SlideWrapper/SlideWrapper"
import { Link } from 'react-router-dom'
import { useAuth } from "../../App/Providers/AuthProvider"
import { useState, useEffect } from 'react'
import AddToCartButton from '../Cart/AddToCartButton'
import { HomeStyle } from './Home.style'
import axios from 'axios'

const Home = () => {
	const { loginData } = useAuth()
	const [ data, setData ]= useState ([])
	//  console.log(data)
	useEffect(() => {
		const getData = async () => {
	const genre = "action"
		  const endpoint = `http://localhost:4000/poster/details/cold-war`
		  const endpoint2=`http://localhost:4000/poster/details/drive`
		  const result2 = await axios.get(endpoint2)
		  const result = await axios.get(endpoint)
		  // console.log(result.data);
		  setData([result.data, result2.data])

		  console.log(data);
		}
		getData()
	   }, [])

	

  return (
    <>
      <SlideWrapper />
      <ContentWrapper
        title="Velkommen"
        description="Her finder du nye og gamle film plakater"
        subtitle="Alt i filmplakater"
      >
        <HomeStyle>
          {data &&
            data.map((poster) => {
              return (
                <div key={poster.id}>
                  <figure>
                    <Link to={`/posters/details/${poster.slug}`}>
                      <img src={poster.image} alt="" />
                    </Link>
                  </figure>
                  <div className="container">
                    <p>
                      <Link to={`/posters/details/${poster.slug}`}>
                        {poster.name}
                      </Link>
                    </p>
                    <div
                      className="description"
                      dangerouslySetInnerHTML={{ __html: poster.description }}
                    ></div>

                    <p>
                      <AddToCartButton id={poster.id}>
                        Læg i kurv
                      </AddToCartButton>
                    </p>
                  </div>
                </div>
              );
            })}
        </HomeStyle>
      </ContentWrapper>
    </>
  );
}

export default Home;