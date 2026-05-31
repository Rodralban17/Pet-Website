import {React} from 'react';
import AdoptionHeader from '../Components/AdoptionHeader';
import InteractivePlacementSteps from '../Components/AdopotionSteps';
const AdoptionProcessPage = () => {
  return (
   <div>  
         <main className=" ">
        <section className=" bg-[url('/bg.jpg')] bg-cover bg-center flex items-center justify-center">
         <AdoptionHeader/>
        </section>
        <InteractivePlacementSteps/>
      </main>    
    </div>
  );
}
export default AdoptionProcessPage;