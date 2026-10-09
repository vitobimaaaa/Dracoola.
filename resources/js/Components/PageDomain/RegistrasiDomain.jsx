export default function WhyDracoola() {
    const reasons = [
        {
            title: 'Proses cepat & mudah',
            description: 'Proses aktivasi domain dalam waktu singkat',
        },
        {
            title: 'Pilihan Ekstensi Lengkap',
            description: 'Mulai dari .com, .id, .net, .org. Hingga berbagai TLD lainnya',
        },
        {
            title: 'Keamanan Terpercaya',
            description: 'Kelola domain dengan sistem yang aman dan mudah digunakan',
        },
        {
            title: 'Support Responsif 24/7',
            description: 'Tim kami siap membantu setiap kali Anda membutuhkan',
        },
    ];

    return (
        <section className="why-section">
            <div className="container">
                <div className="why-banner-box">
                    <div className="why-banner-left">
                        <img
                            src="/images/globe-icon.png"
                            alt="Globe Icon"
                            className="why-globe-icon"
                            loading="lazy"
                        />
                    </div>

                    <div className="why-banner-right">
                        <h2 className="why-banner-title">Kenapa Registrasi Domain di Dracoola?</h2>

                        <div className="why-banner-content">
                            <div className="why-banner-list">
                                {reasons.map((reason, index) => (
                                    <div className="why-banner-item" key={index}>
                                        <div className="check-icon">
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="#d5b885"
                                                stroke="#d5b885"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M12 2l2.4 2.6 3.5-.6 1.4 3.3 3.3 1.4-.6 3.5 2.6 2.4-2.6 2.4.6 3.5-3.3 1.4-1.4 3.3-3.5-.6L12 22l-2.4-2.6-3.5.6-1.4-3.3-3.3-1.4.6-3.5L2 9.6l2.6-2.4-.6-3.5 3.3-1.4 1.4-3.3 3.5.6L12 2z" />
                                                <polyline
                                                    points="8 12 11 15 16 9"
                                                    stroke="#111"
                                                    strokeWidth="3"
                                                />
                                            </svg>
                                        </div>
                                        <div className="why-item-text">
                                            <h4>{reason.title}</h4>
                                            <p>{reason.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="why-banner-action">
                                <button className="register-now-btn">
                                    Registrasi Sekarang
                                    <svg
                                        viewBox="0 0 24 24"
                                        width="20"
                                        height="20"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </button>
                                <span className="terms-text">*Syarat dan ketentuan berlaku</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
