import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components';
import { HomePage, EventsPage, ClubsPage, AboutPage, ContactPage, LoginPage, RegisterPage } from './pages';
import './i18n';

export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="events" element={<EventsPage />} />
                    <Route path="clubs" element={<ClubsPage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="contact" element={<ContactPage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="register" element={<RegisterPage />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}
