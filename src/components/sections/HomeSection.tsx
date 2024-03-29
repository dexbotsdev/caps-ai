import React from 'react'
import SectionContainer from '../utils/SectionContainer'
import Hero from '../contents/Hero'
import AnimationContainer from '../utils/AnimationContainer';
import Icons from '../ui/Icons';
import HeroImage from '../utils/HeroImage';
import WhyUs from '../contents/WhyUs';
import Companies from '../contents/Companies';
import Services from '../contents/Services';
import Features from '../contents/Features';
import Offerings from '../contents/Offerings';
import Pricing from '../contents/Pricing';
import Banner from '../contents/Banner';
import Testimonial from '../contents/Testimonial';
import Tools from '../contents/Tools';
import Newsletter from '../contents/Newsletter';
import Footer from '../contents/Footer';

const HomeSection = () => {
    return (
        <SectionContainer>

            <div className="relative flex flex-col items-start justify-center w-full mx-auto">

                <AnimationContainer customClassName="mx-auto relative flex flex-col items-cennter justify-center w-full">

                    <Hero />

                    <HeroImage />

                    <Companies />

                    <Services />

                    <Features />

                    <Offerings />

                    <Pricing />

                    <Testimonial />

                    <Tools />

                    <Banner />

                    {/* <Footer /> */}

                </AnimationContainer>

            </div>

        </SectionContainer>
    )
};

export default HomeSection
