import { useTheme } from "../../../context/ThemeContext";

const Timeline = () => {
    const { isDarkMode } = useTheme();

    const education = [
        {
            title: 'Informatics, UPN "Veteran" Jawa Timur',
            date: 'Aug 2022 – Present',
            description: 'IPK: 3.9/4.0 (108 credits).',
            isLatest: true,
            type: 'Formal'
        },
        {
            title: 'Cloud Computing, Bangkit Academy',
            date: '2024 – Januari 2025',
            description: 'Graduated with distinction(Top 10%). Leveraging Google Cloud Platform (GCP), I contributed to designing GCP services infrastructure, developed a Backend API using Express, Firestore, and Node.js, and integrated machine learning models into the API with Flask to enhance application functionality.',
            type: 'Non-Formal'
        }
    ];

    return (
        <ol className={`relative border-s ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            {education.map((edu, index) => (
                <li key={index} className="mb-10 ms-6">
                    <span className={`absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 
                        ${isDarkMode
                            ? 'bg-blue-900 ring-gray-900 text-blue-300'
                            : 'bg-blue-100 ring-white text-blue-800'}`}>
                        <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </span>
                    <div className="flex items-center mb-1">
                        <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            {edu.title}
                        </h3>
                        {edu.isLatest && (
                            <span className={`ms-3 text-sm font-medium px-2.5 py-0.5 rounded-sm
                                ${isDarkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'}`}>
                                Latest
                            </span>
                        )}
                    </div>
                    <time className={`block mb-2 text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                        {edu.date}
                    </time>
                    <p className={`text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {edu.description}
                    </p>
                </li>
            ))}
        </ol>
    );
};

export default Timeline;