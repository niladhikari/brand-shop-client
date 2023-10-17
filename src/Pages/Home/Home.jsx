import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import DisplayBands from "./DisplayBands";

const Home = () => {
  const brands = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <h2 className="text-center mt-20 text-4xl font-bold text-green-800">Brands Category </h2>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {
            brands.map(brand=> <DisplayBands 
                key={brand._id}
                brand={brand}
            ></DisplayBands>)
        }
      </div>
    </div>
  );
};

export default Home;
