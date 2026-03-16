import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { FilterBar, EventCard } from '../../components';
import { events } from '../../data';
import './EventsPage.css';

export default function EventsPage() {
    const { t } = useTranslation();
    const [filters, setFilters] = useState({ type: '', college: '', date: '' });

    const filteredEvents = useMemo(() => {
        return events.filter(event => {
            const typeMatch = !filters.type || event.type === filters.type;
            const collegeMatch = !filters.college || event.college === filters.college;
            
            // Basic date filtering logic
            let dateMatch = true;
            if (filters.date) {
                const eventDate = new Date(event.date);
                const now = new Date();
                if (filters.date === 'this_week') {
                    const nextWeek = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
                    dateMatch = eventDate >= now && eventDate <= nextWeek;
                } else if (filters.date === 'this_month') {
                    dateMatch = eventDate.getMonth() === now.getMonth() && eventDate.getFullYear() === now.getFullYear();
                }
            }
            
            return typeMatch && collegeMatch && dateMatch;
        });
    }, [filters]);

    return (
        <div className="events-page" id="events-page">
            <div className="events-page__header">
                <div className="container">
                    <h1 className="events-page__title">{t('nav.events')}</h1>
                    <p className="events-page__subtitle">{t('hero.subtitle')}</p>
                </div>
            </div>

            <div className="container">
                <FilterBar 
                    filters={filters} 
                    onFilterChange={setFilters} 
                    resultCount={filteredEvents.length} 
                />

                <div className="events-page__grid" id="events-grid">
                    {filteredEvents.length > 0 ? (
                        filteredEvents.map(event => (
                            <EventCard key={event.id} event={event} />
                        ))
                    ) : (
                        <div className="events-page__no-results">
                            <div className="events-page__no-results-icon">🔍</div>
                            <h3>{t('filter.no_results')}</h3>
                            <button className="btn btn--outline" onClick={() => setFilters({ type: '', college: '', date: '' })}>
                                {t('filter.reset')}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
