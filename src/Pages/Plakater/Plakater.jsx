import { ContentWrapper } from '../../Components/App/ContentWrapper/contentWrapper';
import  Filter  from '../../Components/Movies/Filter';
import FilterWrapperStyle from '../../Components/Movies/FiterWrapperStyle.js';
import { Outlet } from 'react-router-dom';


const Plakater = () =>{
     

     return(
          <ContentWrapper 
          title='Plakater'
          description='Se vores udvalg af plakater'>
          <FilterWrapperStyle>

               <Filter>
                    
               </Filter>
               
               <Outlet />

          </FilterWrapperStyle>
          

          </ContentWrapper>
     )
}


export default Plakater;





