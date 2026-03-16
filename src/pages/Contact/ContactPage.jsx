import { useTranslation } from 'react-i18next';
import './ContactPage.css';

export default function ContactPage() {
    const { t } = useTranslation();

    return (
        <div className="contact-page" id="contact-page">
            <div className="contact-page__header">
                <div className="container">
                    <h1 className="contact-page__title">{t('nav.contact')}</h1>
                    <p className="contact-page__subtitle">نحن هنا للإجابة على استفساراتكم واقتراحاتكم.</p>
                </div>
            </div>

            <div className="container">
                <div className="contact-page__grid">
                    <div className="contact-page__info">
                        <div className="contact-info-card">
                            <h3>📍 الموقع</h3>
                            <p>جامعة الملك عبدالعزيز، جدة، المملكة العربية السعودية</p>
                        </div>
                        <div className="contact-info-card">
                            <h3>📧 البريد الإلكتروني</h3>
                            <p>support@kau-community.com</p>
                        </div>
                    </div>

                    <form className="contact-page__form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label>الاسم بالكامل</label>
                            <input type="text" placeholder="أدخل اسمك" required />
                        </div>
                        <div className="form-group">
                            <label>البريد الإلكتروني</label>
                            <input type="email" placeholder="email@example.com" required />
                        </div>
                        <div className="form-group">
                            <label>الرسالة</label>
                            <textarea rows="5" placeholder="اكتب رسالتك هنا..." required></textarea>
                        </div>
                        <button type="submit" className="btn btn--primary btn--full">إرسال الرسالة</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
