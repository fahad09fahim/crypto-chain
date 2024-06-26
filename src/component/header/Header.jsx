import "./Header.css";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const Header = () => {
  const navLinks = (
    <>
      <li>Home</li>
      <li>About</li>
      <li>Roadmap</li>
      <li>Blog</li>
    </>
  );
  return (
    <div className="navbar p-2 md:px-10  ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 cursor-pointer"
          >
            {navLinks}
          </ul>
        </div>
        <a id="navLogo" className=" lg:text-[2rem] hidden lg:flex  ">
          Crypto Chain
        </a>
      </div>
      <div className="navbar-center flex lg:hidden">
        <a id="navLogo" className="text-[1.2rem] md:text-[1.75rem]">
          Crypto Chain
        </a>
      </div>
      {/* navlinks for large device */}
      <div className="navbar-center hidden  lg:flex">
        <ul className="menu menu-horizontal px-1 cursor-pointer flex gap-9 text-lg font-semibold text-custom-black ">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end flex  items-center gap-6">
        <a  className="hidden lg:flex">
          <FaFacebookF className="h-6 w-6 text-colorOne" />
        </a>
        <a className="hidden lg:flex" >
          <FaTwitter className="h-6 w-6 text-colorOne" />
        </a>
        <a className="btn px-[0.50rem] py-[0.25rem] md:px-[0.75rem] md:py-[0.50rem] lg:px-[1.25rem] lg:py-[1rem] text-white bg-gradient-to-r from-colorOne via-colorOne to-colorTwo">
          Connect wallet
        </a>
      </div>
    </div>
  );
};

export default Header;
