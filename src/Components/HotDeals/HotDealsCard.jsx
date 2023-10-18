import PropTypes from "prop-types";

const HotDealsCard = ({ product }) => {
  const { productName, image, price, price2, description } = product;
  return (
    <div>
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md  rounded-xl ">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 md:h-full lg:h-96  rounded-xl bg-clip-border">
          <img
            src={image}
            className="object-cover w-full h-full md:h-72 lg:h-full"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
              {productName}
            </p>
            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900 text-green-500">
              {price}
            </p>
            
          <span className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900 text-red-600">{price2}</span>
          </div>
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

HotDealsCard.propTypes = {
  product: PropTypes.object,
};

export default HotDealsCard;
