import { motion } from 'framer-motion';
import bannerGif from '../assets/banner.gif';

const Banner = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative overflow-hidden mb-8
                      w-full h-[266px] md:h-[300px]
                      rounded-none md:rounded-t-2xl"
        >
            <motion.div
                animate={{
                    scale: [1, 1.02, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute inset-0 w-full h-full"
            >
                <img
                    src={bannerGif}
                    alt="Banner Background"
                    className="w-full h-full object-cover object-center"
                    style={{
                        aspectRatio: '480/266',
                    }}
                    onError={(e) => {
                        console.error('Error loading banner gif');
                        e.currentTarget.src = '/fallback-banner.jpg';
                    }}
                />
                <div className="absolute inset-0 bg-black/30" />
            </motion.div>
        </motion.div>
    );
};

export default Banner;