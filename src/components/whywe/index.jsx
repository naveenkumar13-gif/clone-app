import React from "react";
import "./index.css";
import { WhyWeCard } from "../../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function WhyWe() {
  return (
    <div className="features" id="Feature">
      <div className="titles">
        <h2 className="heading">Why Choose TSquaredC</h2>
        <p className="description">
          Solutions that empower your vision with precision
        </p>
      </div>

      {/* Desktop Grid View */}
      <div className="whywe_desktop">
        <div className="whywe_container">
          {WhyWeCard.map((card, index) => (
            <div key={index} className="whywe_card">
              <div className="whywe_card_content">
                <div className="whywe_card_title">
                  <img
                    src={card.icon}
                    alt={card.alt}
                    className="whywe_card_icon"
                  />
                  <h4>{card.title}</h4>
                </div>
                <p className="whywe_description">{card.description}</p>
              </div>
              <div className="whywe_card_img">
                <img src={card.src} alt={card.alt} className="whywe_img" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Carousel View */}
      <div className="whywe_mobile">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="whywe_swiper"
        >
          {WhyWeCard.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="whywe_card">
                <div className="whywe_card_content">
                  <div className="whywe_card_title">
                    <img
                      src={card.icon}
                      alt={card.alt}
                      className="whywe_card_icon"
                    />
                    <h4>{card.title}</h4>
                  </div>
                  <p className="whywe_description">{card.description}</p>
                </div>
                <div className="whywe_card_img">
                  <img src={card.src} alt={card.alt} className="whywe_img" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default WhyWe;
