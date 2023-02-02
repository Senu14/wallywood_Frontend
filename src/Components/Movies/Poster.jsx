import PosterStyle from './Poster.style';


 const Poster = ({poster}) => {
    
  return (
    <PosterStyle>

      
   
     <img src={poster.image} alt="" />
     <p>{poster.name}</p>
     {/* <p>{poster.genre}</p> */}
     <p>kr.300, 00
          
     </p>
    <button>Læg i Kruv</button>
    
    

    </PosterStyle>
  )
}

export default Poster;


