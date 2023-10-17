import PropTypes from 'prop-types';
const DisplayBands = ({brand}) => {
  const {photo,name} = brand;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure className="">
          <img
            src={photo}
            alt="brands photo"
            className="rounded-t-xl w-full h-72"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-bold">{name}</h2>
        </div>
      </div>
    </div>
  );
};

DisplayBands.propTypes = {
  brand: PropTypes.object,
};

export default DisplayBands;
