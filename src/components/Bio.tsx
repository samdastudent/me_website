import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { useTheme } from '../context/ThemeContext';

const Bio = () => {
    const { isDarkMode } = useTheme();
    const [text] = useTypewriter({
        words: ['Web Developer', 'Backend Developer', 'Cloud Engineer'],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={` py-8 mb-2 rounded-xl px-5 sm:px-20
                       ${isDarkMode
                    ? 'bg-gray-800/50 text-white'
                    : 'bg-white text-gray-900'
                }
                       transition-colors duration-300`}
        >
            <h2
                className="text-2xl md:text-3xl font-heading font-bold mb-4 
                          text-center md:text-left"
            >
                <span
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 
                               bg-clip-text text-transparent"
                >
                    {text}
                </span>
                <Cursor cursorStyle="_" />
            </h2>
            <p
                className={`text-base md:text-lg leading-relaxed text-center md:text-left
                          ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}
                          transition-colors duration-300`}
            >
                Aspiring Full Stack Developer specializing in JavaScript/TypeScript,
                focused on building scalable web applications with Next.js. Proficient
                in creating responsive UIs, efficient back-end systems with Express.js,
                and seamless database integration. Experienced in PHP and Laravel for
                dynamic applications, currently deepening expertise in Next.js for
                advanced React development.
            </p>
        </motion.div>
    );
};

export default Bio;
