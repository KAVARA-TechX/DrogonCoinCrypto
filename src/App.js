import './App.css';
import HeaderNav from './Components/Nav/HeaderNav';
import InfoGrid from './Components/InfoGrid';
import SocialMediaContainer from './Components/SocialMediaContainer';
import Rewards from './Components/Rewards';
import Donations from './Components/Donations';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Pages/Footer';
function App() {
  return (
    <div>
      
      <HeaderNav/>

      {/* INFO GRID */}
      <InfoGrid/>
      
      {/* Social Media Icons */}
      <SocialMediaContainer/>

      {/* Rewards */}
      <Rewards/>

      {/* Donations */}
      <Donations/>

      {/* Contact Us */}
      <ContactUs/>

      {/* Footer */}
      <Footer/>
    </div>
  );
}
//

export default App;
