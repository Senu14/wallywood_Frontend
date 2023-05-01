import { useEffect, useState } from "react"
import axios from "axios"
import { Link, useParams, useOutletContext } from "react-router-dom";
import { PosterListStyle } from "./PosterList.style"
import AddToCartButton from "../Cart/AddToCartButton"
import SorterComponant from "./SorterComponant"

export const PosterList = () => {
  const [data, setData] = useState([])
  const { genre } = useParams()
 
   const { min, max } = useOutletContext();


  const [sort, setSort] = useState("")
  const SortHandler = (e) => {
    setSort(e.target.value)
    console.log(e.target.value);


  }

  useEffect(() => {
    const getData = async () => {
      let endpoint 
      
      if (genre) {endpoint = `http://localhost:4000/poster/list/${genre}${sort}`
    }else{
      endpoint= `http://localhost:4000/poster/list${sort}`
    }
     
      const result = await axios.get(endpoint)
      // console.log(result.data);
      setData(result.data)
    }
    getData()
  }, [genre,sort])

  const filterData = data
    .filter((item) => item.price > min)
    .filter((item) => item.price < max);

  return (
    <>
    <SorterComponant SortHandler = {SortHandler} sort = { sort} />
    <PosterListStyle>
      {data &&
        filterData.map((poster) => {
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
    </>
  )
}