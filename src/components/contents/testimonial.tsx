"use client";

import { testimonials } from '@/constants';
import { motion } from 'framer-motion';
import { User, Users } from 'lucide-react';
import { Badge } from '../ui/badge';
import Marquee from "../ui/marquee";
import AnimationContainer from "../utils/animation-container";

interface Props {
    testimonial: {
        name: string;
        username: string;
        review: string;
    }
}

const Testimonial = () => {
    return (
        <div className="relative flex flex-col items-center justify-center py-20">

            <div className="hidden lg:block absolute -translate-x-1/2 rounded-full blur-[10rem] translate-y-1/4 -z-10 left-1/2 top-1/2 w-72 h-60 bg-primary/60"></div>

            <AnimationContainer>
                <div className="flex flex-col items-center justify-center max-w-2xl mx-auto">
                    <Badge
                        size="lg"
                        variant="outline"
                    >
                        <Users className="w-4 h-4" />
                        <span className="ml-2 text-sm">
                            Our Customers
                        </span>
                    </Badge>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2, type: 'spring', stiffness: 100 }}
                        className="mt-6 text-2xl font-semibold text-center lg:text-3xl xl:text-4xl">
                        What people are saying
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4, type: 'spring', stiffness: 100 }}
                        className="max-w-lg mt-6 text-center text-neutral-500">
                        We are very proud of the service we provide and stand by every product we carry. Read our testimonials from our happy customers.
                    </motion.p>
                </div>
            </AnimationContainer>

            <div className="mt-8 py-8 w-full relative flex flex-col items-center justify-center overflow-hidden">
                <AnimationContainer delay={0.2}>
                    <Marquee pauseOnHover className="[--duration:100s] select-none">
                        {testimonials.map((testimonial) => (
                            <TestimonialItem key={testimonial.name} testimonial={testimonial} />
                        ))}
                    </Marquee>
                </AnimationContainer>
                <AnimationContainer delay={0.25}>
                    <Marquee reverse pauseOnHover className="[--duration:100s] select-none">
                        {testimonials.map((testimonial) => (
                            <TestimonialItem key={testimonial.name} testimonial={testimonial} />
                        ))}
                    </Marquee>
                </AnimationContainer>
            </div>

        </div>
    )
};

const TestimonialItem = ({ testimonial }: Props) => {
    return (
        <div className="relative flex flex-col items-start px-6 py-8 bg-background overflow-hidden border rounded-lg cursor-pointer select-none inner-shadow h-min border-border/70 max-w-full md:w-80 group">
            <div className="absolute right-8 bottom-0 bg-foreground/50 group-hover:opacity-100 opacity-0 transition-opacity w-44 h-12 duration-500 rounded-full blur-[6rem] z-10"></div>
            <div className="flex items-center justify-start w-full">
                <div className="flex items-center justify-center border-2 rounded-full w-9 h-9 bg-neutral-800/80 border-white/10">
                    <User className="w-5 h-5 text-foreground" />
                </div>
                <div className="flex flex-col items-start ml-4">
                    <h5 className="text-base font-medium">
                        {testimonial.name}
                    </h5>
                    <span className="text-xs text-muted-foreground">
                        {testimonial.username}
                    </span>
                </div>
            </div>
            <div className="flex items-start mt-4">
                <p className="text-sm text-justify text-neutral-500">
                    {testimonial.review}
                </p>
            </div>
        </div>
    )
}

export default Testimonial
