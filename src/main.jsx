import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'; 
import App from './App.jsx'
import './index.css'
// import Componente2 from './components/componente2.jsx'
// import Componente1 from './components/componente1.jsx'
// import Componente3 from './components/componente3.jsx'
// import Tailblocks from './tailblocks.jsx'
// import Header from './header.jsx'
// import Footer from './footer.jsx'
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <BrowserRouter>
           
        <App />
      </BrowserRouter>
{/* <Componente2>
      {/* <button>hola1</button> 
   <button>hola2</button> 
    <h2>Hola</h2>
    <Componente1 nombre='el perro consentido :)'apellido='valentina, usted no sabe quien soy?'/>
   <Componente3 programa='ADSO' competencia='Frontend'/> */}
      {/* <Header />
      <Tailblocks />
      <Footer /> </Componente2> */}
      
    

  </StrictMode>,
)

    