import { useState } from 'react';

export default function DomainSearch() {
    const [domain, setDomain] = useState('');
    const [extension, setExtension] = useState('.com');

    const handleSearch = (e) => {
        e.preventDefault();
        alert(`Mencari domain: ${domain}${extension}`);
    };

    const popularExtensions = [
        { ext: '.com', desc: 'Paling populer', price: 'Rp 150.000' },
        { ext: '.id', desc: 'Untuk Bisnis Indonesia', price: 'Rp 150.000' },
        { ext: '.co.id', desc: 'Perusahaan Resmi', price: 'Rp 150.000' },
        { ext: '.my.id', desc: 'Personal Branding', price: 'Rp 150.000' },
    ];

    return (
        <section className="domain-search-section">
            <div className="container">
                <div className="domain-search-wrapper">
                    <div className="section-header">
                        <h2 className="section-title">TEMUKAN NAMA DOMAIN PILIHAN ANDA</h2>
                        <p className="section-subtitle gold-text">
                            Jangan lewatkan kesempatan ini untuk mendapatkan harga terjangkau!
                        </p>
                    </div>

                    <form className="search-box" onSubmit={handleSearch}>
                        <div className="search-input-group">
                            <input
                                type="text"
                                placeholder="Masukan nama domain anda"
                                value={domain}
                                onChange={(e) => setDomain(e.target.value)}
                            />
                            <div className="search-select-wrapper">
                                <select
                                    value={extension}
                                    onChange={(e) => setExtension(e.target.value)}
                                >
                                    <option value=".com">.com</option>
                                    <option value=".net">.net</option>
                                    <option value=".id">.id</option>
                                    <option value=".co.id">.co.id</option>
                                    <option value=".my.id">.my.id</option>
                                    <option value=".web.id">.web.id</option>
                                </select>
                                <svg
                                    className="select-arrow"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary search-btn">
                            Cari Domain
                        </button>
                    </form>

                    <div className="extensions-grid">
                        {popularExtensions.map((item, index) => (
                            <div className="extension-card" key={index}>
                                <div className="extension-name">
                                    <img
                                        src="/images/bat-icon.png"
                                        alt="Bat Icon"
                                        className="bat-icon"
                                    />
                                    {item.ext}
                                </div>
                                <div className="extension-desc">{item.desc}</div>
                                <div className="extension-price">{item.price}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
