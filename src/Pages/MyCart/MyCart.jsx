import { useEffect, useState } from "react";
import useAuth from "../../Hook/useAuth";
import Swal from "sweetalert2";

const MyCart = () => {
  const { user } = useAuth();
  const [myProduct, setMyProduct] = useState([]);

  // const handleDelete = (id) => {
  //   fetch(`https://brand-shop-server-ifjze3vgp-hridoys-projects.vercel.app/cards/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // };

    const handleDelete = (id) => {
    console.log(id);
    fetch(`https://brand-shop-server-ifjze3vgp-hridoys-projects.vercel.app/cards/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status === 200) {
      
          console.log("Item deleted successfully.");
        
          setMyProduct(myProduct.filter((item) => item._id !== id));
            Swal.fire({
              title: "Success!",
              text: "Product Delete Successfully",
              icon: "success",
              confirmButtonText: "Cool",
            });

        } else {
   
          console.error("Error deleting item.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetch(`https://brand-shop-server-ifjze3vgp-hridoys-projects.vercel.app/cards/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyProduct(data));
  }, [user]);
 

  if (!myProduct || myProduct.length === 0) {
    return (
      <div className="max-w-7xl mx-auto">
        <p className="h-[80vh] flex justify-center items-center text-2xl font-semibold">
          No Data Found
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-20 items-center justify-center">
      {myProduct.map((product) => (
        <div className="" key={product._id}>
          <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
              <img
                className="w-full h-72"
                src={product.photo}
                alt="ui/ux review check"
              />
            </div>
            <div className="p-6">
              <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 mt-1">
                {product.brandName}
              </h4>
              <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 mt-2">
                {product.name}
              </h4>
              <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
                Price : {product.price}
              </p>

              <div className="flex justify-center mt-6">
                <button onClick={()=> handleDelete(product._id)}
                className="p-3 bg-red-500 rounded-md font-semibold text-white">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyCart;