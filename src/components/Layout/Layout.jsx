import { Outlet } from 'react-router-dom';
import { useLanguage } from '../../hooks';
import { Header } from '../Header';
import { Footer } from '../Footer';
import './Layout.css';

export default function Layout() {
    const { fontFamily } = useLanguage();

    return (
        <div className="layout" style={{ fontFamily }} id="app-layout">
            <Header />
            <main className="layout__main" id="main-content">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
