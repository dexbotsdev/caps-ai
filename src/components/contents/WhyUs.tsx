import React from 'react'
import { Badge } from '../ui/badge'
import Icons from '../ui/icons'
import Image from 'next/image'

const WhyUs = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full pb-20">
            <div className="flex flex-col items-center justify-center w-full xl:px-20">
                {/* <Badge size="lg" variant="outline" className="px-5 cursor-pointer">
                    In the spotlight
                </Badge> */}
                <div className="grid grid-cols-1 py-4 md:grid-cols-2 gap-x-8">
                    <h2 className="text-xl font-bold lg:text-3xl xl:text-5xl">
                        Why CapsAI?
                    </h2>
                    <p className="text-base font-medium text-muted-foreground text-start">
                        CapsAI is a powerful tool that uses AI to generate captivating captions from your photos. It is a simple and easy-to-use tool that can help you save time and effort in creating captions for your posts.
                    </p>
                </div>
                <div className="grid w-full grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
                    <div className="flex flex-col items-start p-4 border md:p-8 bg-neutral-900/60 rounded-xl lg:rounded-2xl border-border">
                        <div className="flex items-center w-full">
                            <Icons.inputbox className="w-full h-auto" />
                        </div>
                        <div className="flex flex-col items-start px-2 mt-auto">
                            <h3 className="mt-4 text-xl font-semibold lg:text-2xl xl:text-4xl">
                                Come up with creative captions
                            </h3>
                            <p className="mt-2 text-base lg:text-lg text-muted-foreground">
                                CapsAI can help you come up with creative captions for your photos. It uses AI to generate captions that are tailored to your photos, making them more engaging and interesting.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start flex-1 w-full gap-8">
                        <div className="flex flex-col flex-[0.7] items-start p-4 bg-neutral-900/60 md:p-8 w-full rounded-xl lg:rounded-2xl border border-border">
                            <div className="flex flex-col items-start px-2">
                                <h3 className="mt-4 text-xl font-semibold lg:text-2xl xl:text-4xl">
                                    Save time and effort
                                </h3>
                                <p className="mt-2 text-base lg:text-lg text-muted-foreground">
                                    CapsAI can help you save time and effort in creating captions for your photos. It is a simple and easy-to-use tool that can generate captions in seconds.
                                </p>
                            </div>
                            <div className="flex items-center w-full mt-4">
                                <Icons.savetime className="w-full h-60" />
                            </div>
                        </div>
                        <div className="flex-[0.3] w-full">
                            <div className="grid grid-cols-2 gap-8">
                                <div className="flex flex-col items-start p-4 border bg-zinc-950 md:p-8 rounded-xl lg:rounded-2xl border-border">
                                    <span className="flex items-center text-5xl">
                                        👌
                                    </span>
                                    <div className="flex flex-col items-start px-2 mt-4">
                                        <h3 className="mt-4 text-xl font-semibold lg:text-2xl xl:text-4xl">
                                            60%
                                        </h3>
                                        <p className="mt-2 text-base lg:text-lg text-muted-foreground">
                                            Efficient
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start p-4 border bg-zinc-950 md:p-8 rounded-xl lg:rounded-2xl border-border">
                                    <span className="text-5xl font-semibold lg:text-2xl xl:text-4xl">
                                        4.8
                                    </span>
                                    <div className="flex flex-col items-start px-2 mt-4">
                                        <div className="flex items-center mt-4">
                                            <Image src="/icons/users.png" alt="Users" width={500} height={500} className="object-cover w-auto h-10" />
                                        </div>
                                        <p className="mt-2 text-base lg:text-lg text-muted-foreground">
                                            rating by users
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyUs
