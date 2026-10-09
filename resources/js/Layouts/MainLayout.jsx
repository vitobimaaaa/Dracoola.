import { usePage } from '@inertiajs/react';
import Navbar from '@/Components/KomponenLayout/Navigasi';
import Footer from '@/Components/KomponenLayout/Footer';
import PageTransition from '@/Components/KomponenLayout/PageTransition';

export default function MainLayout({ children }) {
    const { url } = usePage();

    return (
        <div className="app-wrapper">
            <Navbar />
            <main>
                <PageTransition pageKey={url}>{children}</PageTransition>
            </main>
            <Footer />
        </div>
    );
}
