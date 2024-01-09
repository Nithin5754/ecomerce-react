import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  About,
  Home,
  Cart,
  Checkout,
  Error,
  PrivateRoute,
  SingleProduct,
  Products,
} from "./pages/index";

import { MainLayout } from "./Layouts/index";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />

          <Route path="/products">
            <Route index element={<Products />} />
            <Route path=":id" element={<SingleProduct />} />
          </Route>

          <Route path="checkout" element={<Checkout/>}/>
       
        <Route path="*" element={<Error/>}/>

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
