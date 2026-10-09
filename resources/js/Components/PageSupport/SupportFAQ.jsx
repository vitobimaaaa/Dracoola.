import { useState } from 'react';
export default function SupportFAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const faqs = [
        {
            q: 'Apakah Dracoola menerima jasa pembuatan website?',
            a: 'Ya. Dracoola menyediakan layanan pembuatan website untuk berbagai kebutuhan, seperti company profile, landing page, website bisnis, maupun kebutuhan lainnya. Kamu bisa berkonsultasi mengenai kebutuhan website agar solusi yang dibuat dapat disesuaikan dengan tujuan dan kebutuhan bisnis kamu.',
        },
        {
            q: 'Berapa lama proses pembuatan website?',
            a: 'Waktu pengerjaan website bergantung pada jenis website, jumlah halaman, fitur, serta tingkat kompleksitas yang dibutuhkan. Setelah kebutuhan website ditentukan, estimasi waktu pengerjaan akan disesuaikan dengan scope proyek.',
        },
        {
            q: 'Apakah desain website bisa disesuaikan?',
            a: 'Bisa. Desain website dapat disesuaikan dengan identitas brand, kebutuhan bisnis, dan preferensi visual kamu. Mulai dari warna, layout, tipografi, hingga elemen visual dapat disesuaikan agar website memiliki tampilan yang sesuai dengan karakter brand.',
        },
        {
            q: 'Apakah website yang dibuat responsif?',
            a: 'Ya. Website dirancang agar responsif dan dapat menyesuaikan tampilan dengan berbagai ukuran layar, termasuk desktop, tablet, dan smartphone. Dengan begitu, pengunjung tetap mendapatkan pengalaman yang nyaman saat mengakses website dari perangkat yang berbeda.',
        },
        {
            q: 'Apakah saya bisa mengelola website sendiri setelah selesai?',
            a: 'Bisa. Website dapat dilengkapi dengan sistem pengelolaan konten sesuai kebutuhan sehingga kamu dapat melakukan perubahan atau pembaruan pada bagian website tertentu. Tim juga dapat memberikan panduan penggunaan agar kamu lebih mudah mengelola website setelah proyek selesai.',
        },
        {
            q: 'Apakah Dracoola menyediakan layanan maintenance website?',
            a: 'Ya. Dracoola dapat menyediakan layanan maintenance website untuk membantu menjaga website tetap berjalan dengan baik. Maintenance dapat mencakup pembaruan, pengecekan, perbaikan masalah, serta penyesuaian tertentu sesuai kebutuhan dan paket layanan yang digunakan.',
        },
        {
            q: 'Apa saja lokasi server yang tersedia di Dracoola?',
            a: 'Lokasi server yang tersedia bergantung pada layanan dan paket yang kamu pilih. Pemilihan lokasi server dapat disesuaikan dengan target pengunjung website agar akses website dapat berjalan secara optimal. Catatan: Kalau Dracoola punya lokasi spesifik seperti Indonesia, Singapura, Amerika, Eropa, sebaiknya nama lokasinya disebutkan langsung di sini agar lebih informatif.',
        },
        {
            q: 'Bagaimana cara memilih lokasi server yang tepat?',
            a: 'Pilih lokasi server yang paling dekat dengan mayoritas target pengunjung website. Contohnya, jika sebagian besar pengunjung website berasal dari Indonesia, memilih server yang berada di Indonesia dapat membantu memberikan waktu respons yang lebih baik.',
        },
        {
            q: 'Apakah server Dracoola menggunakan SSD NVMe?',
            a: 'Ya, server Dracoola menggunakan SSD NVMe untuk mendukung performa penyimpanan dan membantu proses baca-tulis data menjadi lebih cepat dibandingkan penyimpanan berbasis HDD.',
        },
        {
            q: 'Bagaimana keamanan server Dracoola?',
            a: 'Dracoola menerapkan berbagai langkah keamanan untuk membantu melindungi server, website, dan data pelanggan. Perlindungan keamanan dapat mencakup pengamanan infrastruktur server, pemantauan sistem, serta fitur keamanan yang tersedia pada masing-masing layanan',
        },
        {
            q: 'Apakah tersedia backup data?',
            a: 'Ya. Dracoola menyediakan fitur backup pada layanan tertentu untuk membantu mengurangi risiko kehilangan data. Frekuensi dan ketentuan backup dapat berbeda sesuai dengan layanan atau paket yang digunakan.',
        },
        {
            q: 'Bagaimana jika server mengalami gangguan?',
            a: 'Jika terjadi gangguan pada server atau layanan, tim teknis Dracoola akan melakukan pengecekan dan penanganan masalah agar layanan dapat kembali berjalan dengan normal. Pelanggan juga dapat menghubungi tim support apabila mengalami kendala pada layanan yang digunakan',
        },
        {
            q: 'Bagaimana cara membuat akun di Dracoola?',
            a: 'Kamu dapat membuat akun dengan melakukan registrasi melalui website Dracoola. Isi informasi yang diperlukan, kemudian ikuti proses pendaftaran hingga akun berhasil dibuat. Setelah akun aktif, kamu dapat melanjutkan pembelian dan pengelolaan layanan.',
        },
        {
            q: 'Bagaimana cara melihat layanan yang saya miliki?',
            a: 'Setelah login ke akun Dracoola, kamu dapat melihat dan mengelola layanan yang dimiliki melalui dashboard pelanggan. Di sana kamu dapat memeriksa layanan aktif, informasi domain, hosting, tagihan, serta pengaturan terkait lainnya.',
        },
        {
            q: 'Bagaimana cara memperbarui data akun?',
            a: 'Kamu dapat memperbarui informasi akun melalui dashboard pelanggan pada bagian pengaturan atau profil akun. Pastikan informasi seperti nama, email, dan kontak selalu diperbarui agar proses komunikasi dan pemberitahuan terkait layanan dapat berjalan dengan baik.',
        },
        {
            q: 'Bagaimana cara melakukan pembayaran tagihan?',
            a: 'Pembayaran tagihan dapat dilakukan melalui metode pembayaran yang tersedia di Dracoola. Pilih tagihan yang ingin dibayarkan, kemudian ikuti instruksi pembayaran yang ditampilkan hingga transaksi selesai.',
        },
        {
            q: 'Bagaimana cara menghubungi tim support?',
            a: 'Kamu dapat menghubungi tim support melalui kanal bantuan yang tersedia di Dracoola. Sertakan informasi layanan dan jelaskan kendala yang dialami secara detail agar tim support dapat membantu menangani masalah dengan lebih cepat.',
        },
    ];
    return (
        <section className="support-faq-section" id="faq">
            <div className="container">
                <h2 className="support-faq-main-title">FAQ</h2>

                <div className="support-faq-layout">
                    <div className="support-faq-list">
                        {faqs.map((faq, idx) => {
                            const isOpen = openIndex === idx;
                            return (
                                <div
                                    key={idx}
                                    className={`support-faq-item ${isOpen ? 'open' : ''}`}
                                >
                                    <button
                                        type="button"
                                        className="support-faq-question"
                                        onClick={() => toggleFAQ(idx)}
                                        aria-expanded={isOpen}
                                    >
                                        <span className="support-faq-question-text">
                                            <svg
                                                className="support-faq-chevron"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                            >
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                            {faq.q}
                                        </span>
                                    </button>
                                    <div className="support-faq-answer">
                                        <div className="support-faq-answer-inner">
                                            <div className="support-faq-answer-content">
                                                {faq.a}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <aside className="support-help-sidebar">
                        <div className="support-help-card">
                            <h3 className="support-help-title">Masih Butuh Bantuan?</h3>
                            <p className="support-help-desc">
                                Tim support kami siap membantu anda kapan saja.
                            </p>

                            <div className="support-contact-list">
                                <div className="support-contact-item">
                                    <div className="contact-item-icon">
                                        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
                                        </svg>
                                    </div>
                                    <div className="contact-item-info">
                                        <span className="contact-item-label">Hubungi Kami 24/7</span>
                                    </div>
                                </div>

                                <div className="support-contact-item">
                                    <div className="contact-item-icon">
                                        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                    </div>
                                    <div className="contact-item-info">
                                        <span className="contact-item-label">Live Chat</span>
                                        <span className="contact-item-sub">Online 24/7</span>
                                    </div>
                                </div>

                                <div className="support-contact-item">
                                    <div className="contact-item-icon">
                                        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div className="contact-item-info">
                                        <span className="contact-item-label">Email</span>
                                        <a href="mailto:support@dracoola.com" className="contact-item-value">
                                            support@dracoola.com
                                        </a>
                                    </div>
                                </div>

                                <div className="support-contact-item">
                                    <div className="contact-item-icon">
                                        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div className="contact-item-info">
                                        <span className="contact-item-label">Telepon</span>
                                        <a href="tel:+622134567890" className="contact-item-value">
                                            +62 21 3456 7890
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="support-help-actions">
                                <a href="#" className="btn-help-outline">
                                    Kirim Tiket
                                </a>
                                <a href="#" className="btn-help-gold">
                                    Bicara Sekarang 
                                </a>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}