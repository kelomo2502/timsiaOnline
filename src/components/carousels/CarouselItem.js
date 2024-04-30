import { Link } from "react-router-dom";
import "./Carousel.scss";
import { shortenString } from "../../utils";
const CarouselItem = ({ url, name, price, description }) => {
  return (
    <article className="carouselItem">
      <Link to="/product-details">
        <img src={url} alt={name} className="product--image" />

        <p className="price">${price}</p>
        <h4>{shortenString(name, 18)}</h4>
        <p className="--mb">{shortenString(description, 25)}</p>
      </Link>
      <button className="--btn --btn-primary --btn-block">Add To Cart</button>
    </article>
  );
};

export default CarouselItem;
