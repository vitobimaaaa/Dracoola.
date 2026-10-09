import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import HeroSection from '@/Components/PageHome/DeskripsiHome';
import DomainSearch from '@/Components/PageHome/SearchDomain';
import HostingPlans from '@/Components/PageHome/HostingPlans';
import TechFeatures from '@/Components/PageHome/FiturTeknologi';
import ArticlesSection from '@/Components/PageHome/Artikel';
import '../../css/HomePage.css';

export default function Home({ plans, articles }) {
    return (
        <MainLayout>
            <Head title="Home - Hosting & Domain Terpercaya" />
            <HeroSection />
            <div className="main-content-bg">
                <DomainSearch />
                <HostingPlans plans={plans} />
                <TechFeatures />
                <ArticlesSection articles={articles} />
            </div>
        </MainLayout>
    );
}
