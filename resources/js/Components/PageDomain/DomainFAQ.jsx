import { useState } from 'react';

export default function DomainFAQ({ faqs }) {
    const [openIndex, setOpenIndex] = useState(null);

    const defaultFAQs = [
        {
            question: 'Apa itu nama domain?',
            answer: 'Nama domain adalah alamat unik yang digunakan untuk mengakses website di internet, seperti namabisnis.id atau namabisnis.com. Domain memudahkan pengunjung menemukan website tanpa harus mengingat alamat IP server.',
        },
        {
            question: 'Bagaimana cara mengetahui apakah nama domain masih tersedia?',
            answer: 'Kamu dapat mengecek ketersediaan nama domain melalui fitur pencarian domain Dracoola. Masukkan nama domain yang diinginkan, kemudian sistem akan menampilkan apakah domain tersebut masih tersedia untuk didaftarkan atau sudah dimiliki oleh pihak lain.',
        },
        {
            question: 'Berapa lama proses aktivasi domain?',
            answer: 'Aktivasi domain umumnya berlangsung secara otomatis setelah pembayaran terverifikasi. Proses aktivasi biasanya memakan waktu beberapa menit hingga maksimal 24 jam setelah pembayaran dikonfirmasi, tergantung ekstensi domain.',
        },
        {
            question: 'Apa perbedaan domain .com, .id, .co.id, dan .net?',
            answer: 'Setiap ekstensi memiliki tujuan spesifik: .com umum digunakan untuk bisnis & komersial, .id untuk identitas Indonesia, .co.id untuk perusahaan/badan usaha resmi di Indonesia, dan .net untuk jaringan atau layanan umum.',
        },
        {
            question: 'Apakah saya bisa mentransfer domain ke Dracoola?',
            answer: 'Ya, domain yang memenuhi persyaratan transfer dapat dipindahkan ke Dracoola. Pastikan domain dalam kondisi dapat ditransfer dan kamu memiliki akses ke informasi atau kode otorisasi (EPP/Auth Code) yang diperlukan.Untuk domain tertentu, terdapat persyaratan tambahan yang perlu dipenuhi sebelum proses transfer dilakukan.',
        },
        {
            question: 'Apakah domain harus diperpanjang setiap tahun?',
            answer: 'Ya. Domain memiliki masa berlaku tertentu dan perlu diperpanjang sebelum tanggal kedaluwarsa agar tetap aktif dan dapat digunakan. Kamu dapat melakukan perpanjangan domain sesuai periode yang tersedia pada ekstensi domain tersebut.',
        },
        {
            question: 'Apa yang terjadi jika domain tidak diperpanjang?',
            answer: 'Jika domain tidak diperpanjang hingga melewati masa berlaku, domain dapat dinonaktifkan dan website maupun layanan email yang menggunakan domain tersebut dapat berhenti berfungsi. Setelah melewati masa kedaluwarsa, domain juga dapat memasuki periode tertentu sebelum akhirnya tersedia kembali untuk didaftarkan oleh pihak lain. Ketentuan periode tersebut berbeda untuk setiap ekstensi domain. Sebaiknya lakukan perpanjangan sebelum tanggal kedaluwarsa untuk menghindari gangguan layanan atau kehilangan domain.',
        },
        {
            question: 'Apakah domain yang saya beli bisa digunakan di hosting lain?',
            answer: 'Ya. Domain yang didaftarkan di Dracoola tidak wajib digunakan dengan hosting Dracoola. Kamu dapat mengarahkan domain ke layanan hosting lain dengan melakukan pengaturan DNS atau nameserver sesuai konfigurasi dari penyedia hosting yang digunakan.',
        },
        {
            question: 'Apakah saya harus membeli hosting saat mendaftarkan domain?',
            answer: 'Tidak. Domain dan hosting merupakan dua layanan yang berbeda. Kamu dapat membeli domain terlebih dahulu tanpa harus langsung membeli hosting. Hosting diperlukan apabila kamu ingin menyimpan file website dan menjalankan website tersebut secara online.',
        },
        {
            question: 'Apakah data pribadi saya akan terlihat oleh publik?',
            answer: 'Tidak semua informasi pemilik domain ditampilkan secara publik. Informasi yang ditampilkan dapat berbeda tergantung ekstensi domain, kebijakan registry, dan aturan perlindungan data yang berlaku. Dracoola juga memproses data pelanggan sesuai dengan kebijakan privasi dan ketentuan yang berlaku.',
        },
        {
            question: 'Dokumen apa saja yang dibutuhkan untuk registrasi domain .ID?',
            answer: 'Persyaratan dokumen dapat berbeda tergantung jenis domain .ID yang dipilih. Untuk domain tertentu seperti .co.id, biasanya diperlukan dokumen yang membuktikan identitas atau legalitas pemilik, seperti KTP dan/atau dokumen legalitas usaha. Dokumen yang diperlukan dapat mengikuti ketentuan registry dan dapat berubah sewaktu-waktu. Untuk memastikan persyaratan terbaru, pelanggan dapat melihat ketentuan registrasi yang berlaku saat melakukan pemesanan.',
        },
        {
            question: 'Apakah saya bisa memiliki lebih dari satu domain?',
            answer: 'Ya. Kamu dapat memiliki lebih dari satu domain selama domain tersebut tersedia dan memenuhi persyaratan registrasi yang berlaku. Memiliki beberapa domain juga dapat membantu bisnis mengamankan nama brand, menggunakan beberapa ekstensi, atau mengarahkan domain yang berbeda ke website yang sama.',
        },
    ];

    const displayFAQs = defaultFAQs;

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <section className="domain-faq-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="domain-faq-main-title">FAQ</h2>
                </div>

                <div className="domain-faq-list">
                    {displayFAQs.map((faq, index) => (
                        <div
                            className={`domain-faq-item ${openIndex === index ? 'open' : ''}`}
                            key={index}
                        >
                            <button className="domain-faq-question" onClick={() => toggleFAQ(index)}>
                                <svg
                                    className="domain-faq-arrow"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                                <span>{faq.question}</span>
                            </button>
                            <div className="domain-faq-answer">
                                <div className="domain-faq-answer-inner">{faq.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
