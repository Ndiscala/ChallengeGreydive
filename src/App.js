import './App.css';
import Itemcontainer from './componentes/main/Itemcontainer';
import Navbar from '../src/componentes/header/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './componentes/footer/Footer';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        
      <Routes>
        <Route 
            path='/' 
            element={<Itemcontainer />}  
          />  
          <Route 
            path='/cliente/:clienteName' 
            element={<Itemcontainer/>}  
          />         
      </Routes>

        <Footer />
      
      </div>
    </BrowserRouter>
  );
}

export default App;
