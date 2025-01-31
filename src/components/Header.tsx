import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToogle';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import LogoDark from '../assets/logo_dark_theme.svg';
import LogoLight from '../assets/logo_light_theme.svg';

const Header = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    const { language, toggleLanguage } = useLanguage();

    const buttonClass = `
        px-3 py-2 rounded-full
        font-medium text-sm
        transition-all duration-200
        cursor-pointer
        ${isDarkMode
            ? 'bg-gray-800/80 text-gray-200 hover:bg-gray-700/80 hover:text-white'
            : 'bg-gray-100/80 text-gray-600 hover:bg-gray-200/80 hover:text-gray-900'}
        backdrop-blur-sm
        shadow-sm hover:shadow-md
    `;

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`sticky top-0 z-50 
                backdrop-blur-md border-b
                ${isDarkMode
                    ? 'bg-black/75 border-gray-800/50'
                    : 'bg-white/75 border-gray-200/50'}
                transition-colors duration-300
                shadow-sm`}
        >
            <div className="max-w-[1440px] mx-auto">
                <div className="flex justify-between items-center h-16 
                    px-4 sm:px-6 lg:px-8"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative group"
                    >
                        <img
                            src={isDarkMode ? LogoDark : LogoLight}
                            alt="Logo"
                            className="h-8 w-auto cursor-pointer
                                transition-transform duration-200"
                        />
                        <div className={`absolute -inset-2 rounded-lg
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-300
                            ${isDarkMode ? 'bg-white/5' : 'bg-black/5'}`}
                        />
                    </motion.div>

                    <div className="flex items-center gap-3">
                        <motion.button
                            onClick={toggleLanguage}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={buttonClass}
                        >
                            {language.toUpperCase()}
                        </motion.button>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ThemeToggle
                                isDarkMode={isDarkMode}
                                toggleTheme={toggleTheme}
                                className={buttonClass}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.header>
    );
};

export default Header;