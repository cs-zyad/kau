import { useTranslation } from 'react-i18next';
import './HomePage.css';

/**
 * Placeholder Home Page — to be replaced with full implementation later.
 */
export default function HomePage() {
    const { t } = useTranslation();

    return (
        <section className="home-placeholder" id="home-page">
            <div className="home-placeholder__content">
                <div className="home-placeholder__badge">🎓</div>
                <h1 className="home-placeholder__title">{t('hero.title')}</h1>
                <p className="home-placeholder__subtitle">{t('hero.subtitle')}</p>
                <div className="home-placeholder__actions">
                    <button className="btn btn--primary">{t('hero.cta_primary')}</button>
                    <button className="btn btn--outline">{t('hero.cta_secondary')}</button>
                </div>
                <div className="home-placeholder__hint">
                    <div className="home-placeholder__dot"></div>
                    <span>Under Construction — قيد الإنشاء</span>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="home-placeholder__orb home-placeholder__orb--1" aria-hidden="true"></div>
            <div className="home-placeholder__orb home-placeholder__orb--2" aria-hidden="true"></div>
            <div className="home-placeholder__grid" aria-hidden="true"></div>
        </section>
    );
}
