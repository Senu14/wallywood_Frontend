import React,{ useEffect, useState } from 'react'
import axios from 'axios';
import FilterStyle from './FilterStyle'

 const Filter = () => {
     const [genre, setGenre] = useState([])
     useEffect(()=>{
          const fatchGenre = async () =>{
                axios.get("http://localhost:4000/genre").then( 
                    response =>{
                      setGenre(response.data)
                    }
               ).catch(err =>{
                    console.log(err);

               })   
          }

          fatchGenre()
     }, []) 


  return (
     <FilterStyle>

        <h4>Filter</h4>
        <h5>Genre</h5>

        <ul>
         {
          genre.map((item, index)=>{
               return(
                    <li key={item.id}>{item.title}</li>
               )

          })
         }
          
        </ul>

        <h5>Priseområde</h5>

        <div>
         <input type="number" name='min' />
         <span>-</span>
         <input type="number" name='max' />
         <span>Kr</span>
        </div>
    </FilterStyle >
  )
}


export default Filter;