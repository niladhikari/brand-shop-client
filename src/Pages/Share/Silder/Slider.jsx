import PropTypes from "prop-types";

const Slider = ({ slide }) => {
  const { photo ,name} = slide;
  return (
    <div className="card grid justify-center items-center">
      <img className="h-[70vh] md:w-[700px] mr-5" src={photo} alt="product image" />
      <h2 className="text-center">{name}</h2>
    </div>
  );
};

Slider.propTypes = {
  slide: PropTypes.object,
};

export default Slider;
