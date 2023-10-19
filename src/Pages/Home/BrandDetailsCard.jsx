import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const BrandDetailsCard = ({ product }) => {
  console.log(product);
  const { _id, name, brandName, type, photo, rating, price } = product;

  return (
    <div>
      <div className=" flex flex-col rounded-md lg:flex-row card-side bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Product" className="w-72 h-72 m-auto object-cover" />
        </figure>
        <div className="card-body text md:text-left">
          <h2 className="card-title">{brandName}</h2>
          <p>Product Name : {name}</p>
          <p>Product Type : {type}</p>
          <p>Price : {price}</p>
          <p>Rating : {rating}</p>
          <div className="card-actions mt-2">
          {/* to={`/details/${_id}`} */}
            <Link to={`/detailsData/${_id}`}><button className="btn btn-primary">Details</button></Link>
            <Link to={`/update/${_id}`}><button className="btn btn-primary">Update</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

BrandDetailsCard.propTypes = {
  product: PropTypes.node,
};

export default BrandDetailsCard;
