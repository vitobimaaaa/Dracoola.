export default function DomainPricing({ domains }) {
    const defaultDomains = [
        { ext: '.com', status: 'Tersedia', price: 'Rp 165.000' },
        { ext: '.id', status: 'Tersedia', price: 'Rp 165.000' },
        { ext: '.co.id', status: 'Tersedia', price: 'Rp 165.000' },
        { ext: '.net', status: 'Tersedia', price: 'Rp 165.000' },
        { ext: '.org', status: 'Tersedia', price: 'Rp 165.000' },
        { ext: '.store', status: 'Tersedia', price: 'Rp 165.000' },
        { ext: '.online', status: 'Tersedia', price: 'Rp 165.000' },
    ];

    const displayDomains = domains || defaultDomains;

    return (
        <section className="pricing-table-section">
            <div className="container">
                <div className="pricing-header">
                    <h2 className="pricing-title">Domain Tersedia</h2>
                    <div className="pricing-filter">
                        <span>Pilih dari</span>
                        <select className="pricing-select">
                            <option>Populer</option>
                            <option>Semua</option>
                        </select>
                    </div>
                </div>

                <div className="pricing-table-wrapper">
                    <table className="pricing-table new-style">
                        <thead>
                            <tr>
                                <th>DOMAIN</th>
                                <th>STATUS</th>
                                <th>HARGA/TAHUN</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayDomains.map((domain, index) => (
                                <tr key={index}>
                                    <td className="domain-ext">{domain.ext}</td>
                                    <td className="domain-status-cell">
                                        <div className="domain-status">
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                            </svg>
                                            {domain.status || 'Tersedia'}
                                        </div>
                                    </td>
                                    <td className="domain-price">{domain.price || domain.renew}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="pricing-footer">
                        <button className="checkout-btn">
                            Check Out
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="cart-icon"
                            >
                                <circle cx="9" cy="21" r="1"></circle>
                                <circle cx="20" cy="21" r="1"></circle>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
