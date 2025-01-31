import Header from '../components/Header';
import Banner from '../components/Banner';
import Profile from '../components/Profile';
import Bio from '../components/Bio';
import TabSection from '../components/TabSection';
import { useTheme } from '../context/ThemeContext';

const MainLayout = () => {
    const { isDarkMode } = useTheme();

    return (
        <div className={`min-h-screen transition-colors duration-300
            ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
        >
            <Header />

            <div className="flex justify-center w-full px-4 sm:px-6 lg:px-8">
                <main className={`w-full max-w-[1440px] 
                    my-6 sm:my-8 md:my-10
                    rounded-2xl shadow-xl overflow-hidden
                    transition-all duration-300
                    ${isDarkMode
                        ? 'bg-gray-800/50 shadow-gray-900/50'
                        : 'bg-white shadow-gray-200/50'}`}
                >
                    <div className="space-y-2 md:space-y-2">
                        <Banner />
                        <Profile />
                        <Bio />
                        <TabSection />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default MainLayout;