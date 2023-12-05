import React from 'react'
import './Articles.css'
import ArticleBox from '../../Modules/ArticleBox/ArticleBox'
import { Container } from 'react-bootstrap'

export default function Articles() {
    return (
        <Container>
            <div className=" w-100 row my-5 ">
                <div className="articles-box col-12 col-md-3  ">
                    <ArticleBox imgUrl={'/images/png/article-icon-1.png'} title={"خودروسازی"} text={"مهندسی صنایع با تولید سروکار ندارد."} />
                </div>
                <div className="articles-box col-12 col-md-3  ">
                    <ArticleBox imgUrl={'/images/png/article-icon-2.png'} title={"نوآوری های مجدد صنعتی"} text={"نمای چشم انداز را طراحی می کنیم و تجهیزات پایه را نصب می کنیم."} />
                </div>
                <div className="articles-box col-12 col-md-3  ">
                    <ArticleBox imgUrl={'/images/png/article-icon-3.png'} title={"صنعت تحقیقات شیمی"} text={"برای کمک به تولید مواد غذایی و میکرو فیبر توسعه یافته است."} />
                </div>
                <div className="articles-box col-12 col-md-3  ">
                    <ArticleBox imgUrl={'/images/png/article-icon-4.png'} title={"سازه های مکانیکی"} text={"ساخت پل معمولاً شامل استفاده از روش های گسسته است."} />
                </div>
            </div>
        </Container>
    )
}
