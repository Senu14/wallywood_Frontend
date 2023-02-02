import { ContainerStyle } from './Components/Styled/Cotainer.style';
import AppRouter from './Components/App/AppRouter/AppRouter';
import Header from './Components/Partials/Header';
import Footer from './Components/Partials/Footer';


function App() {
  return (
      <ContainerStyle maxwidth="1024">
           <Header />
           <AppRouter />
           <Footer />
      </ContainerStyle>
     

      
  
  );
}

export default App;
