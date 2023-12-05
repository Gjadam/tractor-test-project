import React from 'react'
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import CustomersBox from '../../Modules/CustomersBox/CustomersBox';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import CustomersNav from '../../Modules/CustomersNav/CustomersNav';
export default function Customers() {



    return (
        <Container className=' my-5 '>

            <div className="">
                <Swiper
                    className="mySwiper d-flex  flex-column-reverse "
                    slidesPerView={1}
                    spaceBetween={5}
                    loop
                    pagination={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        992: {
                            slidesPerView: 1,
                        },
                        1200: {
                            slidesPerView: 2,
                        },
                    }}
                    modules={[Navigation, Autoplay, Pagination]}
                >
                    <CustomersNav />
                    <SwiperSlide>
                        <CustomersBox imgUrl={"/images/jpg/customers-1.jpg"} title={'فانی مورنو'} text={'من می گویم این را به دوستان، آشنایان و اعضای خانواده ام به شدت توصیه می کنم. نگرش و خدمات همیشه اختصاص داده شده است.'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CustomersBox imgUrl={"/images/jpg/customers-2.jpg"} title={'دیوید جیمز'} text={'شما می دانید که وقتی به ملاقات افراد مناسب در جلسه مشاوره می آیید، کسب و کار خود را به دست افراد مناسب سپرده اید.'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CustomersBox imgUrl={"/images/jpg/customers-3.jpg"} title={'میلاندا موسس'} text={'اینجا در مرکز تراکتور، شما کارکنان حرفه ای دارید که به کسب و کار شما نگاه می کنند. همه راه حل ها سریع، دقیق و دقیق هستند.'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CustomersBox imgUrl={"/images/jpg/customers-4.jpg"} title={'برایان فریمن'} text={'کار با @Tractor مانند یک تجربه همیشه قبل است که وقتی شروع به ذکر آن می کنید، مردم می دانند مشکل شما دقیقا چیست.'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CustomersBox imgUrl={"/images/jpg/customers-5.jpg"} title={'جاستین بیبر'} text={'خدمات آنها یکی از بهترین خدمات صادقانه است. ساختن همه چیز ساده و آسان، حتی برای مبتدیان و تازه کارها مانند من و همسرم.'} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </Container>
    )
}
