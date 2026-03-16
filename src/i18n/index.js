import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ar from './locales/ar.json';
import en from './locales/en.json';

const savedLang = typeof window !== 'undefined'
    ? localStorage.getItem('kau-lang') || 'ar'
    : 'ar';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            ar: { translation: ar },
            en: { translation: en },
        },
        lng: savedLang,
        fallbackLng: 'ar',
        interpolation: {
            escapeValue: false,
        },
    });

// Update document direction and lang when language changes
i18n.on('languageChanged', (lng) => {
    const dir = lng === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', lng);
    localStorage.setItem('kau-lang', lng);
});

export default i18n;
