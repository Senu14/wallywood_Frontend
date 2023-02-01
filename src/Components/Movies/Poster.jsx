import React from 'react'
import PosterStyle from './Poster.style';


 const Poster = ({poster}) => {
     console.log(poster);
  return (
    <PosterStyle>
   
     <img src={poster.image} alt="" />
     <p>{poster.name}</p>
     <p>kr.300, 00
          
     </p>
    <button>Læg i Kruv</button>


    </PosterStyle>
  )
}

export default Poster;