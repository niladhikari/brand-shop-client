import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const updateData = useLoaderData();
  const { _id, brandName, details, name, photo, price, rating, type } =
    updateData;
  console.log(updateData);

  useEffect(() => {
    setSelectedBrand(brandName);
  }, []);

  const handleAddProduct = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const brandName = selectedBrand;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const myProducts = {
      name,
      brandName,
      type,
      price,
      rating,
      details,
      photo,
    };
    console.log(myProducts);

    fetch(`https://brand-shop-server-ifjze3vgp-hridoys-projects.vercel.app/product/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myProducts),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="bg-[#F4F3F0]">
      <div className=" p-10 md:p-24 max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-5">
          Update a Product
        </h2>
        <form onSubmit={handleAddProduct}>
          <div className="md:flex mb-8">
            <div className="form-control  md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold">Product Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Product Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4 mt-8 md:mt-0">
              <label className="label">
                <span className="label-text font-semibold">Brand Name</span>
              </label>
              <label className="input-group">
                <select
                  className="select select-bordered w-full"
                  value={selectedBrand}
                  defaultValue={brandName}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                >
                  <option disabled value="">
                    Select Brand
                  </option>
                  <option value="Apple">Apple</option>
                  <option value="Samsung">Samsung</option>
                  <option value="Sony">Sony</option>
                  <option value="Google">Google</option>
                  <option value="HP">HP</option>
                  <option value="Huawei">Huawei</option>
                </select>
              </label>
            </div>
          </div>

          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold">Product Type </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={type}
                  name="type"
                  placeholder="Product Type"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4 mt-8 md:mt-0">
              <label className="label">
                <span className="label-text font-semibold">Product Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={price}
                  name="price"
                  placeholder="Product Price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-semibold">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={rating}
                  name="rating"
                  placeholder="Rating"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4 mt-8 md:mt-0">
              <label className="label">
                <span className="label-text font-semibold">
                  Product Details
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="details"
                  defaultValue={details}
                  placeholder="Product Details"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">
                  Product Photo URL
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  defaultValue={photo}
                  placeholder="Photo URL"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Update Product"
            className="btn btn-block font-bold bg-blue-200"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
