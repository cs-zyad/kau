import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks';
import './LanguageToggle.css';

export default function LanguageToggle() {
    const { t } = useTranslation();
    const { toggleLanguage, isArabic } = useLanguage();

    return (
        <button
            id="language-toggle"
            className="language-toggle"
            onClick={toggleLanguage}
            aria-label={isArabic ? 'Switch to English' : 'التبديل إلى العربية'}
            title={t('language.toggle')}
        >
            <span className="language-toggle__icon">
                {isArabic ? '🇬🇧' : '🇸🇦'}
            </span>
            <span className="language-toggle__label">
                {t('language.toggle')}
            </span>
        </button>
    );
}
