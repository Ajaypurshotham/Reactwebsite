import Headers from './components/Headers';
import Home from './components/Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartDetails from './components/CartDetails';
import { Route, Routes } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import cancel from './components/cancel';
import success from './components/success';

function App() {
  return (
  <>
     <Headers/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<CartDetails/>}/>
      <Route path='/success' element={<success/>}/>
      <Route path='/cancel' element={<cancel/>}/>
     </Routes>
     <Toaster />
     <Home/>
     </>
  );
}

export default App;
