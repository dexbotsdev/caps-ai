import React from 'react'
import { Badge } from '../ui/Badge'
import Icons from '../ui/Icons'
import { LifeBuoy, LucideIcon } from 'lucide-react'
import { offerings } from '@/constants';
import { Button } from '../ui/Button';

interface Props {
    title: string;
    description: string;
    icon: LucideIcon;
}

const Offerings = () => {
    return (
        <div className="flex flex-col relative items-center justify-center py-20">

            <div className="hidden lg:block absolute top-0 -right-1/5 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>
            <div className="hidden lg:block absolute -bottom-1/4 -left-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>

            <div className="flex flex-col items-center justify-center mx-auto max-w-2xl">
                <Badge size="lg" variant="outline">
                    <LifeBuoy className="w-4 h-4" />
                    <span className="ml-2 text-sm">
                        Everything on track
                    </span>
                </Badge>
                <h2 className="text-2xl mt-6 lg:text-3xl font-semibold text-center xl:text-4xl">
                    Thousand ways to manage your business
                </h2>
                <p className="mt-6 text-center text-neutral-500 max-w-lg">
                    Keep your business on track with our innovative offerings to help you get the most out of your experience.
                </p>
                <div className="flex items-center relative w-full">
                    <Icons.offer className="w-full h-[350px] md:h-[450px]" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-5xl gap-y-4 mt-4 lg:mt-16">
                {offerings.map((offering) => (
                    <Offering key={offering.id} {...offering} />
                ))}
            </div>
        </div>
    )
};

const Offering = ({ title, description, icon: Icon }: Props) => {
    return (
        <div className="flex flex-col items-start p-4">
            <div className="flex items-center justify-center w-10 h-10 bg-background border-2 border-primaryLight-foreground/80 icon-border rounded-md">
                <Icon className="w-5 h-5" />
            </div>
            <h3 className="text-base font-medium mt-4">
                {title}
            </h3>
            <p className="text-sm text-muted-foreground mt-2">
                {description}
            </p>
        </div>
    )
}

export default Offerings
