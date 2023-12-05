import React from 'react'
import TopBar from '../Components/Templates/TopBar/TopBar'
import Header from '../Components/Templates/Header/Header'
import Articles from '../Components/Templates/Articles/Articles'
import About from '../Components/Templates/About/About'
import Information from '../Components/Templates/Information/Information'

export default function Index() {
    return (
        <>
            <TopBar />
            <Header />
            <Articles />
            <About />
            <Information />
        </>
    )
}
