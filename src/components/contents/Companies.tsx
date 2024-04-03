"use client";

import React from 'react'
import Icons from '../ui/Icons';
import { motion } from 'framer-motion';

const Companies = () => {

    const companies = [Icons.compone, Icons.ctwo, Icons.cfive];

    return (
        <div className="flex flex-col items-center justify-center w-full max-w-5xl py-20 mx-auto">
            <div className="flex flex-col items-center justify-center w-full px-4 mx-auto lg:px-8">
                <div className="flex flex-col items-center justify-center">
                    <h4 className="text-lg text-neutral-500">
                        Companies that trust us
                    </h4>
                </div>
                <div className="relative flex items-center w-full mt-8 overflow-hidden mask">
                    <ul className="flex w-full max-w-full place-items-center gap-x-12 marquee">
                        {[...Array(20)].map((_, index) => (
                            <li key={index}>
                                <div>
                                    {companies[index % companies.length]({ className: "w-auto h-24" })}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="relative flex items-center -mt-20">
                    <Icons.lines className="z-10 w-full h-auto" />
                    <div className="absolute left-[calc(50%-20px)] z-20 -bottom-6 w-16 h-16 rounded-full bg-primary/70 lg:bg-primary blur-2xl"></div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
                        className="absolute flex items-center justify-center -bottom-8 md:-bottom-8 left-[calc(50%-25px)] md:left-[calc(50%-20px)] z-30">
                        <Icons.icon2 className="z-10 w-16 h-16" />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Companies
