import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddedItems from './Pages/AddedItems/AddedItems';
import AddProduct from './Pages/AddProduct/AddProduct';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ProductList from './Pages/ProductList/ProductList';
import Quantity from './Pages/Quantity/Quantity';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
         <Route path='/productList' element={<RequireAuth>
          <ProductList />
        </RequireAuth>} />
        <Route path='/editProduct/:id' element={<RequireAuth>
          <Quantity />
        </RequireAuth>} />
        <Route path='/items' element={<RequireAuth>
          <AddedItems />
        </RequireAuth>} />
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/productAdd" element={<AddProduct></AddProduct>}></Route>
      
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
