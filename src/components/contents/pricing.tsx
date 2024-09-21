"use client";

import { plans } from '@/constants';
import { cn } from '@/lib/utils';
import { CircleArrowUp, CreditCard, Gem, Headset, Zap } from 'lucide-react';
import { useState } from 'react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import AnimationContainer from "../utils/animation-container";

interface Props {
    plan: {
        id: number;
        title: string;
        priceMonthly: string;
        priceYearly: string;
        buttonText: string;
        features: string[];
    };
}

type Plan = "monthly" | "annually";

const Pricing = () => {

    const [billPlan, setBillPlan] = useState<Plan>("monthly");

    const handleSwitch = () => {
        setBillPlan((prev) => (prev === "monthly" ? "annually" : "monthly"));
    };

    return (
        <div className="relative flex flex-col items-center justify-center max-w-5xl py-20 mx-auto">

            <div className="hidden lg:block absolute -bottom-1/4 -right-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>

            <div className="flex flex-col items-center justify-center max-w-2xl mx-auto">
                <AnimationContainer className="flex flex-col items-center justify-center">
                    <Badge size="lg" variant="outline">
                        <Gem className="w-4 h-4" />
                        <span className="ml-2 text-sm">Choose your plan</span>
                    </Badge>
                    <h2 className="mt-6 text-2xl font-semibold text-center lg:text-3xl xl:text-4xl">
                        Unlock the Right Plan for Your Business
                    </h2>
                    <p className="max-w-lg mt-6 text-center text-neutral-500">
                        Our pricing plans are designed to meet the needs of your business. Get started with our free plan and upgrade as you grow.
                    </p>
                </AnimationContainer>

                <AnimationContainer delay={0.2}>
                    <div className="flex items-center justify-center space-x-4 mt-6">
                        <span className="text-base font-medium">Monthly</span>
                        <button onClick={handleSwitch} className="relative rounded-full focus:outline-none">
                            <div className="w-12 h-6 transition rounded-full shadow-md outline-none bg-primary"></div>
                            <div
                                className={cn(
                                    "absolute inline-flex items-center justify-center w-4 h-4 transition-all duration-200 ease-in-out top-1 left-1 rounded-full bg-white",
                                    billPlan === "annually" ? "translate-x-6" : "translate-x-0"
                                )}
                            />
                        </button>
                        <span className="text-base font-medium">Annually</span>
                    </div>
                </AnimationContainer>
            </div>

            <div className="grid w-full grid-cols-1 gap-8 pt-8 lg:grid-cols-3 md:pt-12 lg:pt-16">
                {plans.map((plan, idx) => (
                    <AnimationContainer key={idx} delay={0.1 * idx + 0.1}>
                        <Plan key={plan.id} plan={plan} billPlan={billPlan} />
                    </AnimationContainer>
                ))}
            </div>

            <div className="flex items-center w-full mt-8 lg:justify-evenly flex-wrap justify-center gap-6 lg:mt-10">
                <AnimationContainer delay={0.2} className="flex items-center gap-x-2">
                    <CreditCard className="w-5 h-5 text-primaryLighter-foreground" />
                    <span className="text-neutral-500">100 % secure payments</span>
                </AnimationContainer>
                <AnimationContainer delay={0.25} className="flex items-center gap-x-2">
                    <Headset className="w-5 h-5 text-primaryLighter-foreground" />
                    <span className="text-neutral-500">Dedicated customer support</span>
                </AnimationContainer>
                <AnimationContainer delay={0.3} className="flex items-center gap-x-2">
                    <CircleArrowUp className="w-5 h-5 text-primaryLighter-foreground" />
                    <span className="text-neutral-500">Regular updates & improvements</span>
                </AnimationContainer>
            </div>
        </div>
    );
};

const Plan = ({ plan, billPlan }: Props & { billPlan: Plan }) => {
    return (
        <div
            className={cn(
                "flex flex-col rounded-2xl border cursor-pointer transition-all bg-background items-start w-full select-none",
                plan.title === "Standard" ? "border-primary/60 hover:border-primary" : "border-border/60 hover:border-muted-foreground/50"
            )}
        >
            <div
                className={cn(
                    "p-4 md:p-8 flex rounded-2xl flex-col items-start rounded-b-none border-b border-border/60 w-full relative",
                    plan.title === "Standard" ? "bg-primary/10" : "bg-neutral-500/10"
                )}
            >
                <span className="font-medium text-muted-foreground">{plan.title} Plan</span>
                <h3 className="mt-4 text-2xl font-medium md:text-3xl">{billPlan === "monthly" ? plan.priceMonthly : plan.priceYearly}</h3>
                <span className="mt-2 text-neutral-500">{billPlan === "monthly" ? "per month" : "per year"}</span>
                {plan.title === "Standard" && (
                    <span className="absolute border border-primary/60 bg-primary/20 top-3 right-3 rounded-full px-3 py-1.5 text-xs text-primary">
                        Most Popular
                    </span>
                )}
            </div>
            <div className="flex flex-col items-start w-full p-5 gap-y-4">
                {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center justify-start gap-2">
                        <div
                            className={cn(
                                "flex items-center justify-center w-5 h-5 rounded-full",
                                plan.title === "Standard" ? "bg-primary/20" : "bg-neutral-500/20"
                            )}
                        >
                            <Zap
                                className={cn(
                                    "w-3 h-3",
                                    plan.title === "Standard" ? "text-primary fill-primary" : "text-neutral-600 fill-neutral-600"
                                )}
                            />
                        </div>
                        <span className="text-neutral-500">{feature}</span>
                    </div>
                ))}
            </div>
            <div className="flex flex-col items-start w-full px-4 pt-2 pb-5 md:pb-6 md:px-6">
                <Button size="lg" variant={plan.title === "Standard" ? "default" : "white"} className="w-full">
                    {plan.buttonText}
                </Button>
                <span className="px-2 mt-4 text-sm text-muted-foreground">No credit card required</span>
            </div>
        </div>
    );
};

export default Pricing;
