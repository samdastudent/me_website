import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

interface ThemeToggleProps {
    isDarkMode: boolean;
    toggleTheme: () => void;
    className?: string;
}

const ThemeToggle = ({ isDarkMode, toggleTheme, className }: ThemeToggleProps) => {
    return (
        <button
            onClick={toggleTheme}
            className={className}
            aria-label="Toggle theme"
        >
            {isDarkMode ? (
                <SunIcon className="w-5 h-5" />
            ) : (
                <MoonIcon className="w-5 h-5" />
            )}
        </button>
    );
};

export default ThemeToggle;