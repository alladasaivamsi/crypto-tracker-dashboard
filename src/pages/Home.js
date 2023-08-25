import React from 'react';
import Header from "../components/Common/Header/Header";
import MainComponent from "../components/LandingPage/MainComponent/MainComponent"
import Footer from "../components/Common/Footer/Footer";

function HomePage() {
  return (
    <div className = "homepage">
        <Header />
        <MainComponent />
        <Footer/>
    </div>
  )
}

export default HomePage;