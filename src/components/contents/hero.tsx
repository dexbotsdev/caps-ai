"use client";

import { motion } from 'framer-motion';
import { CreditCard, History, Play } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import Icons from '../ui/icons';
import AnimationContainer from "../utils/animation-container";

const Hero = () => {

    const leftVariants = {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1 },
    };

    const rightVariants = {
        hidden: { x: 100, opacity: 0 },
        visible: { x: 0, opacity: 1 },
    };

    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">

            <div className="absolute flex sm:hidden w-72 h-72 rounded-full bg-primary blur-[10rem] -top-16 left-0 -z-10"></div>

            <div className="flex flex-col items-center justify-center max-w-3xl gap-y-8">
                <div className="flex flex-col items-center justify-center gap-y-4">
                    <AnimationContainer className="relative hidden lg:block overflow-hidden">
                        <Badge size="sm" variant="subtle" className="px-3 cursor-pointer">
                            <span className="px-2 py-[0.5px] h-[18px] tracking-wide flex items-center justify-center rounded-full bg-gradient-to-r from-orange-400 to-orange-600 text-[9px] font-medium mr-2 text-white">
                                NEW
                            </span>
                            <span>
                                Discover our latest AI-powered feature
                            </span>
                        </Badge>
                    </AnimationContainer>
                    <AnimationContainer delay={0.15}>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center !leading-tight">
                            <span className="text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 bg-clip-text font-bold !leading-tight">
                                Supercharge your {" "}
                            </span>
                            <span className="text-primary to-primaryLight-foreground">
                                social media {" "}
                            </span>
                            <span className="text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 bg-clip-text font-bold !leading-tight">
                                presence with AI
                            </span>
                        </h1>
                    </AnimationContainer>
                    <AnimationContainer delay={0.2}>
                        <p className="max-w-xl mt-2 text-base text-center text-accent-foreground/60">
                            Elevate your social media game with AI-powered caption generation and scheduling. <span className="hidden lg:inline">CapsAI is a powerful tool that uses AI to generate captivating captions from your photos.</span>
                        </p>
                        <div className="items-center justify-center hidden mt-6 lg:flex gap-x-4">
                            <Button size="lg" asChild>
                                <Link href="/auth/register">
                                    Start for free
                                </Link>
                            </Button>
                            <Button size="lg" variant="secondary" asChild>
                                <Link href="/" className="flex items-center">
                                    How it works
                                    <Play className="w-4 h-4 ml-2" />
                                </Link>
                            </Button>
                        </div>
                    </AnimationContainer>
                    <AnimationContainer delay={0.3}>
                        <div className="flex items-center justify-center mt-6 lg:hidden gap-x-4">
                            <Button asChild>
                                <Link href="/auth/register">
                                    Start for free
                                </Link>
                            </Button>
                            <Button variant="secondary" asChild>
                                <Link href="/" className="flex items-center">
                                    How it works
                                    <Play className="w-4 h-4 ml-2" />
                                </Link>
                            </Button>
                        </div>
                        <div className="flex items-center justify-center mt-2 gap-x-4">
                            <div className="flex items-center gap-x-2">
                                <History className="w-4 h-4 text-muted-foreground" />
                                <span className="text-sm text-muted-foreground">
                                    14-day free trial
                                </span>
                                <span className="text-muted-foreground">
                                    •
                                </span>
                            </div>
                            <div className="flex items-center gap-x-2">
                                <CreditCard className="w-4 h-4 text-muted-foreground" />
                                <span className="text-sm text-muted-foreground">
                                    No card required
                                </span>
                            </div>
                        </div>
                    </AnimationContainer>
                    <div className="hidden w-full lg:block">
                        <motion.div
                            variants={leftVariants}
                            initial="hidden"
                            animate="visible"
                            className="absolute left-0 flex items-center justify-center opacity-50 group top-1/2"
                        >
                            <div className="relative">
                                <Icons.facebook className="w-auto h-8" />
                            </div>
                        </motion.div>
                        <motion.div
                            variants={leftVariants}
                            initial="hidden"
                            animate="visible"
                            className="absolute flex items-center justify-center opacity-50 left-36 group bottom-1/4"
                        >
                            <div className="relative">
                                <Icons.instagram className="w-auto h-8" />
                            </div>
                        </motion.div>
                        <motion.div
                            variants={rightVariants}
                            initial="hidden"
                            animate="visible"
                            className="absolute right-0 flex items-center justify-center opacity-50 group top-1/2"
                        >
                            <div className="relative">
                                <Icons.twitter className="w-auto h-8" />
                            </div>
                        </motion.div>
                        <motion.div
                            variants={rightVariants}
                            initial="hidden"
                            animate="visible"
                            className="absolute flex items-center justify-center opacity-50 right-36 group bottom-1/4"
                        >
                            <div className="relative">
                                <Icons.linkedin className="w-auto h-8" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Hero
