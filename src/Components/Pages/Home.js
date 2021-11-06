import React from 'react';
import HeaderNav from '../Nav/HeaderNav';
import InfoGrid from '../InfoGrid';
import SocialMediaContainer from '../SocialMediaContainer';
import Rewards from '../Rewards';
import Donations from '../Donations';
import ContactUs from '../ContactUs';
import Footer from '../Pages/Footer';
const Home = () => {
    return (
        <div>
            <HeaderNav />

            {/* INFO GRID */}
            <InfoGrid />

            {/* Social Media Icons */}
            <SocialMediaContainer />

            {/* Rewards */}
            <Rewards />

            {/* Donations */}
            <Donations />

            {/* Contact Us */}
            <ContactUs />

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Home;