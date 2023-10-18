import { useLoaderData } from "react-router-dom";

import DisplayBands from "./DisplayBands";
import HotDeals from "../../Components/HotDeals/HotDeals";
import FeatureProduct from "../../Components/FeatureProduct/FeatureProduct";
import Banner from "./Banner";

const Home = () => {
  const brands = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <h2 className="text-center mt-20 text-5xl font-bold text-green-800">
        Brands Category{" "}
      </h2>
      <p className="text-center mt-2 text-green-800">The best brand is characterized by exceptional quality, trustworthiness, and a strong reputation for consistently delivering outstanding products or services.</p>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 mb-20">
        {brands.map((brand) => (
          <DisplayBands key={brand._id} brand={brand}></DisplayBands>
        ))}
      </div>

      <div>
        <h2 className="text-center text-5xl font-bold text-green-800 mt-40">Feature Product</h2>
        <p className="text-center mt-2 text-green-800">The best products stand out with unrivaled quality, reliability, and user satisfaction, setting the benchmark for excellence</p>
        <FeatureProduct></FeatureProduct>
      </div>

      <div className="max-w-7xl mx-auto mb-20">
        <h2 className="text-center text-5xl font-bold text-green-800  mt-40">
          Hot Deals Products
        </h2>
        <p className="text-center mt-2 mb-10 text-green-800">Product discounts offer cost-saving opportunities, making quality items more affordable for budget-conscious shoppers</p>
        <HotDeals></HotDeals>
      </div>
    </div>
  );
};

export default Home;
