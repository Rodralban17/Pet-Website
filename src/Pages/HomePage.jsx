import {React} from 'react';
import HeroSection from '../Components/HeroSection';
// import AboutUsSection from '../Components/AboutUs Section';
// import StatisticsSection from '../Components/Counter';
// import ServicesSlider from '../Components/WhatWeDo';
// import TeamSection from '../Components/TeamSection';
// import Reviews from '../Components/TestimonialCard';
// import Missions from '../Components/OurMissions';
const HomePage = () => {
  return (
   <div>  
         <main className=" ">
        <section className=" bg-[url('/bg.jpg')] bg-cover bg-center flex items-center justify-center">
         <HeroSection/>
        </section>
        {/* <AboutUsSection/>
        <StatisticsSection/>
        <ServicesSlider/>
        <TeamSection/>
        <Reviews/>
        <Missions/> */}
      </main>    
    </div>
  );
}
export default HomePage;