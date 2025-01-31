import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const Experience = () => {
    const { isDarkMode } = useTheme();

    const experiences = [
        {
            title: 'Web Developer',
            company: 'PT Telekomunikasi Selular',
            date: 'Nov 2024 – Present',
            description: [
                'Built the front-end of an internship vacancies web application using Next.js and Tailwind CSS.',
                'Ensured a responsive and user-friendly interface to enhance user experience.',
                'Integrated the application with a REST API for dynamic data management and seamless functionality.'
            ],
            isLatest: true
        },
        {
            title: 'Mentee – React Developer',
            company: 'IDCamp by Indosat Ooredoo Hutchison',
            date: 'Jan 2025 – Present',
            description: [
                'Learned PropTypes, React Router, Lifecycle Methods, Context, and Hooks for efficient React development.',
                'Built a web app applying these concepts as a final project.'
            ]
        },
        {
            title: 'Mentee – Flutter Developer',
            company: 'IDCamp by Indosat Ooredoo Hutchison',
            date: 'Sep 2023 – Jan 2024',
            description: [
                'Learned Flutter fundamentals, UI design, state management, API integration, local storage, scheduling, testing, and Firebase.',
                'Built a Flutter app integrating API data, local storage, notifications, and testing as a final project.'
            ]
        },
        {
            title: 'Mentee – Backend Developer',
            company: 'DBS Foundation Coding Camp by DBS Foundation',
            date: 'Jun 2023 - Nov 2023',
            description: [
                'Learned RESTful API best practices with Node.js, covering automation testing, clean architecture, CI/CD, security, and scalability.',
                'Built a testable, scalable, and secure RESTful API as a final project following industry standards.'
            ]
        }
    ];

    return (
        <div className='space-y-8 px-4 sm:px-10 lg:px-12 mb-4'>        <ol className={`relative border-s ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            {experiences.map((exp, index) => (
                <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="mb-10 ms-6"
                >
                    <span className={`absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 
                    ${isDarkMode
                            ? 'bg-blue-900 ring-gray-900 text-blue-300'
                            : 'bg-blue-100 ring-white text-blue-800'}`}>
                        <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" />
                            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                        </svg>
                    </span>
                    <div className="flex flex-col">
                        <div className="flex items-center mb-1 space-x-2">
                            <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                {exp.title}
                            </h3>
                            {exp.isLatest && (
                                <span className={`text-sm font-medium px-2.5 py-0.5 rounded-sm
                                ${isDarkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'}`}>
                                    Latest
                                </span>
                            )}
                        </div>
                        <h4 className={`text-base font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            {exp.company}
                        </h4>
                        <time className={`block mb-2 text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                            {exp.date}
                        </time>
                        <ul className={`list-disc list-inside space-y-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            {exp.description.map((desc, idx) => (
                                <li key={idx} className="text-base">
                                    {desc}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.li>
            ))}
        </ol></div>

    );
};

export default Experience;