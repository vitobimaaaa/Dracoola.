import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import ResellerHero from '@/Components/PageResellerHosting/ResellerHero';
import ResellerFeatures from '@/Components/PageResellerHosting/ResellerFeatures';
import ResellerPlans from '@/Components/PageResellerHosting/ResellerCards';
import ResellerComparisonTable from '@/Components/PageResellerHosting/ResellerComparisonTable';
import ResellerTech from '@/Components/PageResellerHosting/ResellerTech';
import ResellerFAQ from '@/Components/PageResellerHosting/ResellerFAQ';
import '../../css/ResellerHosting.css';

export default function ResellerHosting() {
    return (
        <MainLayout>
            <Head title="Reseller Hosting - Dracoola Multimedia" />
            <ResellerHero />
            <div className="main-content-bg">
                <ResellerFeatures />
                <ResellerPlans />
                <ResellerComparisonTable />
                <ResellerTech />
                <ResellerFAQ />
            </div>
        </MainLayout>
    );
}
