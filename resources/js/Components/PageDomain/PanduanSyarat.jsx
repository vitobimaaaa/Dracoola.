export default function DomainGuide() {
    const steps = [
        'Nama domain harus sesuai dengan kriteria penamaan',
        'Nama Domain harus menghormati & tidak bertentangan dengan HaKI, IPR, Hak Paten/Merk',
        'Scan dokumen persyaratan ke dalam format .JPG',
        'Kirimkan scan dokumen ke alamat email sales1 @ dracoola.com',
        'Proses registrasi Domain .ID berkisar antara 1-3 hari & jam kerja kantor pemerintahan',
        'Point nomor V di atas tidak termasuk hari libur dan hari besar Nasional',
    ];

    const extensions = ['.com', '.id', '.co.id', '.net', '.org', '.xyz', '.store', '.site'];

    return (
        <section className="guide-section">
            <div className="container">
                <div className="guide-grid">
                    <div className="guide-box">
                        <h3>Panduan Registrasi Domain</h3>
                        <ul className="guide-list-check">
                            {steps.map((step, index) => (
                                <li key={index}>
                                    <svg
                                        className="guide-check-icon"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <span>{step}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="guide-box">
                        <h3>Syarat & Ketentuan Tiap Ekstensi</h3>
                        <ul className="terms-ext-list">
                            {extensions.map((ext, index) => (
                                <li key={index} className="terms-ext-item">
                                    <span className="terms-ext-name">{ext}</span>
                                    <button className="terms-ext-btn">Lihat Syarat</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
