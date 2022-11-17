import React, { useContext, useEffect, useState } from "react";
import "./Testimonial.Module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/prof-photo/prof2.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { ThemeContext } from "../../hooks/ThemeContext";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  const {darkMode} = useContext(ThemeContext);

  useEffect(() => {
    fetch("https://educational-website-server-kappa.vercel.app/testimonials")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  return (
    <div className={darkMode ? 'bg-black text-white' : ''}>
      <h1 className="text-center text-5xl text-bold pt-10">
        What Our Students Say{" "}
      </h1>
      <p className="text-center mt-5 mb-5">Testimonials from students</p>
      <div className="container w-96">
        <Swiper
          direction={"vertical"}
          autoplay={{
            delay: 2500,
            disableOnInteraction:false,
          }}
          loop={Infinity}
          navigation={{ clickable: true }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper1"
        >
          {testimonials.map((testimonial) => {
            return (
              <SwiperSlide key={testimonial.id}>
                <div className="flex flex-col justify-center items-center">
                  <div>
                    <img
                      className="w-20 rounded-full"
                      src={testimonial.img}
                      alt=""
                    />
                  </div>
                  <div className="mt-16">
                    <p>{testimonial.description}</p>
                  </div>
                  <div className="flex gap-2 mt-10">
                    <div className="text-red-900 font-bold">
                      {testimonial.name} |
                    </div>
                    <div>{testimonial.course}</div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
