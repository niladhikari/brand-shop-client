import { useLoaderData } from "react-router-dom";
import BrandDetailsCard from "./BrandDetailsCard";
import { useEffect, useState } from "react";

const BrandDetails = () => {
  const data = useLoaderData();
  const [service, setService] = useState(useLoaderData);
  const [noFound, setNoFound] = useState(false);

  useEffect(() => {
    if (data) {
      setService(data);
    } else {
      setNoFound("No Data Found");
    }
  }, [data]);

  return (
    
    <div className="max-w-7xl mx-auto">
      <div >
        <div className="mb-10">
          {noFound ? (
            <p className="h-[80vh] flex justify-center items-center text-2xl font-semibold">
              {noFound}
            </p>
          ) : (
            <div>
              <div className="grid md:grid-cols-2 justify-around items-center gap-10 mt-10 mb-20">
                {service.map((product) => (
                  <BrandDetailsCard key={product.id} product={data}></BrandDetailsCard>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrandDetails;
