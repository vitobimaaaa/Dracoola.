export default function HostingHero() {
    return (
        <section className="hosting-hero-new">
            <div className="hosting-hero-bg"></div>

            <div className="container hosting-hero-content-new">
                <div className="hosting-hero-text-new">
                    <h1 className="hero-title-new">
                        Hosting yang <br />
                        Dibangun untuk <br />
                        <span className="highlight-gold">Performa Maksimal</span>
                    </h1>
                    <p className="hero-description-new">
                        Kami menggabungkan teknologi modern dan dukungan teknis <br />
                        profesional untuk memberikan pengalaman hosting yang <br />
                        cepat, aman, dan mudah dikelola
                    </p>
                </div>

                <div className="hosting-features-horizontal">
                    <div className="hosting-feature-item-horiz">
                        <div className="feature-icon-horiz">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                />
                            </svg>
                        </div>
                        <div className="feature-text-horiz">
                            <h4>Performa Tinggi</h4>
                            <p>
                                LiteSpeed Web Server & SSD NVMe
                                <br />
                                untuk kecepatan akses yang optimal.
                            </p>
                        </div>
                    </div>
                    <div className="hosting-feature-item-horiz">
                        <div className="feature-icon-horiz">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                        <div className="feature-text-horiz">
                            <h4>Uptime 99%</h4>
                            <p>
                                Website tetap online dengan
                                <br />
                                infrastruktur yang andal.
                            </p>
                        </div>
                    </div>
                    <div className="hosting-feature-item-horiz">
                        <div className="feature-icon-horiz">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                />
                            </svg>
                        </div>
                        <div className="feature-text-horiz">
                            <h4>Keamanan Maksimal</h4>
                            <p>
                                SSL gratis, proteksi berlapis,
                                <br />
                                dan monitoring server.
                            </p>
                        </div>
                    </div>
                    <div className="hosting-feature-item-horiz">
                        <div className="feature-icon-horiz">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M18.364 5.636a9 9 0 010 12.728m-2.828-2.828a5 5 0 010-7.07m-2.828 2.828a1 1 0 010 1.414"
                                />
                            </svg>
                        </div>
                        <div className="feature-text-horiz">
                            <h4>Support 24/7</h4>
                            <p>
                                Tim teknis siap membantu
                                <br />
                                kapan saja Anda membutuhkan.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
