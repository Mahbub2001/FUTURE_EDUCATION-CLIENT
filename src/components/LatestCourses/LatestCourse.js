import React, { useEffect, useState } from "react";
import { Parallax } from "react-parallax";
import "./LatestCourse.Module.css";
import image1 from "../../assets/bg_latest_course.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import {Autoplay, EffectCoverflow, Pagination } from "swiper";

const LatestCourse = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("https://educational-website-server-kappa.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  return (
    <div>
      <Parallax strength={800} bgImage={image1}>
        <div className="content mt-72">
          <div className="text-content  mt-2 ">
            <h1 className="text-center text-5xl font-semibold mb-2">
              Latest Course
            </h1>
            <p className="text-center text-orange-900">
              Check Our Featured Course
            </p>
            <div className="mt-16 container">
              {
                <Swiper
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={3}
                  loop={true}
                  autoplay={
                    {
                      delay: 2000,
                      disableOnInteraction:false,
                    }
                  }
                  coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                  }}
                  pagination={true}
                  modules={[Autoplay,EffectCoverflow, Pagination]}
                  className="mySwiper"
                >
                  {datas.map((data) => {
                    return (
                      <SwiperSlide key={data.id}>
                        <div className="shadow-lg">
                          <div>
                            <img src={data.img} alt="" />
                          </div>
                          <div className="p-3">
                            <p className="mt-3"><small className="font-bold">Professor : {data?.instructor}</small></p>
                            <p className="mt-3 text-pink-900 font-semibold">{data?.course_name}</p>
                            <p>{data?.details.slice(0, 100)}</p>
                            <div>
                              <p className="mt-3">Course Duration : {data?.hours}hours</p>
                            </div>
                            <p className="mt-5 mb-10">Price : ${data?.price}</p>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              }
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default LatestCourse;
