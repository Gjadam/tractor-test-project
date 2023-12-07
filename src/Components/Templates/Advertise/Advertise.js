import React from 'react'
import './Advertise.css'
import { Container } from 'react-bootstrap'
import Button from '../../Modules/Button/Button'
export default function Advertise() {
    return (
        <div className='advertise d-flex justify-content-center align-items-center '>
            <Container>
                <div className="advertise__content d-flex justify-content-between align-items-center flex-column text-white  w-100 ">
                    <h6 className='fw-bold'  data-aos="fade-up" data-aos-duration="800">از سال 1992 کار می کند</h6>
                    <h1 className='fw-bold'  data-aos="fade-up" data-aos-duration="900">ما در بازار صنعتی پیشرو هستیم</h1>
                    <Button text={"هم اکنون بخرید"} />
                    <p className=''  data-aos="fade-up" data-aos-duration="1000">
                        یا از طریق <span className=' text-decoration-underline '>tractor@industry.com</span> با ما تماس بگیرید
                    </p>
                </div>
            </Container>
        </div>
    )
}
