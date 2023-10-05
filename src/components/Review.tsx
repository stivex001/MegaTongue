import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Card from "./Card";

// type Props = {};

const Review = () => {
  const flexBetween = "flex items-center justify-between";
  return (
    <div className="w-full h-full">
      <div className="w-5/6 mx-auto my-6 ">
        <div className={`${flexBetween}`}>
          <div>
            <span className="text-purple-20 text-sm font-medium">
              What customers says
            </span>
            <p className="text-dark-20 text-4xl font-bold">Recent Reviews</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center py-3 px-6 bg-[rgba(18, 17, 39, 0.04)] rounded-[100px]">
              <BsArrowLeft size={24} />
            </div>
            <div className="flex items-center justify-center py-3 px-6 bg-purple-20 rounded-[100px] text-white">
              <BsArrowRight size={24} />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6 mt-[41px]">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Review;
