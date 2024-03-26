import bannerImg from "../../assets/background/side-banner.png";
import "./Banner.css";
import { MdKeyboardArrowRight } from "react-icons/md";

const Banner = () => {
  return (
    <div id="bg-bottom ">
      <div id="banner-bg" className="flex flex-col-reverse  md:flex-row items-center justify-center md:justify-between  px-2 md:px-24">
        <div className="">
          <h1 className="text-2xl tracking-wider md:text-5xl  text-custom-black  font-bold mt-9">
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
