import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

const ImageScrollbar = ({ data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {data?.map((item) => (
          <SwiperSlide
            key={item.id}
            // style={{ width: "500px", height: "600px" }}
          >
            <Image
              alt="Property Image"
              placeholder="blur"
              blurDataURL={item.url}
              src={item.url}
              width={1000}
              height={500}
              style={{ borderRadius: "8px", marginTop: "20px" }}
              sizes="(max-width:500px) 250px , (max-width: 1024px) 400px, 1200px"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ImageScrollbar;
