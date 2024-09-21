"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AnimatePresence, motion } from 'framer-motion';
import { Spin as Hamburger } from 'hamburger-react';
import { ArrowRight, Box, CalendarClock, Captions, CircleHelp, CopyCheck, FileText, Gem, Layers3, LineChart, Newspaper, UserCog, Waypoints } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import Icons from '../ui/icons';

const MobileNavbar = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "100%" },
    };

    useEffect(() => {
        const handleBodyOverflow = () => {
            document.body.style.overflow = isOpen ? 'hidden' : 'auto';
        };

        handleBodyOverflow();

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    return (
        <div className="relative flex w-full h-16 backdrop-blur-md lg:hidden">
            <div className="relative flex items-center justify-between w-full px-5">

                <Link href="/">
                    <Icons.logo className="w-auto h-6" />
                </Link>

                <div className="relative flex z-[99999] items-center">
                    <Hamburger
                        toggled={isOpen}
                        toggle={setIsOpen}
                        color="#fff"
                        direction='left'
                        distance='md'
                        size={20}
                        rounded
                    />
                </div>

                <AnimatePresence presenceAffectsLayout>
                    {isOpen && (
                        <motion.div
                            initial="closed"
                            animate={isOpen ? "open" : "closed"}
                            variants={variants}
                            transition={{
                                type: "spring",
                                bounce: 0.15,
                                duration: 0.5,
                            }}
                            className="absolute z-[9999] rounded-lg w-full min-h-screen h-lvh flex flex-col inset-0 bg-background"
                        >
                            <ul className="flex flex-col items-start flex-1 w-full px-6 py-3 pt-20 space-y-3">
                                <li
                                    onClick={() => setIsOpen(false)}
                                    className="w-full px-4 py-2 text-base font-normal transition transform rounded-md cursor-pointer text-foreground text-start active:scale-95 hover:bg-neutral-900 active:opacity-80"
                                >
                                    <Link href="/how-it-works" className="flex items-center w-full text-start">
                                        <UserCog className="w-4 h-4 mr-2" />
                                        How it works
                                    </Link>
                                </li>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1" className="border-transparent">
                                        <AccordionTrigger className="px-4 py-2 text-base font-normal">
                                            <span className="flex items-center">
                                                <CopyCheck className="w-4 h-4 mr-2" />
                                                Features
                                            </span>
                                        </AccordionTrigger>
                                        <AccordionContent onClick={() => setIsOpen(false)} className="flex flex-col items-start gap-1 mt-1">
                                            <li
                                                className="w-full px-4 py-2 text-sm font-normal transition transform rounded-md cursor-pointer text-muted-foreground text-start active:scale-95 hover:bg-neutral-900 active:opacity-80"
                                            >
                                                <Link href="/" className="flex items-center w-full text-start">
                                                    <Captions className="w-4 h-4 mr-2" />
                                                    Caption Generation
                                                </Link>
                                            </li>
                                            <li
                                                className="w-full px-4 py-2 text-sm font-normal transition transform rounded-md cursor-pointer text-muted-foreground text-start active:scale-95 hover:bg-neutral-900 active:opacity-80"
                                            >
                                                <Link href="/" className="flex items-center w-full text-start">
                                                    <CalendarClock className="w-4 h-4 mr-2" />
                                                    Post Scheduling
                                                </Link>
                                            </li>
                                            <li
                                                className="w-full px-4 py-2 text-sm font-normal transition transform rounded-md cursor-pointer text-muted-foreground text-start active:scale-95 hover:bg-neutral-900 active:opacity-80"
                                            >
                                                <Link href="/" className="flex items-center w-full text-start">
                                                    <LineChart className="w-4 h-4 mr-2" />
                                                    Analytics Dashboard
                                                </Link>
                                            </li>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                                <li
                                    onClick={() => setIsOpen(false)}
                                    className="w-full px-4 py-2 text-base font-normal transition transform rounded-md cursor-pointer text-foreground text-start active:scale-95 hover:bg-neutral-900 active:opacity-80"
                                >
                                    <Link href="/" className="flex items-center w-full text-start">
                                        <Gem className="w-4 h-4 mr-2" />
                                        Pricing
                                    </Link>
                                </li>
                                <li
                                    onClick={() => setIsOpen(false)}
                                    className="w-full px-4 py-2 text-base font-normal transition transform rounded-md cursor-pointer text-foreground text-start active:scale-95 hover:bg-neutral-900 active:opacity-80"
                                >
                                    <Link href="/" className="flex items-center w-full text-start">
                                        <Waypoints className="w-4 h-4 mr-2" />
                                        Integrations
                                    </Link>
                                </li>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1" className="border-transparent">
                                        <AccordionTrigger className="px-4 py-2 text-base font-normal">
                                            <span className="flex items-center">
                                                <Layers3 className="w-4 h-4 mr-2" />
                                                Resources
                                            </span>
                                        </AccordionTrigger>
                                        <AccordionContent onClick={() => setIsOpen(false)} className="flex flex-col items-start gap-1 mt-1">
                                            <li
                                                className="w-full px-4 py-2 text-sm font-normal transition transform rounded-md cursor-pointer text-muted-foreground text-start active:scale-95 hover:bg-neutral-900 active:opacity-80"
                                            >
                                                <Link href="/" className="flex items-center w-full text-start">
                                                    <Newspaper className="w-4 h-4 mr-2" />
                                                    Blog
                                                </Link>
                                            </li>
                                            <li
                                                className="w-full px-4 py-2 text-sm font-normal transition transform rounded-md cursor-pointer text-muted-foreground text-start active:scale-95 hover:bg-neutral-900 active:opacity-80"
                                            >
                                                <Link href="/" className="flex items-center w-full text-start">
                                                    <FileText className="w-4 h-4 mr-2" />
                                                    Case Studies
                                                </Link>
                                            </li>
                                            <li
                                                className="w-full px-4 py-2 text-sm font-normal transition transform rounded-md cursor-pointer text-muted-foreground text-start active:scale-95 hover:bg-neutral-900 active:opacity-80"
                                            >
                                                <Link href="/" className="flex items-center w-full text-start">
                                                    <Box className="w-4 h-4 mr-2" />
                                                    Tools
                                                </Link>
                                            </li>
                                            <li
                                                className="w-full px-4 py-2 text-sm font-normal transition transform rounded-md cursor-pointer text-muted-foreground text-start active:scale-95 hover:bg-neutral-900 active:opacity-80"
                                            >
                                                <Link href="/" className="flex items-center w-full text-start">
                                                    <CircleHelp className="w-4 h-4 mr-2" />
                                                    Support
                                                </Link>
                                            </li>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </ul>

                            <div className="flex flex-col items-center justify-center w-full gap-4 p-6 mt-auto">
                                <Button variant="secondary" className="w-full" asChild>
                                    <Link href="/auth/login" className="w-full">
                                        Login
                                    </Link>
                                </Button>
                                <Button className="w-full" asChild>
                                    <Link href="/auth/register" className="flex items-center w-full">
                                        Start for free
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </div>
    )
};

export default MobileNavbar
