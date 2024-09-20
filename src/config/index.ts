import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        default: "Caps AI - Elevate Your Social Media Presence",
        template: `%s | Astra`
    },
    description: "Unlock the power of AI with Caps AI, the ultimate social media management tool for businesses and entrepreneurs. Create captivating posts, generate engaging captions, and streamline your social media strategy with ease.",
    icons: {
        icon: [
            {
                url: "/icons/favicon.svg",
                href: "/icons/favicon.svg",
            }
        ]
    },
    openGraph: {
        title: "Caps AI - Elevate Your Social Media Presence",
        description: "Unlock the power of AI with Caps AI, the ultimate social media management tool for businesses and entrepreneurs. Create captivating posts, generate engaging captions, and streamline your social media strategy with ease.",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        creator: "@shreyassihasane",
        title: "Caps AI - Elevate Your Social Media Presence",
        description: "Unlock the power of AI with Caps AI, the ultimate social media management tool for businesses and entrepreneurs. Create captivating posts, generate engaging captions, and streamline your social media strategy with ease.",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    metadataBase: new URL("https://caps-ai.vercel.app"),
};