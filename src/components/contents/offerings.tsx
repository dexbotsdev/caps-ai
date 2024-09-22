import { offerings } from '@/constants';
import { LifeBuoy, LucideIcon } from 'lucide-react';
import { Badge } from '../ui/badge';
import Images from "../ui/images";
import AnimationContainer from "../utils/animation-container";

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

            <AnimationContainer>
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
                        <Images.offer className="w-full h-[350px] md:h-[450px]" />
                    </div>
                </div>
            </AnimationContainer>

            <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-5xl gap-y-4 mt-4 lg:mt-16">
                {offerings.map((offering, index) => (
                    <AnimationContainer key={offering.id} delay={0.1 * index + 0.1}>
                        <Offering key={offering.id} {...offering} />
                    </AnimationContainer>
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
};

export default Offerings
