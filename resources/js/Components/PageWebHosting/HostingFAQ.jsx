import { useState } from 'react';

export default function HostingFAQ({ faqs }) {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const defaultFAQs = [
        {
        question: 'Apa itu web hosting?',
        answer: 'Web hosting adalah layanan yang digunakan untuk menyimpan file, data, dan konten website agar dapat diakses melalui internet. Sederhananya, jika domain adalah alamat website, maka hosting adalah tempat website tersebut disimpan.',
        },
        {
        question: 'Paket hosting mana yang paling cocok untuk saya',
        answer: 'Pilihan paket hosting sebaiknya disesuaikan dengan kebutuhan website, jumlah pengunjung, kapasitas penyimpanan, dan fitur yang diperlukan. Untuk website sederhana seperti company profile, portfolio, atau landing page, paket hosting dasar biasanya sudah cukup. Jika website memiliki trafik tinggi atau membutuhkan resource lebih besar, kamu dapat memilih paket dengan spesifikasi yang lebih tinggi.',
        },
        {
        question: 'Apakah saya bisa upgrade paket hosting?',
        answer: 'Ya. Kamu dapat melakukan upgrade paket hosting apabila kebutuhan website semakin besar. Upgrade dapat menjadi pilihan ketika website mulai mendapatkan lebih banyak pengunjung atau membutuhkan kapasitas penyimpanan dan resource yang lebih besar.',
        },
        {
        question: 'Apakah saya mendapatkan SSL Gratis?',
        answer: 'Ya. Hosting Dracoola menyediakan SSL Gratis untuk membantu mengamankan koneksi antara website dan pengunjung. Dengan SSL, website dapat menggunakan protokol HTTPS dan membantu melindungi data yang dikirimkan melalui website.',
        },
        {
            question: 'Apakah saya bisa membuat email dengan nama domain sendiri?',
            answer: 'Ya. Kamu dapat membuat email profesional menggunakan nama domain sendiri, misalnya info@namabisnis.com atau admin@namabisnis.id, sesuai dengan fitur yang tersedia pada paket hosting yang dipilih. Email dengan domain sendiri dapat membuat komunikasi bisnis terlihat lebih profesional dan terpercaya.',
        },
        {
            question: 'Berapa lama proses aktivasi hosting?',
            answer: 'Hosting biasanya dapat diaktifkan setelah pembayaran berhasil diverifikasi. Pada proses yang berjalan otomatis, layanan dapat digunakan dalam waktu relatif cepat. Jika diperlukan konfigurasi atau verifikasi tambahan, waktu aktivasi dapat berbeda.',
        },
        {
            question: 'Apakah website saya bisa dibackup?',
            answer: 'Ketersediaan dan frekuensi backup mengikuti fitur pada paket hosting yang kamu pilih. Backup sangat berguna sebagai langkah perlindungan apabila terjadi kesalahan konfigurasi, kehilangan data, atau masalah pada website. Catatan: Kalau Dracoola memang punya fitur Daily Backup di semua paket, bagian ini sebaiknya dibuat lebih tegas: "Ya. Website kamu mendapatkan fitur Daily Backup sehingga data dapat dicadangkan secara berkala dan membantu meminimalkan risiko kehilangan data."',
        },
        {
            question: 'Apakah bisa memindahkan website dari penyedia hosting lain ke Dracoola?',
            answer: 'Bisa. Website dari penyedia hosting lain dapat dipindahkan ke Dracoola, selama memenuhi persyaratan teknis yang diperlukan. Jika kamu belum yakin bagaimana proses migrasinya, tim support dapat membantu memberikan panduan sesuai kondisi website kamu.',
        },
        {
            question: 'Apakah hosting Dracoola menggunakan cPanel?',
            answer: 'Ya, hosting Dracoola menggunakan cPanel sebagai control panel untuk membantu mengelola website dan layanan hosting. Melalui cPanel, kamu dapat mengelola file website, database, email, domain, dan berbagai pengaturan hosting lainnya dengan lebih mudah.',
        },
        {
            question: 'Apakah tersedia layanan support jika saya mengalami kendala?',
            answer: 'Ya. Dracoola menyediakan layanan support untuk membantu pelanggan ketika mengalami kendala terkait layanan hosting maupun domain. Jika mengalami masalah, kamu dapat menghubungi tim support melalui kanal yang tersedia untuk mendapatkan bantuan.',
        },
        {
            question: 'Apakah saya harus memiliki domain terlebih dahulu?',
            answer: 'Tidak selalu. Domain dan hosting merupakan dua layanan yang berbeda, sehingga kamu dapat membeli hosting tanpa langsung memiliki domain. Namun, jika ingin membuat website dengan alamat sendiri seperti namabisnis.com, kamu tetap membutuhkan domain dan perlu mengarahkannya ke hosting.',
        },
        {
            question: 'Apa keunggulan hosting di Dracoola?',
            answer: 'Hosting Dracoola dirancang untuk membantu kamu menjalankan website dengan lebih mudah, aman, dan praktis. Dengan fitur seperti SSL, control panel cPanel, backup, dan layanan support, kamu dapat mengelola kebutuhan website tanpa harus memiliki pengetahuan teknis yang mendalam.',
        },
        {
            question: 'Berapa banyak website yang bisa saya buat?',
            answer: 'Jumlah website yang dapat digunakan dalam satu akun hosting bergantung pada paket hosting yang dipilih. Beberapa paket memungkinkan penggunaan lebih dari satu website, sementara paket tertentu mungkin memiliki batasan jumlah website. Pastikan untuk melihat detail masing-masing paket sebelum memilih.',
        },
        {
            question: 'Apakah bandwidth hosting dibatasi?',
            answer: 'Batas bandwidth atau penggunaan resource bergantung pada paket hosting yang dipilih dan ketentuan layanan yang berlaku. Untuk website dengan trafik yang semakin tinggi, sebaiknya pilih paket dengan resource yang sesuai agar performa website tetap optimal.',
        },
        {
            question: 'Apakah hosting Dracoola cocok untuk WordPress?',
            answer: 'Ya. Hosting Dracoola dapat digunakan untuk website berbasis WordPress. WordPress dapat menjadi pilihan yang cocok untuk berbagai kebutuhan, mulai dari blog, company profile, website bisnis, hingga toko online, tergantung kebutuhan dan konfigurasi website.',
        },
    ];
    const displayFAQs = faqs || defaultFAQs;

    return (
        <section className="hosting-faq-section" id="faq">
            <div className="container hosting-faq-container">
                <h2 className="section-title text-center">FAQ</h2>
                <div className="hosting-faq-list">
                    {displayFAQs.map((q, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                className={`hosting-faq-item ${isOpen ? 'open' : ''}`}
                                key={index}
                            >
                                <button className="hosting-faq-question" onClick={() => toggleFAQ(index)}>
                                    <svg
                                        className="hosting-faq-arrow"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                    <span>{q.question}</span>
                                </button>
                                <div className="hosting-faq-answer">
                                    <div className="hosting-faq-answer-inner">
                                        <p>{q.answer}</p>
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
