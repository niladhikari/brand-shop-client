import { useLoaderData } from "react-router-dom";
import BrandDetailsCard from "./BrandDetailsCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slider from "../Share/Silder/Slider";

const BrandDetails = () => {
  const data = useLoaderData();

  if (!data || data.length === 0) {
    return (
      <div className="max-w-7xl mx-auto">
        <p className="h-[80vh] flex justify-center items-center text-2xl font-semibold">
          There is no Product Available
        </p>
      </div>
    );
  }
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="">
        <Carousel responsive={responsive}>
          {data.map((slide) => (
            <Slider key={slide._id} slide={slide}></Slider>
          ))}
        </Carousel>
      </div>
      <h2 className="text-center text-5xl font-bold mt-20">Our Products</h2>
      <div className="grid md:grid-cols-2 justify-around items-center gap-10 mt-10 mb-20">
        {data.map((product) => (
          <BrandDetailsCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BrandDetails;
