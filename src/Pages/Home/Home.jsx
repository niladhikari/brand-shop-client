import { useLoaderData } from "react-router-dom";

import DisplayBands from "./DisplayBands";
import HotDeals from "../../Components/HotDeals/HotDeals";
import FeatureProduct from "../../Components/FeatureProduct/FeatureProduct";

const Home = () => {
  const brands = useLoaderData();
  return (
    <div>
    
      <h2 className="text-center mt-20 text-4xl font-bold text-green-800">
        Brands Category{" "}
      </h2>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 mb-20">
        {brands.map((brand) => (
          <DisplayBands key={brand._id} brand={brand}></DisplayBands>
        ))}
      </div>

      <div>
        <h2 className="text-center text-4xl font-bold text-green-800 mb-10 mt-40">Feature Product</h2>
        <FeatureProduct></FeatureProduct>
      </div>

      <div className="max-w-7xl mx-auto mb-20">
        <h2 className="text-center text-4xl font-bold text-green-800 mb-10 mt-40">
          Hot Deals Products
        </h2>
        <HotDeals></HotDeals>
      </div>
    </div>
  );
};

export default Home;
