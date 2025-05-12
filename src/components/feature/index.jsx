import React from "react";
import "./index.css";
import { Technology } from "../../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function Feature() {
  return (
    <div className="features">
      <div className="titles">
        <h2 className="feature_heading">Technology, Turbocharged</h2>
        <p className="feature_description">
          Delivering unmatched speed, security, scalability
        </p>
      </div>

      {/* Desktop Grid View */}
      <div className="feature_desktop">
        <div className="feature_container">
          {Technology.map((card, index) => (
            <div key={index} className="feature_card">
              <div>
                <img src={card.src} alt={card.alt} className="cards" />
              </div>
              <div className="feature_card_content">
                <h4>{card.title}</h4>
                <p className="feature_para">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Carousel View with Autoplay */}
      <div className="feature_mobile">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{
            delay: 3000, // 3 seconds delay between slides
            disableOnInteraction: false, // Continue autoplay after user interaction
          }}
          loop={true}
          className="feature_swiper"
        >
          {Technology.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="feature_card">
                <div>
                  <img src={card.src} alt={card.alt} className="cards" />
                </div>
                <div className="feature_card_content">
                  <h4>{card.title}</h4>
                  <p className="feature_para">{card.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Feature;
