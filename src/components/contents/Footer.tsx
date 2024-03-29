import React from 'react'
import Icons from '../ui/Icons'
import { Heart } from 'lucide-react'
import Link from 'next/link'
import { Input } from '../ui/Input'
import { Button } from '../ui/Button'

const Footer = () => {
    return (
        <footer className="flex flex-col relative items-center justify-center border-t border-border pt-16 pb-8 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32">

            <div className="absolute -top-1/3 -right-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>
            <div className="absolute bottom-0 -left-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>

            <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">

                <div className="flex flex-col items-start justify-start md:max-w-[200px]">
                    <div className="flex items-start">
                        <Icons.logo className="w-full h-6" />
                    </div>
                    <p className="text-muted-foreground mt-4 text-sm text-start">
                        The most powerful social media management platform for creators & businesses.
                    </p>
                    <span className="mt-4 text-neutral-200 text-sm flex items-center">
                        Made in India with
                        <Heart className="w-3.5 h-3.5 ml-1 fill-primary text-primary" />
                    </span>
                </div>

                <div className="grid-cols-2 gap-8 grid mt-16 xl:col-span-2 xl:mt-0">
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <div className="">
                            <h3 className="text-base font-medium text-white">
                                Product
                            </h3>
                            <ul className="mt-4 text-sm text-muted-foreground">
                                <li className="mt-2">
                                    <Link href="" className="hover:text-foreground transition-all duration-300">
                                        Features
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="" className="hover:text-foreground transition-all duration-300">
                                        Pricing
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="" className="hover:text-foreground transition-all duration-300">
                                        Testimonials
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="" className="hover:text-foreground transition-all duration-300">
                                        Integration
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-10 md:mt-0 flex flex-col">
                            <h3 className="text-base font-medium text-white">
                                Integrations
                            </h3>
                            <ul className="mt-4 text-sm text-muted-foreground">
                                <li className="">
                                    <Link href="" className="hover:text-foreground transition-all duration-300">
                                        Facebook
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="" className="hover:text-foreground transition-all duration-300">
                                        Instagram
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="" className="hover:text-foreground transition-all duration-300">
                                        Twitter
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="" className="hover:text-foreground transition-all duration-300">
                                        LinkedIn
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <div className="">
                            <h3 className="text-base font-medium text-white">
                                Resources
                            </h3>
                            <ul className="mt-4 text-sm text-muted-foreground">
                                <li className="mt-2">
                                    <Link href="" className="hover:text-foreground transition-all duration-300">
                                        Blog
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="" className="hover:text-foreground transition-all duration-300">
                                        Case Studies
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="" className="hover:text-foreground transition-all duration-300">
                                        Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-10 md:mt-0 flex flex-col">
                            <h3 className="text-base font-medium text-white">
                                Company
                            </h3>
                            <ul className="mt-4 text-sm text-muted-foreground">
                                <li className="">
                                    <Link href="" className="hover:text-foreground transition-all duration-300">
                                        About Us
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="" className="hover:text-foreground transition-all duration-300">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li className="mt-2">
                                    <Link href="" className="hover:text-foreground transition-all duration-300">
                                        Terms & Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <div className="border-t border-border/40 mt-16 md:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between w-full pt-8">
                <div className="flex flex-col items-start">
                    <h3 className="text-foreground font-medium">
                        Subscribe to our newsletter
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Get the latest news and updates about our product.
                    </p>
                </div>
                <div className="relative flex">
                    <form className="flex items-center relative">
                        <Input
                            required
                            spellCheck={false}
                            placeholder="Email address"
                            className="text-sm text-foreground focus:outline-none outline-none focus:border-primary"
                        />
                        <Button type="submit" size="sm" variant="default" className="ml-2 px-6">
                            Subscribe
                        </Button>
                    </form>
                </div>
            </div>

            <div className="mt-8 border-t border-border/40 pt-8 md:flex md:items-center md:justify-between w-full">
                <p className="text-sm text-muted-foreground mt-8 md:mt-0">
                    &copy; 2024 Caps AI INC. All rights reserved.
                </p>
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden inner-shadow flex flex-col items-center justify-center relative cursor-pointer group">
                        <Icons.tool1 className="w-4 h-4 translate-y-2 group-hover:-translate-y-20 transition-transform transform-gpu duration-500" />
                        <Icons.tool1 className="w-4 h-4 translate-y-20 group-hover:-translate-y-2 transition-transform transform-gpu duration-500" />
                    </div>
                    <div className="w-10 h-10 rounded-full overflow-hidden inner-shadow flex flex-col items-center justify-center relative cursor-pointer group">
                        <Icons.tool2 className="w-4 h-4 translate-y-2 group-hover:-translate-y-20 transition-transform transform-gpu duration-500" />
                        <Icons.tool2 className="w-4 h-4 translate-y-20 group-hover:-translate-y-2 transition-transform transform-gpu duration-500" />
                    </div>
                    <div className="w-10 h-10 rounded-full overflow-hidden inner-shadow flex flex-col items-center justify-center relative cursor-pointer group">
                        <Icons.tool3 className="w-4 h-4 translate-y-2 group-hover:-translate-y-20 transition-transform transform-gpu duration-500" />
                        <Icons.tool3 className="w-4 h-4 translate-y-20 group-hover:-translate-y-2 transition-transform transform-gpu duration-500" />
                    </div>
                    <div className="w-10 h-10 rounded-full overflow-hidden inner-shadow flex flex-col items-center justify-center relative cursor-pointer group">
                        <Icons.tool4 className="w-4 h-4 translate-y-2 group-hover:-translate-y-20 transition-transform transform-gpu duration-500" />
                        <Icons.tool4 className="w-4 h-4 translate-y-20 group-hover:-translate-y-2 transition-transform transform-gpu duration-500" />
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer
