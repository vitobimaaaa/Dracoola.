import { Link } from '@inertiajs/react';

function PlanRow({ name, desc, features, price }) {
    return (
        <div className="plan-row-card">
            <div className="plan-row-icon">
                <img
                    src="/images/server-cloud-3d.png"
                    alt={name}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/images/logo.png';
                    }}
                />
            </div>
            <div className="plan-row-info">
                <h3 className="plan-name-gold">{name}</h3>
                <p className="plan-desc-muted">{desc}</p>
                <div className="plan-row-features">
                    {features.map((feat, i) => (
                        <div key={i} className="feat-item">
                            <svg
                                className="check"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                            </svg>
                            <span>{feat}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="plan-row-price-action">
                <div className="price-label">Start from</div>
                <div className="price-value">
                    <span className="currency">Rp </span>
                    {price}
                    <span className="period"> /month</span>
                </div>
                <Link href="#" className="btn-buy-gold">
                    Select a package &rarr;
                </Link>
                <div className="price-sub">*terms and Conditions apply</div>
            </div>
        </div>
    );
}

export default function HostingPlans() {
    return (
        <section className="hosting-list-section">
            <div className="container">
                <h2 className="section-title center">Server USA</h2>

                <div className="hosting-list">
                    <PlanRow
                        name="DAWN"
                        desc="The right start for a new website"
                        features={[
                            '500 MB SSD NVMe',
                            'Free SSL',
                            '1 Website',
                            'LiteSpeed Web Server',
                            'Unlimited Bandwidth',
                            'cPanel',
                            'Unlimited Email',
                            'Daily Backup',
                        ]}
                        price="13.500"
                    />
                    <PlanRow
                        name="DUSK"
                        desc="A Reliable Choice for Business Websites"
                        features={[
                            '750 MB SSD NVMe',
                            'Free SSL',
                            '4 Website',
                            'LiteSpeed Web Server',
                            'Unlimited Bandwidth',
                            'cPanel',
                            'Unlimited Email',
                            'Daily Backup',
                        ]}
                        price="20.000"
                    />
                    <PlanRow
                        name="NIGHT"
                        desc="Ready to Handle Larger Traffic"
                        features={[
                            '1.5 GB SSD NVMe',
                            'Free SSL',
                            '10 Website',
                            'LiteSpeed Web Server',
                            'Unlimited Bandwidth',
                            'cPanel',
                            'Unlimited Email',
                            'Daily Backup',
                        ]}
                        price="40.000"
                    />
                    <PlanRow
                        name="MIDNIGHT"
                        desc="Maximum Performance for Professional Websites"
                        features={[
                            '3 GB SSD NVMe',
                            'Free SSL',
                            '25 Website',
                            'LiteSpeed Web Server',
                            'Unlimited Bandwidth',
                            'Prioritas Support',
                            'Unlimited Email',
                            'Daily Backup',
                        ]}
                        price="80.000"
                    />
                </div>

                <h2 className="section-title center server-section-title">Server Indonesia</h2>

                <div className="hosting-list">
                    <PlanRow
                        name="DAWN"
                        desc="The right start for a new website"
                        features={[
                            '500 MB SSD NVMe',
                            'Free SSL',
                            '1 Website',
                            'LiteSpeed Web Server',
                            'Unlimited Bandwidth',
                            'cPanel',
                            'Unlimited Email',
                            'Daily Backup',
                        ]}
                        price="13.500"
                    />
                    <PlanRow
                        name="DUSK"
                        desc="A Reliable Choice for Business Websites"
                        features={[
                            '750 MB SSD NVMe',
                            'Free SSL',
                            '4 Website',
                            'LiteSpeed Web Server',
                            'Unlimited Bandwidth',
                            'cPanel',
                            'Unlimited Email',
                            'Daily Backup',
                        ]}
                        price="20.000"
                    />
                    <PlanRow
                        name="NIGHT"
                        desc="Ready to Handle Larger Traffic"
                        features={[
                            '1.5 GB SSD NVMe',
                            'Free SSL',
                            '10 Website',
                            'LiteSpeed Web Server',
                            'Unlimited Bandwidth',
                            'cPanel',
                            'Unlimited Email',
                            'Daily Backup',
                        ]}
                        price="40.000"
                    />
                    <PlanRow
                        name="MIDNIGHT"
                        desc="Maximum Performance for Professional Websites"
                        features={[
                            '3 GB SSD NVMe',
                            'Free SSL',
                            '25 Website',
                            'LiteSpeed Web Server',
                            'Unlimited Bandwidth',
                            'Prioritas Support',
                            'Unlimited Email',
                            'Daily Backup',
                        ]}
                        price="80.000"
                    />
                </div>
            </div>
        </section>
    );
}
