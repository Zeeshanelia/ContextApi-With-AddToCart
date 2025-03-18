import './App.css';
import { Header } from './Component/Header/Header';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Home } from './Page/Home';
import { Cart } from './Page/Cart';
import { Detail } from './Page/Detail';
function App() {
  return (
    <BrowserRouter> 
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/product/:id" element={<Detail/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
