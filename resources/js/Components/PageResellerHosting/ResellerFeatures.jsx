export default function ResellerFeatures() {
    const features = [
        {
            title: 'White Label',
            desc: 'Bangun bisnis dengan identitas dan branding Anda sendiri.',
        },
        {
            title: 'Kelola Banyak Client',
            desc: 'Kelola akun client dengan mudah via WHM & cPanel.',
        },
        {
            title: 'LiteSpeed Web Server',
            desc: 'Website pelanggan lebih cepat dengan performa server modern.',
        },
        {
            title: 'SSL Gratis',
            desc: 'Semua akun hosting dapat menggunakan SSL gratis.',
        },
        {
            title: 'Mudah Dikembangkan',
            desc: 'Mudah upgrade kapasitas & resources sesuai kebutuhan pelanggan.',
        },
        {
            title: 'Support 24/7',
            desc: 'Tim teknis siap membantu ketika Anda membutuhkan.',
        },
    ];

    return (
        <section className="reseller-features-section">
            <div className="container">
                <div className="reseller-section-header">
                    <h2 className="reseller-section-title">
                        Semua yang Dibutuhkan untuk Memulai Bisnis Hosting
                    </h2>
                    <p className="reseller-section-subtitle">
                        Fokus mengembangkan bisnis, sementara kami menangani infrastruktur server dan performanya.
                    </p>
                </div>

                <div className="reseller-features-grid">
                    {features.map((item, index) => (
                        <div key={index} className="reseller-feature-card">
                            <h4>{item.title}</h4>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
