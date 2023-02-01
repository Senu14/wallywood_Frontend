import { ContentWrapper } from '../../Components/App/ContentWrapper/contentWrapper';
import PosterWrapperStyel from '../../Components/App/PosterWrapper/PosterWrapper.style';
import axios from 'axios';
import { useEffect, useState } from 'react';
import  Poster  from '../../Components/Movies/Poster';


const Plakater = () =>{
     const [ movies, setMovies] = useState ([])
     const [posters, setPosters]= useState([])
     useEffect(()=>{
          const fatchMovies = async () =>{
                axios.get("http://localhost:4000/poster").then( 
                    response =>{
                      setMovies(response.data)
                    }
               ).catch(err =>{
                    console.log(err);

               })   
          }

          fatchMovies()
     }, []) 

     useEffect(() =>{
      
      
      let items=movies.slice(0,21).map((poster,index) => {
          return(
               <Poster poster={poster}key={index} />
          )

        })
        setPosters (items)
     }, [movies])
     return(
          <ContentWrapper 
          title='Plakater'
          description='Se vores udvalg af plakater'
          >
               <PosterWrapperStyel>
               {
               posters 
               }
               </PosterWrapperStyel>
          

          </ContentWrapper>
     )
}


export default Plakater;





