import React from "react";
import { FaDiscord, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
    const current = new Date();
  return (
    <div className="flex flex-col items-center justify-center text-center gap-5 p-3">
      <div >
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-colorOne via-colorOne to-colorTwo text-3xl font-bold my-5">Crypto Chain</h1>
        <p className="text-custom-black opacity-85">
          We make it easy to Discover, Invest and manage all your NFTs at one
          place.
        </p>
      </div>
      <div className="flex justify-between gap-2 md:gap-7 text-xs md:text-lg">
        <a href="#">Home</a>
        <a href="">Privacy policy</a>
        <a href="">Terms of use</a>
        <a href="">Sign In</a>
        <a href="">Sign Up</a>
      </div>
      <div className="flex items-center gap-2 ">
        <FaFacebookF className="text-colorOne" />
        <FaTwitter className="text-colorOne" />
        <FaDiscord className="text-colorOne" />
      </div>
      <div>
      <p>Copyright © {current.getFullYear()} - All right reserved For Crypto Chains</p>
      {/* author name:  Md. Fahad AL Fahim */}
      </div>
    </div>
  );
};

export default Footer;
