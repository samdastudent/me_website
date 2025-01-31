import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

import expertBe from '../../assets/certificate/expert_be.jpg';
import fundamentalReact from '../../assets/certificate/fundamental_react.jpg';
import cloudEngineer from '../../assets/certificate/cloud_engineer.jpg';
import cloudArchitect from '../../assets/certificate/cloud_architect.jpg';
import fundamentalFlutter from '../../assets/certificate/fundamental_flutter.jpg';
import appliedMl from '../../assets/certificate/applied_ml.jpg';
import google_cysec from '../../assets/certificate/google_cysec.jpg';

const Certification = () => {
    const { isDarkMode } = useTheme();
    const [activeIndex, setActiveIndex] = useState(0);

    const certificates = [
        {
            title: "Backend Developer Expert",
            organization: "Dicoding Indonesia",
            date: "2023",
            image: expertBe
        },
        {
            title: "React Developer Fundamental",
            organization: "Dicoding Indonesia",
            date: "2025",
            image: fundamentalReact
        },
        {
            title: "Google Cloud Engineer",
            organization: "Dicoding Indonesia",
            date: "2024",
            image: cloudEngineer
        },
        {
            title: "Google Cloud Architect",
            organization: "Dicoding Indonesia",
            date: "2025",
            image: cloudArchitect
        },
        {
            title: "Google Cybersecurity",
            organization: "Coursera",
            date: "2025",
            image: google_cysec
        },
        {
            title: "Flutter Fundamental",
            organization: "Dicoding Indonesia",
            date: "2024",
            image: fundamentalFlutter
        },
        {
            title: "Applied Machine Learning with GCP",
            organization: "Dicoding Indonesia",
            date: "2024",
            image: appliedMl
        }
    ];

    const handleClick = (index: number) => {
        setActiveIndex(activeIndex === index ? -1 : index);
        if (activeIndex !== index) {
            setTimeout(() => {
                document.getElementById(`cert-${index}`)?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
        }
    };

    return (
        <div className="space-y-4 px-4 sm:px-10 lg:px-12">
            {certificates.map((cert, index) => (
                <div
                    key={index}
                    id={`cert-${index}`}
                    className={`rounded-lg overflow-hidden border
                    ${isDarkMode
                            ? 'bg-gray-800/50 border-gray-700'
                            : 'bg-gray-50 border-gray-200'}
                    transition-all duration-200 hover:scale-[1.01]
                    cursor-pointer`}
                >
                    <button
                        onClick={() => handleClick(index)}
                        className={`w-full flex items-center justify-between p-4
                        ${isDarkMode
                                ? 'hover:bg-gray-700/50'
                                : 'hover:bg-gray-100'}
                        transition-colors duration-200
                        cursor-pointer`}
                        role="button"
                        aria-expanded={activeIndex === index}
                    >
                        <div className="flex flex-col items-start">
                            <h3 className={`text-lg font-semibold
                                ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                {cert.title}
                            </h3>
                            <p className={`text-sm
                                ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                {cert.organization} • {cert.date}
                            </p>
                        </div>
                        <motion.div
                            animate={{ rotate: activeIndex === index ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <ChevronDownIcon
                                className={`w-5 h-5
                                    ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                            />
                        </motion.div>
                    </button>

                    <AnimatePresence>
                        {activeIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                            >
                                <div className={`p-4 md:p-30  border-t
                                    ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full rounded-lg shadow-lg"
                                        loading="lazy"
                                        onError={(e) => {
                                            console.error(`Failed to load image: ${cert.image}`);
                                            e.currentTarget.src = 'fallback-image.jpg';
                                        }}
                                    />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
};

export default Certification;