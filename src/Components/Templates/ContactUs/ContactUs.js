import React from 'react'
import './ContactUs.css'
import ContactUsBox from '../../Modules/ContactUsBox/ContactUsBox';
import Button from '../../Modules/Button/Button'
import { IoLocationOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { PiPhoneThin } from "react-icons/pi";
export default function ContactUs() {
    return (
        <>
            <div className=" d-flex justify-content-between align-items-start flex-wrap ">
                    <div className="contact-us__content w-100  ">
                        <h2 className='fw-bold'>با ما تماس بگیرید یا فرم را پر کنید</h2>
                        <div className=" d-flex justify-content-start align-items-start flex-wrap  pt-5 mb-5  gap-5">
                            <ContactUsBox title={"جزئیات آدرس"} icon={<IoLocationOutline className='contact-us-box__icon ms-2 fs-4 ' />} text={"دوناتو پارک وی 183 ، ایالات متحده"} />
                            <ContactUsBox title={"زمان کار"} icon={<CiClock2 className='contact-us-box__icon ms-2 fs-4 ' />} text={"دوشنبه - جمعه: 9:00 - 19:00 تعطیل در تعطیلات آخر هفته"} />
                            <ContactUsBox title={"شماره تلفن"} icon={<PiPhoneThin className='contact-us-box__icon ms-2 fs-4 ' />} text={"(+00)888.666.88"} />
                        </div>
                        <form className=" d-flex justify-content-between align-items-start flex-column ">
                            <div className=" d-flex  flex-column  w-100 ">
                                <div className=" d-flex gap-5  ">
                                    <div class="input-wrapper">
                                        <input class="input-box" type="text" placeholder="نام*" />
                                        <span class="underline"></span>
                                    </div>
                                    <div class="input-wrapper">
                                        <input class="input-box" type="email" placeholder="ایمیل*" />
                                        <span class="underline"></span>
                                    </div>
                                </div>
                                <div class="input-wrapper my-4 ">
                                    <input class="input-box" type="email" placeholder="شماره تلفن*" />
                                    <span class="underline"></span>
                                </div>
                                <textarea placeholder="پیام" class="input-box contact-us__content__textarea" ></textarea>
                            </div>
                            <div className=" mt-4 ">
                            <Button text={"اکنون ارسال کنید"} />
                            </div>
                        </form>
                    </div>
                <div className="contact-us__map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2527999406!2d-74.14448771969894!3d40.697631233373556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2snl!4v1701858347713!5m2!1sen!2snl" width="100%" height="850" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </>
    )
}
