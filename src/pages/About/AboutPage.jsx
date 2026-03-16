import { useTranslation } from 'react-i18next';
import './AboutPage.css';

export default function AboutPage() {
    const { t } = useTranslation();

    return (
        <div className="about-page" id="about-page">
            <div className="about-page__hero">
                <div className="container">
                    <h1 className="about-page__title">{t('nav.about')}</h1>
                    <p className="about-page__subtitle">نحن مجتمع يجمع طلاب جامعة الملك عبدالعزيز في منصة واحدة للفعاليات والأنشطة.</p>
                </div>
            </div>

            <div className="container">
                <div className="about-page__content">
                    <section className="about-page__section">
                        <h2>رؤيتنا</h2>
                        <p>أن نصبح المرجع الأول والوحيد للطالب في جامعة الملك عبدالعزيز لمعرفة كل ما يدور في أروقة الجامعة من فعاليات وبرامج إثرائية.</p>
                    </section>

                    <section className="about-page__section">
                        <h2>أهدافنا</h2>
                        <ul className="about-page__list">
                            <li>تسهيل الوصول للفعاليات الأكاديمية والترفيهية.</li>
                            <li>دعم الأندية الطلابية في الوصول لشريحة أكبر من الطلاب.</li>
                            <li>تعزيز الروح الاجتماعية بين طلاب الجامعة.</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
}
