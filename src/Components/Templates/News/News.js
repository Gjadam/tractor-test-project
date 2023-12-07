import React from 'react'
import './News.css'
import { Container } from 'react-bootstrap'
import LatestNewsLink from '../../Modules/LatestNewsLink/LatestNewsLink'
import NewsBox from '../../Modules/NewsBox/NewsBox'

export default function News() {
    return (
        <div className="news pb-5 ">
            <Container>
                <h2 className=' fw-bold  py-5 '  data-aos="fade-up" data-aos-duration="9000">آخرین خبرها</h2>
                <div className="row d-flex ">
                    <div className="news__latest-news col-12 col-lg-6  "  data-aos="fade-up" data-aos-duration="1000">
                        <div className=" bg-white  p-5" >
                            <LatestNewsLink title={"وزارت بازرگانی تعرفه واردات آلومینیوم را افزایش می دهد"} />
                            <LatestNewsLink title={"ایمنی فولادها: هند علیه حکم هیئت سازمان تجارت جهانی استیناف می کند"} />
                            <LatestNewsLink title={"نرخ بهره پیش فرض در وام های کوچک در حال حاضر پایین ترین است"} />
                            <LatestNewsLink title={"چرا ترامپ در مورد مبارزه برای تجارت آزاد اینقدر دست و پا چلفتی است"} />
                        </div>
                        <a href="" className='news__latest-news__btn d-flex justify-content-center align-items-center  py-3  text-decoration-none fw-bold text-white '>
                            مشاهده همه پست ها
                        </a>
                    </div>
                    <div className="news__boxes col-12 col-lg-6   " >
                        <NewsBox fadeTime={"1000"} imgUrl={"/images/jpg/news-1.jpg"} category={"مهندسی مواد"} title={"وزارت بازرگانی تعرفه واردات آلومینیوم را افزایش می دهد"} />
                        <NewsBox fadeTime={"1200"} imgUrl={"/images/jpg/news-2.jpg"} category={"قدرت و انرژی"} title={"ایمنی فولادها: هند علیه حکم هیئت سازمان تجارت جهانی استیناف می کند"} />
                        <NewsBox fadeTime={"1300"} imgUrl={"/images/jpg/news-3.jpg"} category={"نفت و گاز"} title={"چرا ترامپ در مورد مبارزه برای تجارت آزاد اینقدر دست و پا چلفتی است"} />
                        <NewsBox fadeTime={"1400"} imgUrl={"/images/jpg/news-4.jpg"} category={"قئرت و انرژی"} title={"نرخ بهره پیش فرض در وام های کوچک در حال حاضر پایین ترین است"} />
                    </div>
                </div>
            </Container>
        </div>
    )
}
