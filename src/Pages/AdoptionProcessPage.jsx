import {React} from 'react';
import AdoptionHeader from '../Components/AdoptionHeader';
import InteractivePlacementSteps from '../Components/AdopotionSteps';
import RequiredDocumentation from '../Components/RequiredDocumentation';
import CostCalculator from '../Components/CostCalculator';
import PlacementAssessment from '../Components/PlacementAssessment';
import MarketplaceCTA from '../Components/MarketplaceCTA';
const AdoptionProcessPage = () => {
  return (
   <div>  
         <main className=" ">
        <section className=" bg-[url('/bg.jpg')] bg-cover bg-center flex items-center justify-center">
         <AdoptionHeader/>
        </section>
        <InteractivePlacementSteps/>
        <RequiredDocumentation/>
        <CostCalculator/>
        <PlacementAssessment/>
        <MarketplaceCTA/>
      </main>    
    </div>
  );
}
export default AdoptionProcessPage;