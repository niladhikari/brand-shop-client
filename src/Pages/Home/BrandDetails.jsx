import { useLoaderData } from "react-router-dom";
import BrandDetailsCard from "./BrandDetailsCard";


const BrandDetails = () => {
  const data = useLoaderData();


  if (!data || data.length === 0) {
    return (
      <div className="max-w-7xl mx-auto">
        <p className="h-[80vh] flex justify-center items-center text-2xl font-semibold">
          No Data Found
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 justify-around items-center gap-10 mt-10 mb-20">

        {
            data.map(product=> <BrandDetailsCard key={product.id} product={product} />)
        }
      </div>
    </div>
  );
};

export default BrandDetails;
