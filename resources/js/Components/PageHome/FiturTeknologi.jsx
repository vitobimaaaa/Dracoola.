export default function TechFeatures() {
    const technologies = [
        { name: 'cPanel', icon: '/images/tech/cpanel.png' },
        { name: 'LiteSpeed', icon: '/images/tech/litespeed.png' },
        { name: 'php', icon: '/images/tech/php.png' },
        { name: 'MariaDB', icon: '/images/tech/mariadb.png' },
        { name: 'MySQL', icon: '/images/tech/mysql.png' },
        { name: 'Softaculous', icon: '/images/tech/softaculous.png' },
        { name: 'SSL Encryption', icon: '/images/tech/ssl.png' },
    ];

    return (
        <section className="tech-section">
            <div className="container">
                <div className="tech-wrapper">
                    <div className="tech-header">
                        <h2 className="tech-title">
                            Kekuatan yang Membuat Website Anda
                            <br />
                            Selangkah Lebih Unggul
                        </h2>
                        <p className="tech-subtitle">
                            Teknologi infrastruktur mutakhir yang disiapkan guna menjamin performa
                            puncak, proteksi menyeluruh, serta fleksibilitas kontrol yang mudah.
                        </p>
                    </div>

                    <div className="tech-logos-box">
                        <div className="tech-logos">
                            {technologies.map((tech, index) => (
                                <div className="tech-logo-item" key={index}>
                                    <img
                                        src={tech.icon}
                                        alt={tech.name}
                                        className="tech-logo-img"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
