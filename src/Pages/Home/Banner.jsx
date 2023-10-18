import "./Banner.css";
const Banner = () => {
  return (
    <div className="max-w-[1300px] mx-auto background py-4 md:py-0 md:h-[80vh] grid justify-center items-center">
      <div className=" md:flex justify-around gap-6 items-center px-6">
        <h2 className="text-center text-3xl font-bold text-purple-800 mb-3 md:mb-0">
        Technology and electronics encompass a vast array of innovative devices, from smartphones and laptops to cutting-edge gadgets.
        </h2>
        <img src="https://i.ibb.co/H7p9bHc/pc-bg-v1.jpg" alt="" className="w-full h-96 rounded-md"/>
      </div>
    </div>
  );
};

export default Banner;
