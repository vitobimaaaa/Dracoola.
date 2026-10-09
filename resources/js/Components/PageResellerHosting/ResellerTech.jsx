export default function ResellerTech() {
    const techLogos = [
        { name: 'cPanel', src: '/images/tech/cpanel.png' },
        { name: 'LiteSpeed', src: '/images/tech/litespeed.png' },
        { name: 'PHP', src: '/images/tech/php.png' },
        { name: 'MariaDB', src: '/images/tech/mariadb.png' },
        { name: 'MySQL', src: '/images/tech/mysql.png' },
        { name: 'Softaculous', src: '/images/tech/softaculous.png' },
        { name: 'SSL Secured', src: '/images/tech/ssl.png' },
    ];

    return (
        <section className="reseller-tech-section">
            <div className="container">
                <div className="reseller-tech-wrapper">
                    <h3 className="reseller-tech-title">Teknologi &amp; Partner</h3>
                    <div className="reseller-tech-logos">
                        {techLogos.map((tech, idx) => (
                            <div key={idx} className="reseller-tech-item" title={tech.name}>
                                <img
                                    src={tech.src}
                                    alt={tech.name}
                                    className="reseller-tech-img"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
