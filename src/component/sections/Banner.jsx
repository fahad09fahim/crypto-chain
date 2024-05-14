import bannerImg from "../../assets/background/side-banner.png";
import "./Banner.css";
import { MdKeyboardArrowRight } from "react-icons/md";

const Banner = () => {
  return (
    <div id="bg-bottom ">
      <div id="banner-bg" className="flex flex-col-reverse  md:flex-row items-center justify-center md:justify-between  px-2 md:px-24">
        <div className="relative z-1 max-w-[62rem] mx-auto  mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className=" tracking-wider   text-custom-black font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem] mt-9">
            Discover New Horizons <br /> in the{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-colorOne via-colorOne to-colorTwo">
              Dynamic Metaverse
            </span>
          </h1>
          <p className="text-custom-black">
            Find the right NFT collections to buy within the platform.
          </p>
          <button className="mt-8  bg-gradient-to-r from-colorOne  to-colorTwo px-2 md:px-4 py-1 md:py-2 rounded-md flex items-center justify-center text-white">
            View opensea <MdKeyboardArrowRight className="h-10 w-10 animate-pulse duration-500 ease-out" />
          </button>
        </div>
        <div className="p-5">
          <img  src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
