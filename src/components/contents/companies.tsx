"use client";

import { motion } from 'framer-motion';
import Icons from '../ui/icons';
import Marquee from "../ui/marquee";
import AnimationContainer from "../utils/animation-container";
import Images from "../ui/images";

const Companies = () => {

    const companies = [Images.cone, Images.ctwo, Images.cthree];

    return (
        <div className="flex flex-col items-center justify-center w-full max-w-5xl py-20 mx-auto">
            <div className="flex flex-col items-center justify-center w-full px-4 mx-auto lg:px-8">
                <AnimationContainer>
                    <div className="flex flex-col items-center justify-center">
                        <h4 className="text-lg text-neutral-500">
                            Companies that trust us
                        </h4>
                    </div>
                </AnimationContainer>
                <AnimationContainer delay={0.1} className="relative max-w-7xl">
                    <div className="relative flex items-center w-full mt-8 overflow-hidden mask">
                        <Marquee className="[--duration:40s] select-none [--gap:2rem]">
                            {[...Array(10)].map((_, index) => (
                                <div key={index} className="flex items-center justify-center w-24 h-24">
                                    {companies[index % companies.length]({ className: "w-auto h-24" })}
                                </div>
                            ))}
                        </Marquee>
                    </div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background z-50"></div>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background z-50"></div>
                </AnimationContainer>
                <AnimationContainer delay={0.2}>
                    <div className="relative flex items-center -mt-20">
                        <Images.lines className="z-10 w-full h-auto" />
                        <div className="absolute left-[calc(50%-20px)] z-20 -bottom-6 w-16 h-16 rounded-full bg-primary/70 lg:bg-primary blur-2xl"></div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
                            className="absolute flex items-center justify-center -bottom-8 md:-bottom-8 left-[calc(50%-25px)] md:left-[calc(50%-20px)] z-30">
                            <Icons.icon2 className="z-10 w-16 h-16" />
                        </motion.div>
                    </div>
                </AnimationContainer>
            </div>
        </div>
    )
};

export default Companies
