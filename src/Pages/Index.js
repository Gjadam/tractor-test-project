import React from 'react'
import TopBar from '../Components/Templates/TopBar/TopBar'
import Header from '../Components/Templates/Header/Header'
import Articles from '../Components/Templates/Articles/Articles'
import About from '../Components/Templates/About/About'
import Information from '../Components/Templates/Information/Information'
import Projects from '../Components/Templates/Projects/Projects'
import Customers from '../Components/Templates/Customers/Customers'
import News from '../Components/Templates/News/News'
import Advertise from '../Components/Templates/Advertise/Advertise'
import ContactUs from '../Components/Templates/ContactUs/ContactUs'

export default function Index() {
    return (
        <>
            <TopBar />
            <Header />
            <Articles />
            <About />
            <Information />
            <Projects />
            <Customers />
            <News />
            <Advertise />
            <ContactUs />
        </>
    )
}
