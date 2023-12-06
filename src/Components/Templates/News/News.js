import React from 'react'
import './News.css'
import { Container } from 'react-bootstrap'
import LatestNewsLink from '../../Modules/LatestNewsLink/LatestNewsLink'
import NewsBox from '../../Modules/NewsBox/NewsBox'

export default function News() {
    return (
        <div className="news ">
            <Container>
                <h2 className=' fw-bold  py-5 '>آخرین خبرها</h2>
                <div className="row d-flex ">
                    <div className="news__latest-news col-12 col-lg-6  ">
                        <div className=" bg-white  p-5">
                            <LatestNewsLink title={"وزارت بازرگانی تعرفه واردات آلومینیوم را افزایش می دهد"} />
                            <LatestNewsLink title={"ایمنی فولادها: هند علیه حکم هیئت سازمان تجارت جهانی استیناف می کند"} />
                            <LatestNewsLink title={"نرخ بهره پیش فرض در وام های کوچک در حال حاضر پایین ترین است"} />
                            <LatestNewsLink title={"چرا ترامپ در مورد مبارزه برای تجارت آزاد اینقدر دست و پا چلفتی است"} />
                        </div>
                        <a href="" className='news__latest-news__btn d-flex justify-content-center align-items-center  py-3  text-decoration-none fw-bold text-white '>
                            مشاهده همه پست ها
                        </a>
                    </div>
                    <div className="news__boxes col-12 col-lg-6   ">
                        <NewsBox imgUrl={"/images/jpg/News-1.jpg"} category={"مهندسی مواد"} title={"وزارت بازرگانی تعرفه واردات آلومینیوم را افزایش می دهد"} />
                        <NewsBox imgUrl={"/images/jpg/News-2.jpg"} category={"قدرت و انرژی"} title={"ایمنی فولادها: هند علیه حکم هیئت سازمان تجارت جهانی استیناف می کند"} />
                        <NewsBox imgUrl={"/images/jpg/News-3.jpg"} category={"نفت و گاز"} title={"چرا ترامپ در مورد مبارزه برای تجارت آزاد اینقدر دست و پا چلفتی است"} />
                        <NewsBox imgUrl={"/images/jpg/News-4.jpg"} category={"قئرت و انرژی"} title={"نرخ بهره پیش فرض در وام های کوچک در حال حاضر پایین ترین است"} />
                    </div>
                </div>
            </Container>
        </div>
    )
}
