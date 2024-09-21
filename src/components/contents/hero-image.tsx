'use client';
import Tilt from 'react-parallax-tilt';
import { useDragControls } from "framer-motion";
import Icons from '../ui/icons';
import AnimationContainer from "../utils/animation-container";
import { useEffect, useState } from "react";

const HeroImage = () => {

    const [[manualTiltAngleX, manualTiltAngleY], setManualTiltAngle] = useState([40, 0]);

    useEffect(() => {
        const handleScroll = () => {
            const newTiltAngleX = Math.max(0, 20 - window.scrollY * 0.05); // Adjust scroll factor here

            setManualTiltAngle([newTiltAngleX, manualTiltAngleY]);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [manualTiltAngleX, manualTiltAngleY]);

    return (
        <AnimationContainer delay={0.4} className="relative flex items-center justify-center w-full pb-20 mx-auto">
            <div className="flex items-center justify-center max-w-4xl mx-auto">
                <Tilt
                    className="w-full h-full"
                    tiltAngleXManual={manualTiltAngleX}
                    tiltMaxAngleX={40}
                    tiltAngleYManual={manualTiltAngleY}
                    transitionSpeed={2000}
                    glareEnable={false}
                >
                    <Icons.dashboard className="w-full h-full" />
                </Tilt>
            </div>
            <div className="absolute hidden lg:flex items-center justify-center max-w-md bottom-[5%] left-[5%]">
                <Icons.leftboard className="w-full h-full" />
            </div>
            <div className="absolute hidden lg:flex items-center justify-center max-w-xs bottom-[15%] right-[5%]">
                <Icons.rightboard className="w-full h-full" />
            </div>
        </AnimationContainer>
    )
};

export default HeroImage
