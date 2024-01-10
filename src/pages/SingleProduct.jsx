
import { useParams,useNavigate,Link } from "react-router-dom"
import { Error,Loading,AddToCart,ProductImages,Stars,PageHero } from "../components/index";
import { useGlobalProductProvider } from "../context/product_context";
import { useEffect } from "react";
import{ single_product_url as url }from '../utils/constant'
import {formatPrice} from '../utils/Helpers'
import styled from "styled-components";

const SingleProduct = () => {
  let {id}=useParams();
  const {single_product_loading:loading,single_product_error:error,single_product:product,singleFetchData}=useGlobalProductProvider()




  useEffect(()=>{
singleFetchData(`${url}${id}`)
  },[id])

  const navigate=useNavigate()

const timeOutError=useEffect(()=>{
    if(error){
      setTimeout(()=>{
        navigate('/')
       },3000)
       return clearTimeout(timeOutError)
    }
  },[error])


if(loading) return <Loading/>
if(error) return <Error/>
const {stock,price,colors,description,reviews,shipping,stars,images,name,id:SKU,company}=product 
let heroName='product'
  return (
    <Wrapper>
      <PageHero title={name} product='products'/>
      <div className="section section-center page">
        <Link to={'/products'} className="btn">back to product</Link>
        <div className="product_center">
           <ProductImages/>
           <div className="section centent">
              <h2>{name}</h2>
              <h5 className="price">
                {formatPrice(price)}
              </h5>
              <p className="info">
<span>Available :</span>

              {
                stock>0 ?'In stock':'Out of Stock'
              }
                 </p>
              <p className="info">
                <span>SKU :</span>
              {SKU}
              </p>

              <p className="info">
                <span>brand :</span>
              {company}
              </p>
           <hr/>
           {stock>0 && <AddToCart/>}
           </div>
        </div>
        
      </div>
    </Wrapper>
  )
}


const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleProduct