// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import CustomButton from "../utils/CustomButton";
import useMediaQuery from "../hooks/useMediaQuery";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";

type Props = {};

const Navbar = (props: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediaScreen = useMediaQuery("(min-width: 1068px)");

  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <img src={Logo} alt="megatongue" className="w-12 h-12" />
              <span className="text-purple-20 text-2xl font-poppins font-semibold">
                MegaTongue
              </span>
            </div>

            {/* Right Side */}
            {isAboveMediaScreen ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-xl font-normal`}>
                  <Link to="#">Pricing</Link>
                  <Link to="#">API Documentation</Link>
                  <Link to="#">Pricing</Link>
                </div>
                <div className={`${flexBetween} gap-8 text-xl font-normal`}>
                  <CustomButton className="">Signup</CustomButton>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="22"
                    viewBox="0 0 32 22"
                    fill="none"
                    className="cursor-pointer"
                  >
                    <path
                      d="M31 1H1M31 11H1M31 21H1"
                      stroke="black"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-purple-20 p-2 "
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 32 22"
                  fill="#fff"
                  className="cursor-pointer"
                >
                  <path
                    d="M31 1H1M31 11H1M31 21H1"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {!isAboveMediaScreen && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-purple-20 drop-shadow-xl">
          {/* close icon */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-10 w-10 text-white" />
            </button>
          </div>

          {/* Menu Items */}
          <div className={`ml-[20%] flex flex-col gap-10 text-2xl`}>
            <div className={`flex flex-col gap-8 text-xl font-normal text-white`}>
              <Link to="#">Pricing</Link>
              <Link to="#">API Documentation</Link>
              <Link to="#">Pricing</Link>
            </div>
            <div className={`flex flex-col gap-8 text-xl font-normal `}>
              <CustomButton className="bg-light-gray text-purple-20 w-fit ">
                Signup
              </CustomButton>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="22"
                viewBox="0 0 32 22"
                fill="none"
                className="cursor-pointer"
              >
                <path
                  d="M31 1H1M31 11H1M31 21H1"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
