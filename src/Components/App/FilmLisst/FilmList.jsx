import axios from 'axios'
import { createContext, useContext, useState, useEffect} from 'react'
const FilmContext = createContext()

const FilmProvider = ({Children}) =>{
      const[FilmList, setFilmList] = useState([])

      useEffect(() =>{
          if(sessionStorage.getItem ('FilmList')){
               setFilmList(JSON.parse(sessionStorage.getItem ('FilmList')))
          }else{
               const getData = async () =>{
                    const result = await axios.get('http://localhost:4000/poster')
                    sessionStorage.setItem('FilmList', JSON.stringify (result.data));
                    setFilmList(result.data)
               }
               getData()
          }
         
      }, [Children]);

// Here we send variable and functions
     return (
          <FilmContext.Provider value={{FilmList, setFilmList}}>
               {Children}
               </FilmContext.Provider>
               )
}

const useFilmData = () => useContext(FilmContext)






export  {FilmProvider, useFilmData };