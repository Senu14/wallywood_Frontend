import { useEffect, useState } from "react"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
import { PosterListStyle } from "./PosterList.style"
import AddToCartButton from "../Cart/AddToCartButton"

export const PosterList = () => {
  const [data, setData] = useState([])
  const { genre } = useParams()
  console.log(genre);

  useEffect(() => {
    const getData = async () => {
      let endpoint 
      
      if (genre) {endpoint = `http://localhost:4000/poster/list/${genre}`
    }else{
      endpoint= `http://localhost:4000/poster/list`
    }
     
      const result = await axios.get(endpoint)
      // console.log(result.data);
      setData(result.data)
    }
    getData()
  }, [genre])

  return (
    <PosterListStyle>
      {data &&
        data.map((poster) => {
          return (
            <div key={poster.id}>
              <figure>
                <Link to={`/posters/details/${poster.slug}`}>
                <img src={poster.image} alt="" />
                </Link>
              </figure>
              <p>
                <Link to={`/posters/details/${poster.slug}`}>
                  {poster.name}
                </Link>
              </p>
              <p>DKK {poster.price},00</p>
           
              <p>
                <AddToCartButton id={poster.id}>Læg i kurv</AddToCartButton>
              </p>
            </div>
          )
      }
    )
  }
    </PosterListStyle>
  )
}