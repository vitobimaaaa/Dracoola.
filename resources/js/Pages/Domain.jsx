import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import DomainHero from '@/Components/PageDomain/DomainHero';
import DomainPromo from '@/Components/PageDomain/Promo';
import DomainPricing from '@/Components/PageDomain/Harga';
import WhyDracoola from '@/Components/PageDomain/RegistrasiDomain';
import PremiumFeatures from '@/Components/PageDomain/FiturPremium';
import DomainProtection from '@/Components/PageDomain/PageProtection';
import DomainGuide from '@/Components/PageDomain/PanduanSyarat';
import DomainFAQ from '@/Components/PageDomain/DomainFAQ';
import '../../css/DomainPage.css';

export default function Domain({ domains, faqs }) {
    return (
        <MainLayout>
            <Head title="Domain Murah - Registrasi Domain Terpercaya" />
            <DomainHero />
            <div className="main-content-bg">
                <DomainPromo />
                <DomainPricing domains={domains} />
                <WhyDracoola />
                <PremiumFeatures />
                <DomainProtection />
                <DomainGuide />
                <DomainFAQ faqs={faqs} />
            </div>
        </MainLayout>
    );
}
