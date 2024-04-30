import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "./data";

const ProductCarousel = ({ products }) => {
  return (
    <article>
      <Carousel
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        customTransition="all 500ms ease"
        transitionDuration={1000}
      >
        {products}
      </Carousel>
    </article>
  );
};

export default ProductCarousel;
