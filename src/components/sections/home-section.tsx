import React from 'react'
import SectionContainer from '../utils/section-container'
import Hero from '../contents/hero'
import AnimationContainer from '../utils/animation-container';
import Icons from '../ui/icons';
import HeroImage from '../utils/hero-image';
import WhyUs from '../contents/whyus';
import Companies from '../contents/companies';
import Services from '../contents/services';
import Features from '../contents/features';
import Offerings from '../contents/offerings';
import Pricing from '../contents/pricing';
import Banner from '../contents/banner';
import Testimonial from '../contents/testimonial';
import Tools from '../contents/tools';
import Newsletter from '../contents/newsletter';
import Footer from '../contents/footer';

const HomeSection = () => {
    return (
        <SectionContainer>

            <div className="relative flex flex-col items-start justify-center w-full mx-auto">

                <div className="mx-auto relative flex flex-col items-cennter justify-center w-full">

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

                </div>

            </div>

        </SectionContainer>
    )
};

export default HomeSection
