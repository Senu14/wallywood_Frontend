import React from 'react'
import PosterWrapperStyel from '../App/PosterWrapper/PosterWrapper.style'
import Poster from './Poster'
import { useState, useEffect } from 'react'
import axios from 'axios'

export const PostersList = () => {
     const [ movies, setMovies] = useState ([])
     const [posters, setPosters]= useState([])

     useEffect(()=>{
          const fatchMovies = async () =>{
                axios.get("http://localhost:4000/poster").then( 
                    response =>{
                      setMovies(response.data)
                      let items=movies.slice(0,21)
                      setPosters(items)
                      console.log(posters);
                    }
               ).catch(err =>{
                    console.log(err);

               })   
          }

          fatchMovies()
     }, []) 

   
      
           
  return (
    <PosterWrapperStyel>
     <h1>posterList</h1>
     {posters.map((poster,index) => {
              return(
                   <Poster poster={poster}key={index} />
              )
    
            })}
    </PosterWrapperStyel>
  )
}
