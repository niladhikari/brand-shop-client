import "./Banner.css";
const Banner = () => {
  return (
    <div className="mt-6 lg:mt-1 max-w-[1300px] mx-auto background py-4 lg:py-0 lg:h-[80vh] grid justify-center items-center">
      <div className=" flex flex-col-reverse lg:flex-row justify-around gap-6 items-center px-6">
        <h2 className="text-center text-xl md:text-3xl font-bold text-pink-500 mb-3 md:mb-0">
        Technology and electronics encompass a vast array of innovative devices, from smartphones and laptops to cutting-edge gadgets.
        </h2>
        <img src="https://i.ibb.co/H7p9bHc/pc-bg-v1.jpg" alt="" className="w-full md:h-96 rounded-md"/>
      </div>
    </div>
  );
};

export default Banner;
