import styled from "styled-components"
import { PageHero } from "../components/index"
import aboutImg from '../assets/hero-bcg.jpeg'




const AboutPages = () => {
  return (
   <main>
    <PageHero title={'about'}/>
     <Wrapper className="page section-center">
<img src={aboutImg} alt='about-img' />
<article>
    <div className="title">
        <h2> our story</h2>
        <div className="underline"></div>
    </div>
    <p>
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit dolorum voluptate, sequi nemo eaque animi qui, exercitationem atque magnam quas, impedit suscipit maxime dignissimos? Similique, quos asperiores. Odio, cumque quaerat.
    </p>
</article>
</Wrapper>
   </main>
  )
}
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`

export default AboutPages