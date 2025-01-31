import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import Timeline from './TabComponents/Timeline';
import SkillTag from './TabComponents/SkillTag';

const About = () => {
    const { isDarkMode } = useTheme();

    return (
        <div className="space-y-8 px-4 sm:px-10 lg:px-12 mb-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className={`text-xl font-semibold mb-4 
                    ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Education
                </h2>
                <Timeline />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <h2 className={`text-xl font-semibold mb-4 
                    ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Skills
                </h2>
                <SkillTag />
            </motion.div>
        </div>
    );
};

export default About;