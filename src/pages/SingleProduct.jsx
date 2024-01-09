
import { useParams } from "react-router-dom"
import { PageHero } from "../components";
const SingleProduct = () => {
  let {id}=useParams();
  return (
    <main>
      <PageHero title={id}/>
      <h3>SingleProduct </h3>
      <h1>{id}</h1>
    </main>
  )
}
export default SingleProduct