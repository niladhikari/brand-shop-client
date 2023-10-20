import PropTypes from "prop-types";

const Slider = ({ slide }) => {
  const { photo ,name} = slide;
  return (
    <div className="card grid justify-center items-center">
      <img className="h-[70vh] md:w-[700px] m-auto " src={photo} alt="product image" />
      <h2 className="text-center text-xl lg:text-4xl font-semibold text-pink-500 mt-2">Great news! Enjoy 20% off on {name} for a limited time. Do not miss out on this fantastic deal!</h2>
      
    </div>
  );
};

Slider.propTypes = {
  slide: PropTypes.object,
};

export default Slider;
