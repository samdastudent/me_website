import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            about: 'About',
            experience: 'Experience',
            projects: 'Projects',
            certifications: 'Certifications',
            darkMode: 'Dark Mode',
            lightMode: 'Light Mode',
            language: 'Language'
        }
    },
    id: {
        translation: {
            about: 'Tentang',
            experience: 'Pengalaman',
            projects: 'Proyek',
            certifications: 'Sertifikasi',
            darkMode: 'Mode Gelap',
            lightMode: 'Mode Terang',
            language: 'Bahasa'
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;