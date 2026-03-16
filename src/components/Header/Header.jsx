import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { LanguageToggle } from '../LanguageToggle';
import './Header.css';

export default function Header() {
    const { t } = useTranslation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { key: 'home', path: '/' },
        { key: 'events', path: '/events' },
        { key: 'calendar', path: '/calendar' },
        { key: 'clubs', path: '/clubs' },
        { key: 'about', path: '/about' },
        { key: 'contact', path: '/contact' },
    ];

    return (
        <header className="header" id="main-header">
            <div className="header__container">
                {/* Logo */}
                <Link to="/" className="header__logo" id="header-logo">
                    <div className="header__logo-icon">
                        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="40" height="40" rx="10" fill="url(#logo-grad)" />
                            <path d="M12 28V14l8 6-8 8zm8-8l8-6v14l-8-8z" fill="#fff" opacity="0.9" />
                            <defs>
                                <linearGradient id="logo-grad" x1="0" y1="0" x2="40" y2="40">
                                    <stop stopColor="#1a5c2a" />
                                    <stop offset="1" stopColor="#23874a" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="header__logo-text">
                        <span className="header__logo-name">{t('app.name')}</span>
                        <span className="header__logo-tagline">{t('app.university')}</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="header__nav" id="desktop-nav">
                    {navLinks.map(({ key, path }) => (
                        <Link
                            key={key}
                            to={path}
                            className="header__nav-link"
                            id={`nav-${key}`}
                        >
                            {t(`nav.${key}`)}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="header__actions">
                    <LanguageToggle />
                    <Link to="/login" className="header__btn header__btn--ghost" id="nav-login">
                        {t('nav.login')}
                    </Link>
                    <Link to="/register" className="header__btn header__btn--primary" id="nav-register">
                        {t('nav.register')}
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`header__mobile-toggle ${mobileMenuOpen ? 'header__mobile-toggle--open' : ''}`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                    id="mobile-menu-toggle"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`header__mobile-menu ${mobileMenuOpen ? 'header__mobile-menu--open' : ''}`} id="mobile-menu">
                <nav className="header__mobile-nav">
                    {navLinks.map(({ key, path }) => (
                        <Link
                            key={key}
                            to={path}
                            className="header__mobile-link"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {t(`nav.${key}`)}
                        </Link>
                    ))}
                </nav>
                <div className="header__mobile-actions">
                    <LanguageToggle />
                    <Link
                        to="/login"
                        className="header__btn header__btn--ghost"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        {t('nav.login')}
                    </Link>
                    <Link
                        to="/register"
                        className="header__btn header__btn--primary header__btn--full"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        {t('nav.register')}
                    </Link>
                </div>
            </div>
        </header>
    );
}
