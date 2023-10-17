const Banner = () => {
  return (
    <div className="max-w-[1300px] mx-auto">
      <div className="carousel w-full   lg:h-[550px] md:mt-12">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="flex flex-col lg:flex-row items-center p-5 md:p-24 gap-1">
            <div className="space-y-4 md:space-y-7 md:flex-1 pb-5">
              <h1 className="text-4xl  font-bold text-[#000]">
                <span className="">Love Your Heart</span> <br />{" "}
                <span>Love Your Life </span>
                <br />
              </h1>
              <p className=" text-base font-semibold">
                Join us for a heartwarming and inspiring event dedicated to
                promoting cardiovascular health and well-being. Love Your Heart,
                Love Your Life is a celebration of life and a reminder of the
                importance of caring for your heart, the vital organ that keeps
                us ticking
              </p>
              <button className="btn text-xl text-white bg-blue-500 border-0">
                Get Started
              </button>
            </div>
            <div className="md:flex-1">
              <img
                src="https://i.ibb.co/nzDRXsz/health-1.jpg"
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
                A Journey to <br /> Optimal Health
              </h1>
              <p className=" text-base font-semibold">
                Embark on a transformation voyage towards achieving your best
                state of well-being at our A Journey to Optimal Health event.
                This immersive and enlightening experience is designed to
                empower you with the knowledge, tools, and inspiration needed to
                lead a life filled with vitality, balance.
              </p>
              <button className="btn text-xl text-black bg-blue-500 border-0">
                Get Started
              </button>
            </div>
            <div className="md:flex-1 ">
              <img
                src="https://i.ibb.co/mTkB8hB/health-2.jpg"
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
                Nourish Your Mind <br /> Body, and Soul
              </h1>
              <p className=" text-base font-semibold">
                Escape the hustle and bustle of everyday life and embark on a
                journey of self-discovery and holistic well-being at our Yoga
                Harmony Retreat: Nourish Your Mind, Body, and Soul.This
                transformation retreat is a sanctuary for those seeking balance,
                rejuvenation, and inner harmony.
              </p>
              <button className="btn text-xl text-black bg-blue-500 border-0">
                Get Started
              </button>
            </div>
            <div className="md:flex-1">
              <img
                src="https://i.ibb.co/6P4skCd/health-3.jpg"
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

export default Banner;
