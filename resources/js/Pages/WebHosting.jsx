import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import HostingHero from '@/Components/PageWebHosting/HostingHero';
import HostingPlans from '@/Components/PageWebHosting/HostingPlans';
import HostingFAQ from '@/Components/PageWebHosting/HostingFAQ';
import '../../css/WebHosting.css';

export default function WebHosting() {
    return (
        <MainLayout>
            <Head title="Web Hosting - Dracoola" />
            <HostingHero />
            <div className="main-content-bg">
                <HostingPlans />
                <HostingFAQ />
            </div>
        </MainLayout>
    );
}
