import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import CustomButton from "../utils/CustomButton";

type Props = {};

const Navbar = (props: Props) => {
  const flexBetween = "flex items-center justify-between";
  return (
    <nav className="my-5">
      <div className={`${flexBetween}`}>
        <div className="flex items-center gap-2.5">
          <img src={Logo} alt="megatongue" className="w-12 h-12" />
          <span className="text-purple-20 text-2xl font-poppins font-semibold">
            MegaTongue
          </span>
        </div>
        <div className={`flex gap-10 text-xl font-normal`}>
          <Link to="#">Pricing</Link>
          <Link to="#">API Documentation</Link>
          <Link to="#">Pricing</Link>
        </div>
        <div className="flex">
          <CustomButton className="">Signup</CustomButton>
          <Bars3Icon />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
