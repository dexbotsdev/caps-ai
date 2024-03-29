import React from 'react'
import Icons from '../ui/Icons'

const Services = () => {
    return (
        <div className="flex items-center justify-center w-full py-20">
            <div className="flex flex-col items-center w-full">
                <div className="grid w-full place-items-center grid-cols-1 p-6 md:p-8 md:grid-cols-[.55fr_1fr] rounded-2xl bg-[#121212]/50 border border-border/40">
                    <div className="flex flex-col items-start justify-center lg:pl-6">
                        <h4 className="text-xl font-semibold lg:text-2xl">
                            Explore our services
                        </h4>
                        <p className="mt-4 text-neutral-500 lg:text-lg">
                            We provide the best services for our customers with the best quality and the best price.
                        </p>
                    </div>
                    <div className="flex items-center justify-center w-full mt-8 sm:mt-0 lg:py-4 lg:px-10">
                        <Icons.service className="w-full h-auto md:h-72" />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_.65fr] w-full gap-8 mt-8">
                    <div className="flex flex-col items-start w-full px-6 py-6 border border-border/40 bg-[#121212]/50 rounded-2xl lg:px-8 lg:py-6">
                        <Icons.service2 className="w-full h-auto px-8" />
                        <div className="flex flex-col items-start lg:pl-6">
                            <h5 className="mt-8 text-xl font-semibold lg:text-2xl">
                                Improves your business
                            </h5>
                            <p className="mt-2 lg:max-w-sm text-neutral-500">
                                We provide the best services for our customers with the best quality and the best price.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start w-full px-6 py-6 border border-border/40 bg-[#121212]/50 rounded-2xl lg:px-8 lg:py-8">
                        <h5 className="text-xl font-semibold lg:text-2xl">
                            Speed automation
                        </h5>
                        <p className="mt-2 lg:max-w-xs text-neutral-500">
                            Improve your business with our services and speed up your automation.
                        </p>
                        <div className="flex items-center w-full px-16 lg:px-0">
                            <Icons.service3 className="w-full h-auto mt-6" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[0.55fr_1fr] w-full gap-8 mt-8">
                    <div className="flex flex-col items-start justify-center w-full p-6 border lg:p-8 xl:p-10 border-border/40 bg-[#121212]/50 rounded-2xl">
                        <div className="flex items-center w-full px-16 lg:px-0">
                            <Icons.service4 className="w-full h-full" />
                        </div>
                        <div className="flex flex-col items-start mt-4 lg:mt-auto lg:pl-2">
                            <h5 className="text-xl font-semibold lg:text-2xl">
                                It's safe and effective
                            </h5>
                            <p className="mt-2 lg:max-w-sm text-neutral-500">
                                Chat with our bot to get the best services for your business.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start w-full p-6 border lg:p-8 border-border/40 bg-[#121212]/50 rounded-2xl">
                        <div className="flex flex-col items-start lg:pl-2">
                            <h5 className="text-xl font-semibold lg:text-2xl">
                                Control your audience
                            </h5>
                            <p className="mt-2 lg:max-w-sm text-neutral-500">
                                Take your business to the next level with insights and analytics.
                            </p>
                        </div>
                        <div className="flex items-center w-full mt-8">
                            <Icons.service5 className="w-full h-60 px-8" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
