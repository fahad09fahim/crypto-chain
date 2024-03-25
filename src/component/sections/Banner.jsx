import bannerImg from "../../assets/background/side-banner.png";
import "./Banner.css";
import { MdKeyboardArrowRight } from "react-icons/md";

const Banner = () => {
  return (
    <div id="bg-bottom">
      <div id="banner-bg" className="flex items-center justify-between mx-24">
        <div className="">
          <h1 className="text-[48px] text-banner-text leading-[62px] font-bold mt-9">
            Discover New Horizons <br /> in the{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-colorOne via-colorOne to-colorTwo">
              Dynamic Metaverse
            </span>
          </h1>
          <p className="text-banner-text">
            Find the right NFT collections to buy within the platform.
          </p>
          <button className="mt-8  bg-gradient-to-r from-colorOne  to-colorTwo px-4 py-2 rounded-md flex items-center justify-center text-white">
            View opensea <MdKeyboardArrowRight className="h-10 w-10" />
          </button>
        </div>
        <div>
          <img src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
