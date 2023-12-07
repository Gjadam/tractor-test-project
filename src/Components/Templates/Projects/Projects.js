import React from 'react'
import './Projects.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay , Pagination } from 'swiper/modules';
import ProjectsSlide from '../../Modules/ProjectsSlide/ProjectsSlide'
export default function Projects() {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    return (
        <>
            <div className="projects"  data-aos="fade-up" data-aos-duration="1000">
                <Swiper
                spaceBetween={100}
                    loop
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={pagination}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper">
                    <SwiperSlide>
                        <ProjectsSlide imgUrl={'/images/jpg/projects-1.jpg'} count={'01'} title={'پارک سبز اکو'} text={'پارک های سازگار با محیط زیست برای زندگی سبزتر…'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProjectsSlide imgUrl={'/images/jpg/projects-2.jpg'} count={'02'} title={'پل بری'} text={'مردم را از سراسر کشور و مناطق به هم متصل می کند…'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProjectsSlide imgUrl={'/images/jpg/projects-3.jpg'} count={'03'} title={'کلیسای رزماری'} text={'مکان های مقدس برای پذیرش عقیده و دین شما. …'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProjectsSlide imgUrl={'/images/jpg/projects-4.jpg'} count={'04'} title={'موزه هیدج'} text={'این فقط تاریخ نیست، ذخیره ارزش ها و باورهای ماست. …'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProjectsSlide imgUrl={'/images/jpg/projects-5.jpg'} count={'05'} title={'تئاتر پولی'} text={'جایی که تعداد زیادی از بلاک باسترها متولد شدند و به جهان می درخشند. …'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProjectsSlide imgUrl={'/images/jpg/projects-6.jpg'} count={'06'} title={'دورما مال'} text={'آینده جامعه خود را با فداکاری و عشق تقویت کنید. …'} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}
