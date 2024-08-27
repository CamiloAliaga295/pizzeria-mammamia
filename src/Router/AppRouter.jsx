import { Route, Routes } from 'react-router-dom';
import  Products  from '../pages/Products';
import  Cart   from '../pages/Cart';
import  Details  from '../pages/Details'

const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Products />} />
            <Route path='cart' element={<Cart />} />
            <Route path='/:id' element={<Details />} />
        </Routes>
    </>
  )
}

export default AppRouter