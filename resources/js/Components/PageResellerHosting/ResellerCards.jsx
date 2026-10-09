import { Link } from '@inertiajs/react';

export default function ResellerPlans() {
    const plans = [
        {
            name: 'SANCTUARY',
            badge: null,
            tagline: 'Ideal untuk Memulai dengan paket lengkap',
            price: '75.000',
            popular: false,
            features: [
                'Hingga 20 Akun Hosting',
                'Unlimited Bandwidth',
                'WHM + cPanel',
                'LiteSpeed',
                'SSL Gratis',
                'White Label',
                'Backup Berkala',
            ],
        },
        {
            name: 'OBITUARY',
            badge: '⭐',
            tagline: 'Paling Populer',
            price: '125.000',
            popular: true,
            features: [
                'Hingga 40 Akun Hosting',
                'Unlimited Bandwidth',
                'WHM + cPanel',
                'LiteSpeed',
                'SSL Gratis',
                'White Label',
                'Backup Berkala',
            ],
        },
        {
            name: 'CEMETERY',
            badge: '👑',
            tagline: 'Skala Bisnis',
            price: '225.000',
            popular: false,
            features: [
                'Hingga 80 Akun Hosting',
                'Unlimited Bandwidth',
                'WHM + cPanel',
                'LiteSpeed',
                'SSL Gratis',
                'White Label',
                'Backup Berkala',
            ],
        },
    ];

    return (
        <section className="reseller-plans-section">
            <div className="container">
                <div className="reseller-plans-grid">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`reseller-plan-card ${plan.popular ? 'popular' : ''}`}
                        >
                            <div className="reseller-plan-header">
                                <h3 className="reseller-plan-title">
                                    {plan.name}
                                    {plan.badge && (
                                        <span className="reseller-plan-badge-icon">
                                            {plan.badge}
                                        </span>
                                    )}
                                </h3>
                                <p className="reseller-plan-tagline">{plan.tagline}</p>
                                <div className="reseller-plan-price-box">
                                    <span className="reseller-plan-price-currency">Rp</span>
                                    <span className="reseller-plan-price-amount">{plan.price}</span>
                                    <span className="reseller-plan-price-period"> / bln</span>
                                </div>
                            </div>

                            <div className="reseller-plan-body">
                                <ul className="reseller-plan-checklist">
                                    {plan.features.map((feat, fIdx) => (
                                        <li key={fIdx}>
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2.5"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link href="#" className="reseller-btn-join">
                                    Bergabung Sekarang
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
