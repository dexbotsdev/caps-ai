import React from 'react'

const SectionContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="flex flex-col items-center justify-center w-full md:w-11/12 pb-8 mt-8 lg:max-w-screen-xl lg:items-start lg:mx-auto">
            {children}
        </section>
    )
};

export default SectionContainer
