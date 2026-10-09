import { Link } from '@inertiajs/react';

export default function ResellerComparisonTable() {
    const tableData = [
        { feature: 'Web Space (SSD NVMe)', sanctuary: '3 GB', obituary: '6 GB', sanctuaryCrown: '12 GB' },
        { feature: 'Bandwidth / Bulan', sanctuary: 'Unmetered', obituary: 'Unmetered', sanctuaryCrown: 'Unmetered' },
        { feature: 'Akun Hosting', sanctuary: 'Hingga 20', obituary: 'Hingga 40', sanctuaryCrown: 'Hingga 80' },
        { feature: 'Addon Domain', sanctuary: 'Unlimited', obituary: 'Unlimited', sanctuaryCrown: 'Unlimited' },
        { feature: 'cPanel & WHM', sanctuary: true, obituary: true, sanctuaryCrown: true },
        { feature: 'LiteSpeed Web Server', sanctuary: true, obituary: true, sanctuaryCrown: true },
        { feature: 'SSL Gratis', sanctuary: true, obituary: true, sanctuaryCrown: true },
        { feature: 'Softaculous Auto Installer', sanctuary: true, obituary: true, sanctuaryCrown: true },
        { feature: 'Backup Harian', sanctuary: true, obituary: true, sanctuaryCrown: true },
        { feature: 'Backup Mingguan', sanctuary: true, obituary: true, sanctuaryCrown: true },
        { feature: 'Instant Account Setup', sanctuary: true, obituary: true, sanctuaryCrown: true },
        { feature: 'White Label Branding', sanctuary: true, obituary: true, sanctuaryCrown: true },
        { feature: 'Support 24/7', sanctuary: true, obituary: true, sanctuaryCrown: true },
        { feature: 'Garansi 14 Hari', sanctuary: true, obituary: true, sanctuaryCrown: true },
    ];

    const renderCell = (val) => {
        if (typeof val === 'boolean' && val) {
            return (
                <span className="check-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </span>
            );
        }
        return val;
    };

    return (
        <section className="reseller-table-section">
            <div className="container">
                <div className="reseller-table-wrapper">
                    <table className="reseller-comp-table">
                        <thead>
                            <tr>
                                <th>Fitur Umum Paket</th>
                                <th>SANCTUARY</th>
                                <th>OBITUARY</th>
                                <th>CEMETERY</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((row, idx) => (
                                <tr key={idx}>
                                    <td>{row.feature}</td>
                                    <td>{renderCell(row.sanctuary)}</td>
                                    <td>{renderCell(row.obituary)}</td>
                                    <td>{renderCell(row.sanctuaryCrown)}</td>
                                </tr>
                            ))}
                            <tr className="price-row">
                                <td>Harga / Bulan</td>
                                <td>Rp75.000</td>
                                <td>Rp125.000</td>
                                <td>Rp225.000</td>
                            </tr>
                            <tr className="btn-row">
                                <td></td>
                                <td>
                                    <Link href="#" className="reseller-table-btn">
                                        Pilih Paket
                                    </Link>
                                </td>
                                <td>
                                    <Link href="#" className="reseller-table-btn">
                                        Pilih Paket
                                    </Link>
                                </td>
                                <td>
                                    <Link href="#" className="reseller-table-btn">
                                        Pilih Paket
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
