import React from 'react'
import SectionContainer from '../utils/SectionContainer'
import Hero from '../contents/Hero'
import AnimationContainer from '../utils/AnimationContainer';
import Icons from '../ui/Icons';

const HomeSection = () => {
    return (
        <SectionContainer>

            <div className="flex flex-col items-start justify-center w-full">

                <AnimationContainer customClassName="mx-auto relative">

                    <Hero />

                </AnimationContainer>

                <div className="flex items-center justify-center w-full max-w-4xl mx-auto">
                    <Icons.dashboard className="w-full h-full" />
                </div>

            </div>

        </SectionContainer>
    )
};

export default HomeSection
