import React from "react";
import { Error, Loading, Product } from "./index";
import styled from "styled-components";
import { useGlobalProductProvider } from "../context/product_context";


const FeaturedProducts = () => {
  const {
    product_loading: loading,
    product_error: error,
    features_product: featured,
  } = useGlobalProductProvider();
  
  if(loading){
    return <Loading/>
  }
  if(error){
    return <Error/>
  }

  return <Wrapper>
    <div className="section">
        <div className="title">
           <h2>Featured Product</h2>
           <div className="underline"></div>
        </div>
   <div className="section-center featured">
   {
          featured.slice(0,3).map((product)=>{
            return <Product key={product.id} {...product}/>
          })
        }
   </div>
    </div>

  </Wrapper>;
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;
export default FeaturedProducts;
