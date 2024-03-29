// import Tilt from 'react-parallax-tilt';
import Icons from '../ui/Icons';

const HeroImage = () => {

    // const controls = useDragControls();

    // const [[manualTiltAngleX, manualTiltAngleY], setManualTiltAngle] = useState([30, 0]);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const newTiltAngleX = Math.max(0, 30 - window.scrollY * 0.05);
    //         // setManualTiltAngle([newTiltAngleX, 0]);
    //         if (newTiltAngleX !== manualTiltAngleX) {
    //             setManualTiltAngle([newTiltAngleX, manualTiltAngleY]);
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, [manualTiltAngleX]);

    return (
        <div className="relative flex items-center justify-center w-full pb-20 mx-auto">
            <div className="flex items-center justify-center max-w-4xl mx-auto">
                {/* <Tilt
                    className="w-full h-full"
                    // tiltAngleXManual={0}
                    // tiltMaxAngleX={20}
                    // tiltAngleYManual={0}
                    // transitionSpeed={2000}
                    // glareEnable={false}
                >
                </Tilt> */}
                <Icons.dashboard className="w-full h-full" />
            </div>
            <div
                // drag
                // // dragControls={controls}
                // dragElastic={0.1}
                // dragMomentum={false}
                // dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
                // dragTransition={{ bounceDamping: 10, bounceStiffness: 100 }}
                // dragSnapToOrigin={true}
                className="absolute hidden lg:flex items-center justify-center max-w-md bottom-[5%] left-[5%]"
            >
                <Icons.leftboard className="w-full h-full" />
            </div>
            <div
                // drag
                // // dragControls={controls}
                // dragElastic={0.1}
                // dragMomentum={false}
                // dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
                // dragTransition={{ bounceDamping: 10, bounceStiffness: 100 }}
                // dragSnapToOrigin={true}
                className="absolute hidden lg:flex items-center justify-center max-w-xs bottom-[15%] right-[5%]"
            >
                <Icons.rightboard className="w-full h-full" />
            </div>
        </div>
    )
}

export default HeroImage

{/* <Image src="/icons/leftboard.png" alt="Hero Image" width={400} height={400} className="w-full h-full" /> */ }