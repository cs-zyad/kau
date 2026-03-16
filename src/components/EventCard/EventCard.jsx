import { useTranslation } from 'react-i18next';
import './EventCard.css';

export default function EventCard({ event }) {
    const { t, i18n } = useTranslation();
    const isAr = i18n.language === 'ar';

    return (
        <div className="event-card" id={`event-card-${event.id}`}>
            <div className="event-card__image-container">
                <img src={event.image} alt={event.name[i18n.language]} className="event-card__image" />
                <div className="event-card__type">
                    {t(`event_types.${event.type}`)}
                </div>
            </div>
            <div className="event-card__content">
                <div className="event-card__date">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <span>{new Date(event.date).toLocaleDateString(isAr ? 'ar-SA' : 'en-US', { day: 'numeric', month: 'long' })}</span>
                </div>
                <h3 className="event-card__title">{event.name[i18n.language]}</h3>
                <p className="event-card__organizer">{event.organizer[i18n.language]}</p>
                <div className="event-card__footer">
                    <div className="event-card__info">
                        <span className="event-card__info-item">
                            <span className="event-card__icon">📍</span>
                            {event.location[i18n.language]}
                        </span>
                    </div>
                    <button className="event-card__btn" id={`event-btn-${event.id}`}>
                        {t('events.view_details')}
                    </button>
                </div>
            </div>
        </div>
    );
}
