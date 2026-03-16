import { useTranslation } from 'react-i18next';
import './ClubCard.css';

export default function ClubCard({ club }) {
    const { t, i18n } = useTranslation();

    return (
        <div className="club-card" id={`club-card-${club.id}`}>
            <div className="club-card__image-container">
                <img src={club.image} alt={club.name[i18n.language]} className="club-card__image" />
                <div className="club-card__category">
                    {t(`clubs.categories.${club.category}`)}
                </div>
            </div>
            <div className="club-card__content">
                <h3 className="club-card__title">{club.name[i18n.language]}</h3>
                <p className="club-card__description">{club.description[i18n.language]}</p>
                <div className="club-card__footer">
                    <div className="club-card__members">
                        <span className="club-card__members-count">{club.members.toLocaleString()}</span>
                        <span className="club-card__members-label">{t('clubs.members')}</span>
                    </div>
                    <button className="btn btn--primary btn--sm" id={`club-btn-${club.id}`}>
                        {t('clubs.join')}
                    </button>
                </div>
            </div>
        </div>
    );
}
