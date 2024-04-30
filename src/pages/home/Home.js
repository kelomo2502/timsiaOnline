import Slider from "../../components/slider/Slider";
import HomeInfoBox from "./HomeInfoBox";
import "./Home.scss";
import { productData } from "../../components/carousels/data";
import CarouselItem from "../../components/carousels/CarouselItem";
import ProductCarousel from "../../components/carousels/ProductCarousel";
import ProductCategory from "./ProductCategory";
import FooterLinks from "../../components/footer/FooterLinks";

const PageHeading = ({ heading, buttonText }) => {
  return (
    <div className="--flex-between">
      <h2 className="--fw-thin">{heading}</h2>
      <button className="--btn">{buttonText}</button>
    </div>
  );
};

const Home = () => {
  const allProducts = productData.map((item) => {
    return (
      <div key={item.id} className="--flex-center">
        <CarouselItem
          name={item.name}
          url={item.imageurl}
          description={item.description}
          price={item.price}
        />
      </div>
    );
  });

  return (
    <main>
      <Slider />
      <section>
        <article className="container">
          <HomeInfoBox />
          <PageHeading heading="Latest Products" buttonText="Shop Now>>>" />
          <div className="--hr"></div>
          <ProductCarousel products={allProducts} />
        </article>
      </section>
      <section className="--bg-grey">
        <article className="container">
          <h3>Categories</h3>
          <div className="--hr"></div>
          <ProductCategory />
        </article>
      </section>
      <section>
        <article className="container">
          <PageHeading heading="Mobile Phones" buttonText="Shop Now>>>" />
          <div className="--hr"></div>
          <ProductCarousel products={allProducts} />
        </article>
      </section>
      <FooterLinks />
    </main>
  );
};

export default Home;
