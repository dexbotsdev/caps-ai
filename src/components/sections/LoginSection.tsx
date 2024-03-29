import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'
import { Label } from '../ui/Label'
import Image from 'next/image'

const LoginSection = () => {
    return (
        <section className="flex flex-col items-center justify-center w-full relative">
            <div className="bg-background grid grid-cols-1 min-h-screen lg:grid-cols-2 w-full">
                <div className="flex items-center justify-center py-12">
                    <div className="mx-auto grid max-w-xs gap-6">
                        <div className="grid gap-2 text-center">
                            <h1 className="text-3xl font-bold">Login</h1>
                            <p className="text-muted-foreground">
                                Enter your email below to login to your account
                            </p>
                        </div>
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                    <Link
                                        href="/forgot-password"
                                        className="ml-auto inline-block text-sm underline"
                                    >
                                        Forgot your password?
                                    </Link>
                                </div>
                                <Input id="password" type="password" required />
                            </div>
                            <Button type="submit" className="w-full">
                                Login
                            </Button>
                            <Button variant="outline" className="w-full">
                                Login with Google
                            </Button>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Don&apos;t have an account?{" "}
                            <Link href="#" className="underline">
                                Sign up
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="hidden bg-muted w-full h-full lg:block">
                    <Image
                        src="/placeholder.svg"
                        alt="Image"
                        width="1920"
                        height="1080"
                        className="h-full w-full object-cover brightness-[0.2] grayscale"
                    />
                </div>
            </div>
        </section>
    )
}

export default LoginSection
