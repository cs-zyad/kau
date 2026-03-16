import { useTranslation } from 'react-i18next';
import './HeroSection.css';

export default function HeroSection({ onExploreClick }) {
    const { t } = useTranslation();

    const stats = [
        { value: '50+', label: t('hero.stats_events'), icon: '🎪' },
        { value: '120+', label: t('hero.stats_clubs'), icon: '🏛️' },
        { value: '45K+', label: t('hero.stats_students'), icon: '🎓' },
    ];

    return (
        <section className="hero" id="hero-section">
            {/* Background decorations */}
            <div className="hero__bg-pattern" aria-hidden="true"></div>
            <div className="hero__orb hero__orb--1" aria-hidden="true"></div>
            <div className="hero__orb hero__orb--2" aria-hidden="true"></div>
            <div className="hero__orb hero__orb--3" aria-hidden="true"></div>

            <div className="hero__container">
                <div className="hero__content">
                    <div className="hero__badge">
                        <span className="hero__badge-dot"></span>
                        <span>{t('app.university')}</span>
                    </div>

                    <h1 className="hero__title">{t('hero.title')}</h1>
                    <p className="hero__subtitle">{t('hero.subtitle')}</p>

                    <div className="hero__actions">
                        <button
                            className="hero__cta hero__cta--primary"
                            onClick={onExploreClick}
                            id="hero-explore-btn"
                        >
                            <span>{t('hero.cta_primary')}</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button className="hero__cta hero__cta--secondary" id="hero-join-btn">
                            {t('hero.cta_secondary')}
                        </button>
                    </div>
                </div>

                {/* Stats */}
                <div className="hero__stats">
                    {stats.map((stat, i) => (
                        <div className="hero__stat" key={i}>
                            <span className="hero__stat-icon">{stat.icon}</span>
                            <span className="hero__stat-value">{stat.value}</span>
                            <span className="hero__stat-label">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom wave */}
            <div className="hero__wave" aria-hidden="true">
                <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
                    <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,70 L1440,120 L0,120 Z" fill="var(--color-bg, #ffffff)" />
                </svg>
            </div>
        </section>
    );
}
