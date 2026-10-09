import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import SupportHero from '@/Components/PageSupport/SupportHero';
import SupportArticles from '@/Components/PageSupport/SupportArticles';
import SupportVideos from '@/Components/PageSupport/SupportVideos';
import SupportTech from '@/Components/PageSupport/SupportTech';
import SupportFAQ from '@/Components/PageSupport/SupportFAQ';
import '../../css/SupportPage.css';

export default function Support() {
    return (
        <MainLayout>
            <Head title="Pusat Bantuan & Tutorial - Dracoola Multimedia" />
            <div className="main-content-bg">
                <SupportHero />
                <SupportArticles />
                <SupportVideos />
                <SupportTech />
                <SupportFAQ />
            </div>
        </MainLayout>
    );
}
