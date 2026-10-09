export default function SupportTech() {
    const techLogos = [
        { name: 'cPanel', src: '/images/tech/cpanel.png' },
        { name: 'LiteSpeed', src: '/images/tech/litespeed.png' },
        { name: 'PHP', src: '/images/tech/php.png' },
        { name: 'MariaDB', src: '/images/tech/mariadb.png' },
        { name: 'MySQL', src: '/images/tech/mysql.png' },
        { name: 'Softaculous', src: '/images/tech/softaculous.png' },
        { name: 'SSL', src: '/images/tech/ssl.png' },
    ];

    return (
        <section className="support-tech-section">
            <div className="container">
                <div className="support-tech-box">
                    <h3 className="support-tech-title">Teknologi &amp; Partner</h3>
                    <div className="support-tech-logos">
                        {techLogos.map((tech, idx) => (
                            <img
                                key={idx}
                                src={tech.src}
                                alt={tech.name}
                                className="support-tech-logo-img"
                                loading="lazy"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
