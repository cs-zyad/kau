import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components';
import { HomePage } from './pages';
import './i18n';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<HomePage />} />
                    {/* Future pages will be added here */}
                    {/* <Route path="events" element={<EventsPage />} /> */}
                    {/* <Route path="calendar" element={<CalendarPage />} /> */}
                    {/* <Route path="clubs" element={<ClubsPage />} /> */}
                    {/* <Route path="about" element={<AboutPage />} /> */}
                    {/* <Route path="contact" element={<ContactPage />} /> */}
                    {/* <Route path="login" element={<LoginPage />} /> */}
                    {/* <Route path="register" element={<RegisterPage />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
