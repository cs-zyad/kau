import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
    const { t } = useTranslation();
    const year = new Date().getFullYear();

    const quickLinks = [
        { key: 'home', path: '/' },
        { key: 'events', path: '/events' },
        { key: 'calendar', path: '/calendar' },
        { key: 'clubs', path: '/clubs' },
        { key: 'about', path: '/about' },
        { key: 'contact', path: '/contact' },
    ];

    return (
        <footer className="footer" id="main-footer">
            <div className="footer__glow" aria-hidden="true"></div>
            <div className="footer__container">
                {/* Brand Column */}
                <div className="footer__brand">
                    <div className="footer__logo">
                        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="40" height="40" rx="10" fill="url(#footer-logo-grad)" />
                            <path d="M12 28V14l8 6-8 8zm8-8l8-6v14l-8-8z" fill="#fff" opacity="0.9" />
                            <defs>
                                <linearGradient id="footer-logo-grad" x1="0" y1="0" x2="40" y2="40">
                                    <stop stopColor="#1a5c2a" />
                                    <stop offset="1" stopColor="#23874a" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <span className="footer__logo-text">{t('app.name')}</span>
                    </div>
                    <p className="footer__description">{t('footer.description')}</p>
                </div>

                {/* Quick Links */}
                <div className="footer__section">
                    <h3 className="footer__heading">{t('nav.home')}</h3>
                    <nav className="footer__links">
                        {quickLinks.map(({ key, path }) => (
                            <Link key={key} to={path} className="footer__link">
                                {t(`nav.${key}`)}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Contact Info */}
                <div className="footer__section">
                    <h3 className="footer__heading">{t('nav.contact')}</h3>
                    <div className="footer__contact">
                        <p>📍 Jeddah, Saudi Arabia</p>
                        <p>📧 community@kau.edu.sa</p>
                        <p>📞 +966 12 695 2000</p>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer__bottom">
                <div className="footer__bottom-container">
                    <p className="footer__copyright">
                        © {year} {t('app.name')} — {t('footer.rights')}
                    </p>
                    <div className="footer__legal">
                        <Link to="/privacy" className="footer__legal-link">{t('footer.privacy')}</Link>
                        <span className="footer__legal-separator">|</span>
                        <Link to="/terms" className="footer__legal-link">{t('footer.terms')}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
