import {React} from 'react';
import HeroSection from '../Components/HeroSection';
import PetGridSection from '../Components/PetGridSection';
import MarketplaceProcess from '../Components/MarketplaceProcess';
import TrustAndReviews from '../Components/TrustAndReviews';
const HomePage = () => {
  return (
   <div>  
         <main className=" ">
        <section className=" bg-[url('/bg.jpg')] bg-cover bg-center flex items-center justify-center">
         <HeroSection/>
        </section>
        <PetGridSection/>
        <MarketplaceProcess/>
        <TrustAndReviews/>
      </main>    
    </div>
  );
}
export default HomePage;