import { Link, useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const productDetails = useLoaderData();
  const { _id, name, details, photo, price } =
    productDetails;
  return (
    <div className="max-w-7xl mx-auto mb-20">
      <div className="px-3 md:px-0">
        <div>
          <img src={photo} alt="" className="w-full md:h-[600px]" />
        </div>
        <div className="flex items-center justify-around mt-2">
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="font-bold text-red-600">{price}</p>
          <Link>
            <button className="bg-green-300 p-3 rounded-md font-semibold">
              Add To Cart
            </button>
          </Link>
        </div>
       <p className="mt-4 text-lg font-semibold px-10">{details}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
