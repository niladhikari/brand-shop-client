import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const DisplayBands = ({ brand }) => {
  const { _id,photo, brandName } = brand;
  return (
    <div>
      <Link to={`/details/${_id}`}>
        <div className="card px-3 md:px-0 bg-base-100 shadow-xl">
          <figure className="">
            <img
              src={photo}
              alt="brands photo"
              className="rounded-t-xl w-full h-72"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl font-bold">{brandName}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

DisplayBands.propTypes = {
  brand: PropTypes.object,
};

export default DisplayBands;
