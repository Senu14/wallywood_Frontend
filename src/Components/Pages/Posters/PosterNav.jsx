import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom";
import { PosterNavsStyle } from "./PosterNav.style";
import ReactPaginate from "react-paginate";

export const PosterNav = () => {
  const [ data, setData ] = useState([])

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get('http://localhost:4000/genre?sortkey=title') //sorting by title (?sortkey=title)
      
      setData(result.data);
    }
    getData()
  }, [setData]);

  return (
    <PosterNavsStyle>
      <ul>
      {data && data.map(genre => {
        return (
          <li key={genre.id} >
            <Link to={`/posters/${genre.slug}`}>{genre.title}</Link>
          </li>
        )
      })}
      </ul>
    </PosterNavsStyle>
  )  
}
