import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './pages/homepage';
import ContactUsPage from './pages/contactpage';
import AboutUsPage from './pages/aboutuspage';
import ServicesPage from './pages/servicepage';

function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
            <Route path='/' element = {<HomePage/>}  />
            <Route path='/contact' element = {<ContactUsPage/>}  />
            <Route path='/aboutus' element = {<AboutUsPage/>}  />
            <Route path='/services' element = {<ServicesPage/>}  />
        </Routes>
     </BrowserRouter>
    
    </>
  );
}

export default App;
