import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddCart from './Components/AddCart';
import SearchCart from './Components/SearchCart';
import DeleteCart from './Components/DeleteCart';
import ViewAll from './Components/ViewAll';
import ViewProduct from './Components/ViewProduct';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddCart/>}/>
        <Route path="/search" element={<SearchCart/>}/>
        <Route path="/delete" element={<DeleteCart/>}/>
        <Route path="/view" element={<ViewAll/>}/>
        <Route path="/product" element={<ViewProduct/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
