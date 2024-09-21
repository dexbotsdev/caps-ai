import React from "react";
import { Footer, Navbar } from "@/components";

export default function MarketingLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
};
