import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import About from './TabSection/About';
import Experience from './TabSection/Experience';
import Project from './TabSection/Project';
import Certification from './TabSection/Certification';

const TabSection = () => {
    const [activeTab, setActiveTab] = useState(0);
    const { isDarkMode } = useTheme();

    const tabs = [
        { label: 'About', component: <About /> },
        { label: 'Experience', component: <Experience /> },
        { label: 'Projects', component: <Project /> },
        { label: 'Certifications', component: <Certification /> },
    ];

    return (
        <div className="w-full">
            <div
                className={`w-full border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'
                    }`}
            >
                {/* Full width container for tabs */}
                <div className="w-full">
                    {/* Centered content within full width */}
                    <div className="max-w-[1440px] mx-auto">
                        <div className="flex justify-evenly sm:gap-8 md:gap-12 overflow-x-auto scrollbar-hide px-4 sm:px-6 md:px-8">
                            {tabs.map((tab, index) => (
                                <button
                                    key={tab.label}
                                    onClick={() => setActiveTab(index)}
                                    className={`relative py-4 px-3
                text-base md:text-lg font-medium transition-colors duration-200
                cursor-pointer select-none whitespace-nowrap
                ${activeTab === index
                                            ? isDarkMode
                                                ? 'text-white'
                                                : 'text-blue-600'
                                            : isDarkMode
                                                ? 'text-gray-400 hover:text-gray-200'
                                                : 'text-gray-500 hover:text-gray-700'
                                        }`}
                                >
                                    {tab.label}
                                    {activeTab === index && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className={`absolute bottom-0 left-0 right-0 h-0.5
                        ${isDarkMode ? 'bg-white' : 'bg-blue-600'}`}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Content section with max width */}
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
                <div className="py-6">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-full"
                    >
                        {tabs[activeTab].component}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default TabSection;
