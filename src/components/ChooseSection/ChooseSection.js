import React from "react";
import "./ChooseSecton.Module.css";
import image from "../../assets/why_choose_us_photo.jpg";
import icon1 from "../../assets/icons/man_icon.png";
import icon2 from "../../assets/icons/icon_why_choose_2.png";
import icon3 from "../../assets/icons/icon_why_choose_3.png";

const ChooseSection = () => {
  return (
    <div className="container">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Why Choose Us</h1>
          <div className="mt-8">
            The ship set ground on the shore of this uncharted desert isle with
            Gilligan the Skipper too the millionaire and his wife. These days
            are all Happy and Free. These days are all share them with me. It's
            time to put on makeup. It's time to dress up right. It's time to
            raise the curtain on the Muppet Show tonight.
            <div className="mt-10 flex justify-between">
              <div className=" flex flex-col items-center text-center gap-3">
                <img className="circle-icon " src={icon1} alt="" />
                <p>Experienced Teacher</p>
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <img className="circle-icon " src={icon2} alt="" />
                <p>Popular Courses</p>
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <img className="circle-icon " src={icon3} alt="" />
                <p>Guaranteed Career</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseSection;
