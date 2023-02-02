import axios from 'axios';
import { useEffect, useState } from 'react';
import PosterStyle from './Poster.style';


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


const GenreList = () =>{

  const [ data, setData ] = useState([])

  useEffect(() =>{
    const getData = async () =>{
      const result = await axios.get('http://localhost:4000/genre')
      setData(result.data);
    }

    getData()

  }, []);

  return(
    <ul>
      {data && data.map(genre =>{
        return(
          <li key={genre.id}>
            <Link to={`/posters/${genre.slug `}></Link>

          </li>
        )
      })}
    </ul>
  )
}

export default Poster;


