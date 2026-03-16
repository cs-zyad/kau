import { useTranslation } from 'react-i18next';
import './FilterBar.css';

const EVENT_TYPES = [
    'hackathon', 'workshop', 'seminar', 'student_club',
    'training', 'career_fair', 'trip', 'exhibition',
];

const COLLEGES = [
    'computing', 'engineering', 'science', 'business',
    'medicine', 'arts', 'law', 'pharmacy',
    'dentistry', 'architecture', 'education', 'media',
];

const DATE_RANGES = ['this_week', 'this_month', 'next_month'];

export default function FilterBar({ filters, onFilterChange, resultCount }) {
    const { t } = useTranslation();

    const handleChange = (key, value) => {
        onFilterChange({ ...filters, [key]: value });
    };

    const handleReset = () => {
        onFilterChange({ type: '', college: '', date: '' });
    };

    const hasActiveFilters = filters.type || filters.college || filters.date;

    return (
        <div className="filter-bar" id="filter-bar">
            <div className="filter-bar__container">
                <div className="filter-bar__header">
                    <div className="filter-bar__title-row">
                        <svg className="filter-bar__icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M3 4h14M5 8h10M7 12h6M9 16h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        <h2 className="filter-bar__title">{t('filter.title')}</h2>
                    </div>
                    {hasActiveFilters && (
                        <button className="filter-bar__reset" onClick={handleReset} id="filter-reset">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                            {t('filter.reset')}
                        </button>
                    )}
                </div>

                <div className="filter-bar__controls">
                    {/* Type Filter */}
                    <div className="filter-bar__group">
                        <label className="filter-bar__label" htmlFor="filter-type">
                            {t('filter.type')}
                        </label>
                        <div className="filter-bar__select-wrap">
                            <select
                                id="filter-type"
                                className="filter-bar__select"
                                value={filters.type}
                                onChange={(e) => handleChange('type', e.target.value)}
                            >
                                <option value="">{t('filter.all_types')}</option>
                                {EVENT_TYPES.map((type) => (
                                    <option key={type} value={type}>
                                        {t(`event_types.${type}`)}
                                    </option>
                                ))}
                            </select>
                            <svg className="filter-bar__chevron" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>

                    {/* College Filter */}
                    <div className="filter-bar__group">
                        <label className="filter-bar__label" htmlFor="filter-college">
                            {t('filter.college')}
                        </label>
                        <div className="filter-bar__select-wrap">
                            <select
                                id="filter-college"
                                className="filter-bar__select"
                                value={filters.college}
                                onChange={(e) => handleChange('college', e.target.value)}
                            >
                                <option value="">{t('filter.all_colleges')}</option>
                                {COLLEGES.map((college) => (
                                    <option key={college} value={college}>
                                        {t(`colleges.${college}`)}
                                    </option>
                                ))}
                            </select>
                            <svg className="filter-bar__chevron" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>

                    {/* Date Filter */}
                    <div className="filter-bar__group">
                        <label className="filter-bar__label" htmlFor="filter-date">
                            {t('filter.date')}
                        </label>
                        <div className="filter-bar__select-wrap">
                            <select
                                id="filter-date"
                                className="filter-bar__select"
                                value={filters.date}
                                onChange={(e) => handleChange('date', e.target.value)}
                            >
                                <option value="">{t('filter.all_dates')}</option>
                                {DATE_RANGES.map((range) => (
                                    <option key={range} value={range}>
                                        {t(`filter.${range}`)}
                                    </option>
                                ))}
                            </select>
                            <svg className="filter-bar__chevron" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Result Count */}
                {hasActiveFilters && (
                    <div className="filter-bar__results">
                        <span className="filter-bar__results-count">{resultCount}</span>
                        <span>{t('filter.results')}</span>
                    </div>
                )}
            </div>
        </div>
    );
}
