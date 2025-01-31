import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToogle';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import LogoDark from '../assets/logo_dark_theme.svg';
import LogoLight from '../assets/logo_light_theme.svg';

const Header = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    const { language, toggleLanguage } = useLanguage();

    return (
        <header className={`sticky top-0 z-50 backdrop-blur-md border-b 
            ${isDarkMode
                ? 'bg-black/80 border-gray-800'
                : 'bg-white/80 border-gray-200'
            } transition-colors duration-200`}
        >
            <div className="max-w-[1440px] mx-auto">
                <div className="flex justify-between items-center h-16 
                    px-4 sm:px-6 md:px-8"
                >
                    <motion.img
                        src={isDarkMode ? LogoDark : LogoLight}
                        alt="Logo"
                        className="h-8 w-auto hover:cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                    />

                    <div className="flex items-center gap-4">
                        <motion.button
                            onClick={toggleLanguage}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-3 py-1.5 rounded-full text-sm font-medium
                                hover:cursor-pointer transition-colors duration-200
                                ${isDarkMode
                                    ? 'bg-gray-800 text-white hover:bg-gray-700'
                                    : 'bg-gray-100 text-black hover:bg-gray-200'
                                }`}
                        >
                            {language.toUpperCase()}
                        </motion.button>
                        <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;