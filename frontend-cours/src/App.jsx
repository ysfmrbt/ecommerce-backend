import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Listarticles from './components/articles/Listarticles'
import Listcategories from './components/categories/Listcategories'
import Listscategories from './components/scategories/Listscategories'
import Menu from './components/Menu'
import Insertarticle from './components/articles/Insertarticle'
import Editarticle from './components/articles/Editarticle'
import Listarticlescard from './components/client/Listarticlescard'
import { CartProvider } from "use-shopping-cart";
import Cart from './components/client/shopping/Cart'
function App() {


  return (
    <CartProvider>
      <Router>
        <Menu />
        <Routes>
          <Route path="/articles" element={<Listarticles />} />
          <Route path="/categories" element={<Listcategories />} />
          <Route path="/scategories" element={<Listscategories />} />
          <Route path="/articles/add" element={<Insertarticle />} />
          <Route path="/articles/edit/:id" element={<Editarticle />} />
          <Route path="/client" element={<Listarticlescard />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App
