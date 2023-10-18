const FeatureProduct = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="carousel w-full   lg:h-[550px]">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="flex flex-col lg:flex-row items-center p-5 md:p-24 gap-1">
            <div className="space-y-4 md:space-y-7 md:flex-1 pb-5">
              <h1 className="text-4xl  font-bold text-[#000]">
                <span className="text-pink-500">iPhone 15 Pro</span>
              </h1>
              <p className=" text-base font-semibold">
                The last big upgrade on the iPhone 15 is the camera system. The
                main camera sensor is moving to a 48-megapixel one, up from the
                12-megapixel one found on the previous iPhone 14.
              </p>
              <button className="btn text-xl text-white bg-blue-500 border-0">
                Get Started
              </button>
            </div>
            <div className="md:flex-1">
              <img
                src="https://i.ibb.co/0cbBG7n/15pro.png"
                className="w-full md:h-[360px] lg:h-96 rounded-lg"
              />
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="flex flex-col lg:flex-row items-center p-5 md:p-24 gap-1">
            <div className="space-y-4 md:space-y-7 md:flex-1 pb-5">
              <h1 className="text-4xl  font-bold text-[#000]">
                <span className="text-pink-500">Galaxy S23 Ultra</span>
              </h1>
              <p className=" text-base font-semibold">
              The Galaxy S23 Ultra is one of the best camera phones you can buy, with a whopping 200-megapixel main camera, up to 100x zoom and a ton of useful software features for fine-tuning your shots.
              </p>
              <button className="btn text-xl text-black bg-blue-500 border-0">
                Get Started
              </button>
            </div>
            <div className="md:flex-1 ">
              <img
                src="https://i.ibb.co/gPJ3WgY/S23-U-V2-Configurator-DT-800x600.jpg"
                className="w-full md:h-[360px] lg:h-96  rounded-lg"
              />
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="flex flex-col lg:flex-row items-center p-5 md:p-24 gap-1">
            <div className="space-y-4 md:space-y-7 md:flex-1 pb-5">
            <h1 className="text-4xl  font-bold text-[#000]">
                <span className="text-pink-500">HUAWEI WATCH GT 2 Pro</span>
              </h1>
              <p className=" text-base font-semibold">
              Huawei Watch GT 2 Pro is fueled with a 455 mAh battery and supports wireless charging. The dimension of the smartwatch is 46.7 x 46.7 x 11.4 mm and it weighs 52 grams. It comes with sensors such as Accelerometer, gyro, heart rate, barometer, compass, SpO2, and VO2max.
              </p>
              <button className="btn text-xl text-black bg-blue-500 border-0">
                Get Started
              </button>
            </div>
            <div className="md:flex-1">
              <img
                src="https://i.ibb.co/QD5WrZb/main1.jpg"
                className="w-full md:h-[360px] lg:h-96 rounded-lg"
              />
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureProduct;
