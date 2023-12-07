import React from 'react'
import './Information.css'
import { Container } from 'react-bootstrap'
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import InformationBox from '../../Modules/InformationBox/InformationBox'
import InformationSlide from '../../Modules/InformationSlide/InformationSlide';
export default function Information() {
    return (
        <div className='information '>
            <Container>
                <h2 className="information__title text-center fw-bold "  data-aos="fade-up" data-aos-duration="800">اعداد برای خودشان صحبت می کنند</h2>
                <div className=" w-100  row "  data-aos="fade-up" data-aos-duration="900">
                    <div className="col-12 col-md-6 col-lg-3">
                        <InformationBox imgUrl={"/images/png/information-icon-1.png"} count={2000} title={"شعب سراسر کشور"} text={"شعب ما در سراسر کشور و خارج از کشور گسترش یافته است."} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <InformationBox imgUrl={"/images/png/information-icon-2.png"} count={3000} title={"پروژه های انجام شده"} text={"ما به تعداد عظیمی از پروژه های تکمیل شده افتخار می کنیم."} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <InformationBox imgUrl={"/images/png/information-icon-3.png"} count={543} title={"درختان کاشته شده"} text={"کاشت درختان سبز برای حفظ پایداری"} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <InformationBox imgUrl={"/images/png/information-icon-4.png"} count={4600} title={"خرده فروشی های تجاری"} text={"شبکه خرده فروشی های ما می تواند به همه جای دنیا دسترسی داشته باشد."} />
                    </div>
                </div>
                <div className=""  data-aos="fade-up" data-aos-duration="1000">
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={5}
                        loop
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            576: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            992: {
                                slidesPerView: 4,
                            },
                            1200: {
                                slidesPerView: 5,
                            },
                        }}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <InformationSlide imgUrl={"/images/png/information-logo-1.png"} imgHoverUrl={"/images/png/information-logo-hover-1.png"} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <InformationSlide imgUrl={"/images/png/information-logo-2.png"} imgHoverUrl={"/images/png/information-logo-hover-2.png"} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <InformationSlide imgUrl={"/images/png/information-logo-3.png"} imgHoverUrl={"/images/png/information-logo-hover-3.png"} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <InformationSlide imgUrl={"/images/png/information-logo-4.png"} imgHoverUrl={"/images/png/information-logo-hover-4.png"} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <InformationSlide imgUrl={"/images/png/information-logo-5.png"} imgHoverUrl={"/images/png/information-logo-hover-5.png"} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <InformationSlide imgUrl={"/images/png/information-logo-6.png"} imgHoverUrl={"/images/png/information-logo-hover-6.png"} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <InformationSlide imgUrl={"/images/png/information-logo-7.png"} imgHoverUrl={"/images/png/information-logo-hover-7.png"} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <InformationSlide imgUrl={"/images/png/information-logo-8.png"} imgHoverUrl={"/images/png/information-logo-hover-8.png"} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <InformationSlide imgUrl={"/images/png/information-logo-9.png"} imgHoverUrl={"/images/png/information-logo-hover-9.png"} />
                        </SwiperSlide>

                    </Swiper>
                </div>
            </Container>
        </div>
    )
}
