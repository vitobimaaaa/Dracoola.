export default function PremiumFeatures() {
    const features = [
        {image: '/images/feat-privacy.png',
            title: 'Free Whois Privacy',
            description:'Lindungi informasi pribadi Anda dari akses publik dengan layanan WHOIS Privacy gratis pada ekstensi domain yang mendukung.',},
        {image: '/images/feat-dns.png',
            title: 'DNS Management',
            description:'Kelola DNS Record seperti A Record, CNAME, MX, TXT, dan lainnya dengan mudah melalui control panel yang praktis.',},
        {image: '/images/feat-activation.png',
            title: 'Activation Instant',
            description:'Setelah pembayaran berhasil diverifikasi, domain akan diproses dan diaktifkan sesuai kebijakan masing-masing ekstensi.',},
    ];
    return (
        <section className="premium-section">
            <div className="container">
                <div className="premium-wrapper-box">
                    <div className="premium-header-new">
                        <h2>Fitur Premium Dracoola</h2>
                        <p>
                            Nikmati berbagai fitur unggulan yang memberikan perlindungan, kemudahan
                            <br />
                            pengelolaan, dan aktivasi domain yang cepat.
                        </p>
                    </div>

                    <div className="premium-features-grid">
                        {features.map((feature, index) => (
                            <div className="premium-feature-card" key={index}>
                                <div className="feature-image-wrapper">
                                    <img src={feature.image} alt={feature.title} loading="lazy" />
                                </div>
                                <div className="feature-text-content">
                                    <h4>{feature.title}</h4>
                                    <p>{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}