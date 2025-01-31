import { motion } from 'framer-motion';
import { useTheme } from '../../../context/ThemeContext';

const SkillTag = () => {
    const { isDarkMode } = useTheme();

    const skills = [
        'React', 'Laravel', 'MongoDB', 'PostgreSQL',
        'MySQL', 'Firebase', 'Node.js', 'Express',
        'TypeScript', 'Tailwind CSS', 'Next.js'
    ];

    return (
        <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
                <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                    className={`px-3 py-1 text-sm font-medium rounded-full
                        ${isDarkMode
                            ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}
                        cursor-default transition-colors duration-200`}
                >
                    {skill}
                </motion.span>
            ))}
        </div>
    );
};

export default SkillTag;