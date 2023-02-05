import axios from 'axios';
import { useEffect, useState } from 'react';
import PosterStyle from './Poster.style';
import { Link, useParams, } from 'react-router-dom';


 const Poster = ({poster}) => {
    
  return (
    <PosterStyle>

      <div>Filter navigation</div>
      <div>Plakatiste</div>
   
     <img src={poster.image} alt="" />
     <p>{poster.name}</p>
     {/* <p>{poster.genre}</p> */}
     <p>kr.300, 00
          
     </p>
    <button>Læg i Kruv</button>
    
    

    </PosterStyle>
  )
}


const GenreList = () => {
  const [ data, setData ] = useState([])

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get('http://localhost:4000/genre')
      setData(result.data);
    }
    getData()
  }, [setData]);

  return (
    <ul>
      {data && data.map(genre => {
        return (
          <li key={genre.id}>
            <Link to={`/posters/${genre.slug}`}>{genre.title}</Link>
            
          </li>
        )
      })}
    </ul>
  )  
}

const PosterList = () => {
  const [ data, setData ] = useState([])
  const { slug } = useParams();

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(`http://localhost:4000/poster/${slug}`)
      setData(result.data);
    }
    getData()
  }, [slug]);

  return (
    <ul>
      {data && data.map(poster => {
        return (
          <li key={poster.id}>
            <Link to={`/posters/${slug}/${poster.id}`}>{poster.name}</Link>
          </li>
        )
      })}
    </ul>
  )

}

const PosterDetails = () => {
  const [ data, setData ] = useState([])
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(`http://localhost:4000/poster/${id}`)
      setData(result.data);
    }
    getData()
  }, [id]);

  return (
    <ul>
          <li>
            Plakatdetaljer            
          </li>
    </ul>
  )

}


export { Poster, PosterList, PosterDetails }