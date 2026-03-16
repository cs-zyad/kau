import { useTranslation } from 'react-i18next';
import { ClubCard } from '../../components';
import { clubs } from '../../data';
import './ClubsPage.css';

export default function ClubsPage() {
    const { t } = useTranslation();

    return (
        <div className="clubs-page" id="clubs-page">
            <div className="clubs-page__header">
                <div className="container">
                    <h1 className="clubs-page__title">{t('nav.clubs')}</h1>
                    <p className="clubs-page__subtitle">{t('hero.subtitle')}</p>
                </div>
            </div>

            <div className="container">
                <div className="clubs-page__grid" id="clubs-grid">
                    {clubs.map(club => (
                        <ClubCard key={club.id} club={club} />
                    ))}
                </div>
            </div>
        </div>
    );
}
