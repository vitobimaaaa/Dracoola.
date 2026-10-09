import { useState } from 'react';
export default function DomainHero() {
    const [domain, setDomain] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        alert(`Memeriksa ketersediaan: ${domain}`);
    };

    return (
        <section className="domain-hero">
            <div className="container">
                <h1 className="domain-hero-title">DOMAIN MURAH</h1>
                <p className="section-subtitle domain-hero-subtitle">
                    Setup dan kelola domain murah hanya dari satu tempat
                </p>

                <div className="domain-search-wrapper domain-hero-card">
                    <h3 className="section-title domain-hero-card-title">
                        Periksa Ketersediaan Domain
                    </h3>

                    <form className="search-box domain-hero-form" onSubmit={handleSearch}>
                        <div className="search-input-group">
                            <input
                                type="text"
                                placeholder="Masukan Nama Domain Anda"
                                value={domain}
                                onChange={(e) => setDomain(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary domain-hero-btn">
                            Temukan Domain
                        </button>
                    </form>

                    <div className="popular-extensions-list">
                        <span className="popular-ext-label">Ekstensi Populer:</span>
                        {['.com', '.id', '.net', '.org', '.co.id', '.xyz', '.store', '.site'].map(
                            (ext) => (
                                <span key={ext} className="popular-ext-tag">
                                    {ext}
                                </span>
                            )
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
