import { Link } from '@inertiajs/react';

export default function HostingPlans({ plans }) {
    const defaultPlans = [
        {
            name: 'DAWN-id',
            tagline: 'Untuk Memulai Website Pertama Anda',
            desc: 'Pilihan ideal bagi personal, blog, portofolio, maupun UMKM yang ingin memiliki website cepat, aman, dan mudah dikelola.',
            features: [
                '500 MB Web Space',
                'Unmetered Bandwidth',
                '1 Addon Domain',
                'Total 2 Domain',
                'Unlimited Email & FTP',
                'cPanel + LiteSpeed + SSL Gratis',
            ],
            featured: false,
        },
        {
            name: 'DUSK-id',
            tagline: 'Untuk Website Bisnis yang Berkembang',
            desc: 'Resource lebih besar untuk website dengan trafik yang mulai meningkat.',
            features: [
                '750 MB Web Space',
                'Unmetered Bandwidth',
                '4 Addon Domain',
                'Total 5 Domain',
                'Unlimited Email & FTP',
                'cPanel + LiteSpeed + SSL Gratis',
            ],
            featured: false,
        },
        {
            name: 'NIGHT-id',
            tagline: 'Untuk Website Profesional',
            desc: 'Performa tinggi untuk website perusahaan, toko online, dan project profesional.',
            features: [
                '1.5 GB Web Space',
                'Unmetered Bandwidth',
                '10 Addon Domain',
                'Total 11 Domain',
                'Unlimited Email & FTP',
                'cPanel + LiteSpeed + SSL Gratis',
            ],
            featured: false,
        },
        {
            name: 'MIDNIGHT-id',
            tagline: 'Untuk Website Skala Besar',
            desc: 'Kapasitas maksimal untuk bisnis yang membutuhkan resource lebih besar.',
            features: [
                '3 GB Web Space',
                'Unmetered Bandwidth',
                '25 Addon Domain',
                'Total 26 Domain',
                'Unlimited Email & FTP',
                'cPanel + LiteSpeed + SSL Gratis',
            ],
            featured: false,
        },
    ];

    const displayPlans = plans || defaultPlans;

    return (
        <section className="hosting-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Hosting Cepat, Stabil, & Siap Berkembang</h2>
                    <p className="section-subtitle gold-text">
                        Bangun website dengan performa tinggi menggunakan LiteSpeed Web Server, SSD
                        NVMe, dan infrastruktur modern. Nikmati kecepatan, keamanan, serta dukungan
                        teknis profesional yang siap membantu Anda kapan saja.
                    </p>
                </div>

                <div className="plans-grid">
                    {displayPlans.map((plan, index) => (
                        <div className={`plan-card ${plan.featured ? 'featured' : ''}`} key={index}>
                            <div className="plan-header-content">
                                <h3 className="plan-name">
                                    <em>{plan.name}</em>
                                </h3>
                                <div className="plan-tagline">{plan.tagline}</div>
                                <div className="plan-desc">{plan.desc}</div>
                            </div>

                            <div className="plan-divider"></div>

                            <ul className="plan-features">
                                {plan.features.map((feature, fIndex) => (
                                    <li key={fIndex}>
                                        <svg
                                            className="check-icon"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="plan-footer">
                                <Link href="#" className="btn btn-outline">
                                    Lihat Detail
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
