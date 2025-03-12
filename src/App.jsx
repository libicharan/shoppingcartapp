import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import ListProducts from './components/Products/Listproducts'
import Categories from './components/Products/category'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import NotFound from './components/notfound'
import ViewProduct from './components/Products/viewproduct'
import AddProducts from './components/Products/addproducts'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header />

        <div className="banner">
          <Categories />
          <Routes>
            <Route path='/' element={<ListProducts />} />
            <Route path='/Login' element={<Login />} />
            <Route path="/view-product/:pdtId" element={<ViewProduct /> } />
            <Route path='/add-products' element={<AddProducts />} />
            <Route path='*' element={<NotFound />} />
          </Routes>

          <div className="clearfix"></div>
        </div>
      </BrowserRouter>


    </>
  )
}

export default App
