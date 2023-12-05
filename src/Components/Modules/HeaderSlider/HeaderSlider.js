import React from 'react'
import './HeaderSlider.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import HeaderSlide from '../HeaderSlide/HeaderSlide';

export default function HeaderSlider() {
    return (
        <div className=''>
            <Swiper
                navigation={true}

                loop
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Navigation]}
                className="mySwiper">
                <SwiperSlide>
                    <HeaderSlide
                        imgUrl={"/images/jpg/header-slider-2.jpg"}
                        text={"ما یک شرکت مهندسی یکپارچه هستیم"}
                        title={"نسل الهام بخش"}
                        boxButtonTitle={"خدمات ما"}
                        normalButtonTitle={"چگونه  این کار را انجام میدهیم"}
                        slide={1} />
                </SwiperSlide>
                <SwiperSlide>
                    <HeaderSlide
                        imgUrl={"/images/jpg/header-slider-1.jpg"}
                        text={"ما یک شرکت مهندسی یکپارچه هستیم"}
                        title={"رشد بازار جهانی خودرو به 600 میلیارد دلار"}
                        boxButtonTitle={"صنایع ما"}
                        normalButtonTitle={""}
                        slide={2} />
                </SwiperSlide>
                <SwiperSlide>
                    <HeaderSlide
                        imgUrl={"/images/jpg/header-slider-3.jpg"}
                        text={"ما راهکارهای فنی قابل اجرا را در تمام حوزه‌ها ارائه می‌دهیم."}
                        title={"تحقق اهداف نوآوری"}
                        boxButtonTitle={"خدمات ما"}
                        normalButtonTitle={""}
                        slide={3} />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
