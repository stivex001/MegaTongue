// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import CustomButton from "../utils/CustomButton";

type Props = {};

const Navbar = (props: Props) => {
  const flexBetween = "flex items-center justify-between";
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
