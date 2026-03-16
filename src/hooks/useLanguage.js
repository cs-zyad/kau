import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';

/**
 * Custom hook for language management.
 * Returns the current language, direction, font family, and a toggle function.
 */
export function useLanguage() {
    const { i18n } = useTranslation();

    const isArabic = i18n.language === 'ar';
    const direction = isArabic ? 'rtl' : 'ltr';
    const fontFamily = isArabic
        ? "'Tajawal', 'Segoe UI', sans-serif"
        : "'Inter', 'Segoe UI', sans-serif";

    const toggleLanguage = useCallback(() => {
        const newLang = isArabic ? 'en' : 'ar';
        i18n.changeLanguage(newLang);
    }, [i18n, isArabic]);

    const setLanguage = useCallback((lang) => {
        i18n.changeLanguage(lang);
    }, [i18n]);

    return {
        language: i18n.language,
        isArabic,
        direction,
        fontFamily,
        toggleLanguage,
        setLanguage,
    };
}
