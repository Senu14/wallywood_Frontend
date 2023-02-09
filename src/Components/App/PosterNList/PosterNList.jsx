import axios from 'axios'
import { createContext, useContext, useState, useEffect} from 'react'
import Loin from '../../../Pages/Login/Login'

const PosterContext = createContext()

const PosterProvider = ({children}) => {
      const [PosterList, setPosterList] = useState([])

      useEffect(() =>{
          if(sessionStorage.getItem ('PosterList')){
               setPosterList(JSON.parse(sessionStorage.getItem ('PosterList')))
          }else{
               const getData = async () =>{
                    const result = await axios.get('http://localhost:4000/poster')
                    sessionStorage.setItem('PosterList', JSON.stringify(result.data));
                    setPosterList(result.data)
          
               }
               getData()
               
          }
         
      }, [children]);

// Here we send variable and functions
     return (
          <PosterContext.Provider value={{PosterList, setPosterList}}>
               {children}
               </PosterContext.Provider>
               )
}

const usePosterData = () => useContext(PosterContext)






export  { PosterProvider, usePosterData };
