import React from "react";
import styles from "@/styles/Slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

function Slider() {
  return (
    <Swiper
      loop={true}
      navigation={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      modules={[Navigation, Autoplay]}
      className={styles.swiper}
    >
      <SwiperSlide
        className={styles.swiper_slide}
        style={{ backgroundImage: 'url("/images/carousel-1.jpg")' }}
      >
        <div
          className={`${styles.slider_caption} d-flex flex-column align-items-center justify-content-center`}
        >
          <h2 className="text-primary font-weight-medium  m-0">
            A Tradition of Taste{" "}
          </h2>
          <h1 className="display-1 text-white m-0">Robusta </h1>
          <h2 className="text-white m-0">* SINCE 1950 *</h2>
        </div>
      </SwiperSlide>

      <SwiperSlide
        className={styles.swiper_slide}
        style={{ backgroundImage: 'url("/images/carousel-2.jpg")' }}
      >
        <div
          className={`${styles.slider_caption} d-flex flex-column align-items-center justify-content-center`}
        >
          <h2 className="text-primary font-weight-medium m-0">
            Proudly Serving
          </h2>
          <h1 className="display-1 text-white m-0">Arabbica</h1>
          <h2 className="text-white m-0">Since 1950</h2>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
