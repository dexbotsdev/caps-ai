import React from 'react'
import { Badge } from '../ui/Badge'
import { LineChart, LucideIcon, Zap } from 'lucide-react'
import Icons from '../ui/Icons'
import { badges, features } from '@/constants';

interface ItemProps {
    title: string;
    icon: LucideIcon;
}

interface FeatureProps {
    title: string;
    description: string;
    icon: LucideIcon;
}

const Features = () => {
    return (
        <div className="flex flex-col relative items-center justify-center py-20">

            <div className="absolute -top-1/10 -left-1/5 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>

            <div className="flex flex-col items-center justify-center mx-auto max-w-2xl">
                <Badge size="lg" variant="outline">
                    <Icons.bolt className="w-4 h-4" />
                    <span className="ml-2 text-sm">
                        AI-Powered Features
                    </span>
                </Badge>
                <h2 className="text-2xl mt-6 lg:text-3xl font-semibold text-center xl:text-4xl">
                    Innovative features for even more convenience
                </h2>
                <p className="mt-6 text-center text-neutral-500 max-w-lg">
                    Our platform is packed with innovative features to help you get the most out of your experience.
                </p>
            </div>

            <div className="flex flex-col items-center justify-center max-w-5xl mt-8 lg:mt-10 mask-2">
                <div className="flex flex-wrap items-center justify-center w-full gap-4 lg:gap-8 lg:ml-40">
                    {badges.slice(0, 5).map((badge) => (
                        <Item key={badge.id} title={badge.title} icon={badge.icon} />
                    ))}
                </div>
                <div className="flex flex-wrap items-center justify-center w-full gap-4 lg:gap-8 mt-4">
                    {badges.slice(5).map((badge) => (
                        <Item key={badge.id} title={badge.title} icon={badge.icon} />
                    ))}
                </div>
            </div>

            <div className="flex flex-col relative items-center justify-center h-full w-full mt-8">
                <div className="w-full flex items-center justify-center">
                    <div className="flex relative max-w-4xl">
                        <div className="absolute h-full pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
                        <Icons.grad className="w-full h-[650px]" />
                    </div>
                    {/* <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 z-10">
                        <Icons.icon2 className="w-32 h-32" />
                    </div> */}
                </div>
                <div className="absolute flex flex-col items-center justify-center inset-0 z-20 w-full lg:px-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-10 lg:gap-40 w-full">
                        <div className="flex flex-col gap-40 items-center justify-center w-full">
                            {features.slice(0, 2).map((feature) => (
                                <Feature key={feature.id} title={feature.title} description={feature.description} icon={feature.icon} />
                            ))}
                        </div>
                        <div className="flex flex-col gap-40 items-center justify-center w-full">
                            {features.slice(2).map((feature) => (
                                <Feature key={feature.id} title={feature.title} description={feature.description} icon={feature.icon} />
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center justify-evenly w-full mt-auto bottom-0">
                        <div className="flex flex-col items-start">
                            <h3 className="text-2xl md:text-4xl font-medium text-transparent bg-gradient-to-b from-neutral-50 to-neutral-600 bg-clip-text">
                                40.9k
                            </h3>
                            <span className="text-muted-foreground text-sm">
                                Teams
                            </span>
                        </div>
                        <div className="flex flex-col items-start">
                            <h3 className="text-2xl md:text-4xl font-medium text-transparent bg-gradient-to-b from-neutral-50 to-neutral-600 bg-clip-text">
                                21.2k
                            </h3>
                            <span className="text-muted-foreground text-sm">
                                Users
                            </span>
                        </div>
                        <div className="flex flex-col items-start">
                            <h3 className="text-2xl md:text-4xl font-medium text-transparent bg-gradient-to-b from-neutral-50 to-neutral-600 bg-clip-text">
                                10.5k
                            </h3>
                            <span className="text-muted-foreground text-sm">
                                Projects
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};

const Item = ({ title, icon: Icon }: ItemProps) => {
    return (
        <div className="flex flex-col items-center justify-center select-none">
            <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-6 h-6 rounded-sm bg-primary/20 border border-primary">
                    <Icon className="w-3 h-3 text-neutral-50" />
                </div>
                <span className="text-sm text-neutral-100 font-normal">
                    {title}
                </span>
            </div>
        </div>
    )
};

const Feature = ({ title, description, icon: Icon, }: FeatureProps) => {
    return (
        <div className="flex flex-col items-center justify-center opacity-70 hover:opacity-100">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/20 border border-primary">
                <Icon className="w-5 h-5 text-white" />
            </div>
            <span className="text-base text-neutral-100 font-medium mt-5">
                {title}
            </span>
            <p className="text-muted-foreground text-sm mt-2 text-center max-w-xs">
                {description}
            </p>
        </div>
    )
};

export default Features
