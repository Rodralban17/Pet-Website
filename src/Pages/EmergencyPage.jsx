import {React} from 'react';
import EmergencyHero from '../Components/EmergencyHero';
import EmergencyActionsDashboard from '../Components/EmergencyActionsDashboard';
import EmergencySymptomChecker from '../Components/EmergencySymptomChecker';
const EmergencyPage = () => {
  return (
   <div>  
         <main className=" ">
        <section className=" bg-[url('/bg.jpg')] bg-cover bg-center flex items-center justify-center">
         <EmergencyHero />
        </section>
        <EmergencyActionsDashboard />
        <EmergencySymptomChecker />
      </main>    
    </div>
  );
}
export default EmergencyPage;