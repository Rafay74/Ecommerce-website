import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar } from './components/navbar'
import { Cart } from './pages/cart'
import { NotFound } from './pages/not-found'
import { Product } from './pages/product'
import { Products } from './pages/products'

const router = createBrowserRouter([
  { path: "/", element: <Products /> },
  { path: "/cart", element: <Cart /> },
  { path: "/product/productId", element: <Product /> },
  { path: "/*", element: <NotFound /> },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <Navbar />
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
