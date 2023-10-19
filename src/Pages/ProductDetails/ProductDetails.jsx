import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const { user } = useAuth();
  const productDetails = useLoaderData();
  const { _id, name, brandName, details, photo, price } = productDetails;

  const productInfo = {
    _id,
    name,
    brandName,
    photo,
    price,
    email: user.email,
  };

  const handleAddProduct = () => {
    console.log(productInfo);

    fetch("http://localhost:5000/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Product Add to Cart Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="max-w-7xl mx-auto my-20">
      <div className="px-3 md:px-0 text-purple-500">
        <div>
          <img src={photo} alt="" className="w-full md:h-[600px]" />
        </div>
        <div className="flex items-center justify-around mt-2">
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="font-bold text-red-600 text-xl">{price}</p>
          {user && (
            <Link>
              <button
                onClick={handleAddProduct}
                className="bg-green-300 p-3 rounded-md font-semibold text-black"
              >
                Add To Cart
              </button>
            </Link>
          )}
        </div>
        <p className="mt-4 text-lg lg:font-semibold md:px-10">{details}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
