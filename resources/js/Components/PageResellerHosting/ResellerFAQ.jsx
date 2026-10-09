import { useState } from 'react';

export default function ResellerFAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqList = [
        {
            q: 'Apa itu Reseller Hosting?',
            a: 'Reseller Hosting adalah layanan hosting yang memungkinkan kamu menjual kembali layanan hosting kepada pelanggan menggunakan resource hosting yang kamu miliki. Kamu bisa mengelola beberapa akun hosting pelanggan dari satu layanan reseller tanpa perlu membangun dan mengelola server sendiri.',
        },
        {
            q: 'Apa perbedaan Reseller Hosting dengan Web Hosting biasa?',
            a: 'Web Hosting biasanya digunakan untuk mengelola website milik sendiri, sedangkan Reseller Hosting ditujukan untuk kamu yang ingin menyediakan atau menjual layanan hosting kepada pelanggan. Dengan Reseller Hosting, kamu dapat membuat dan mengelola beberapa akun hosting secara terpisah untuk pelanggan.',
        },
        {
            q: 'Apakah saya bisa menggunakan nama brand sendiri?',
            a: 'Bisa. Reseller Hosting memungkinkan kamu menjalankan bisnis hosting menggunakan nama dan brand sendiri. Dengan branding sendiri, pelanggan dapat mengenal layanan hosting yang kamu tawarkan sebagai bagian dari bisnis kamu, bukan sekadar sebagai layanan dari provider hosting.',
        },
        {
            q: 'Apakah saya mendapatkan akses WHM dan cPanel?',
            a: 'Ya. Reseller Hosting menyediakan akses ke WHM (Web Host Manager) untuk mengelola akun hosting pelanggan, sementara pelanggan dapat menggunakan cPanel untuk mengelola website mereka. WHM juga membantu kamu membuat, mengatur, dan mengelola beberapa akun hosting dari satu tempat.',
        },
        {
            q: 'Apakah saya bebas menentukan harga jual hosting?',
            a: 'Ya. Kamu dapat menentukan harga jual dan paket hosting sendiri sesuai strategi bisnis kamu. Dengan begitu, kamu bisa menyesuaikan harga, fitur, dan layanan tambahan dengan target pelanggan yang ingin kamu tuju.',
        },
        {
            q: 'Berapa banyak akun hosting yang dapat saya buat?',
            a: 'Jumlah akun hosting yang dapat dibuat bergantung pada paket Reseller Hosting yang kamu pilih dan resource yang tersedia. Semakin besar resource paket, semakin banyak akun pelanggan yang dapat kamu kelola.',
        },
        {
            q: 'Apakah saya perlu memiliki server sendiri?',
            a: 'Tidak. Kamu tidak perlu membeli atau mengelola server sendiri. Dengan Reseller Hosting, infrastruktur server dikelola oleh provider, sehingga kamu dapat lebih fokus pada mencari pelanggan, mengembangkan bisnis, dan memberikan layanan kepada customer.',

        },
        {
            q: 'Apakah saya bisa upgrade paket reseller?',
            a: 'Bisa. Jika jumlah pelanggan atau kebutuhan resource bisnis kamu semakin besar, kamu dapat upgrade ke paket Reseller Hosting yang lebih tinggi sesuai pilihan yang tersedia.',
        },
        {
            q: 'Apakah Reseller Hosting sudah termasuk SSL Gratis?',
            a: 'Ya, SSL Gratis tersedia untuk website yang menggunakan layanan hosting, sesuai dengan fitur dan ketentuan paket yang berlaku. SSL membantu mengamankan koneksi website dan memungkinkan website menggunakan HTTPS.',

        },
        {
            q: 'Apakah tersedia bantuan teknis jika saya mengalami kendala?',
            a: 'Ya. Kamu dapat menghubungi tim support apabila mengalami kendala teknis terkait layanan Reseller Hosting. Jadi, kamu tidak harus menangani seluruh masalah teknis server sendirian.',

        },
        {
            q: 'Siapa yang cocok menggunakan Reseller Hosting?',
            a: 'Reseller Hosting cocok untuk web developer, freelancer, agensi digital, perusahaan IT, atau siapa pun yang ingin memulai bisnis hosting tanpa harus memiliki infrastruktur server sendiri. Layanan ini juga cocok bagi kamu yang ingin menawarkan hosting sebagai layanan tambahan kepada pelanggan.',
        },
        {
            q: 'Apakah saya bisa memindahkan pelanggan dari penyedia lain?',
            a: 'Bisa. Kamu dapat melakukan migrasi website dan akun hosting pelanggan dari provider lain ke Reseller Hosting, selama memenuhi persyaratan teknis yang diperlukan. Jika membutuhkan bantuan, kamu dapat menghubungi tim support untuk mendapatkan panduan terkait proses migrasi.',

        },
        {
            q: 'Apakah tersedia backup data?',
            a: 'Ketersediaan dan frekuensi backup mengikuti fitur pada paket Reseller Hosting yang dipilih. Backup dapat membantu mengurangi risiko kehilangan data apabila terjadi kesalahan konfigurasi atau masalah pada website. Kalau ternyata semua paket reseller Dracoola sudah include backup, lebih bagus dibuat lebih selling: "Ya. Reseller Hosting dilengkapi dengan fitur backup untuk membantu menjaga keamanan dan mengurangi risiko kehilangan data pelanggan.',
        },
        {
            q: 'Bagaimana jika bisnis saya berkembang?',
            a: 'Tidak perlu khawatir. Saat jumlah pelanggan dan kebutuhan resource semakin meningkat, kamu dapat upgrade ke paket Reseller Hosting yang lebih besar. Dengan resource yang lebih besar, kamu dapat mengelola lebih banyak akun dan terus mengembangkan bisnis hosting kamu.',
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="reseller-faq-section" id="faq">
            <div className="container reseller-faq-container">
                <h2 className="reseller-section-title text-center">FAQ</h2>
                <div className="reseller-faq-list">
                    {faqList.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className={`reseller-faq-item ${isOpen ? 'open' : ''}`}
                            >
                                <button
                                    className="reseller-faq-question"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <svg
                                        className="reseller-faq-chevron"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                    <span>{item.q}</span>
                                </button>
                                <div className="reseller-faq-answer">
                                    <div className="reseller-faq-answer-inner">
                                        <p>{item.a}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

