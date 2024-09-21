import { Background, Button, HomeSection } from '@/components';
import React from 'react';

const Home = () => {
    return (
        <Background>
            <div className="relative flex flex-col items-center justify-center px-4 pt-20">
                <HomeSection />
            </div>
        </Background>
    );
};

export default Home;
