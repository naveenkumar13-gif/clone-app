import React from "react";
import "./index.css";
import { testimonialCard } from "../../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

function Testimonials() {
  return (
    <div className="testimonials" id="Testimonials">
      <div className="titles">
        <h2 className="heading">Testimonials</h2>
      </div>

      {/* Desktop Grid View */}
      <div className="testimonial_desktop">
        <div className="testimonial_container">
          {testimonialCard.map((testimonial, index) => (
            <div className="testimonial_card" key={index}>
              <p className="testimonial_description">
                {testimonial.description}
              </p>
              <div>
                <h2 className="testimonial_name">{testimonial.name}</h2>
                <p className="testimonial_company">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Carousel View */}
      <div className="testimonial_mobile">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
        >
          {testimonialCard.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial_card">
                <p className="testimonial_description">
                  {testimonial.description}
                </p>
                <div>
                  <h2 className="testimonial_name">{testimonial.name}</h2>
                  <p className="testimonial_company">{testimonial.company}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;
