import { Link } from '@inertiajs/react';

export default function SupportArticles() {
    const articles = [
        {
            id: 1,
            title: 'Cara Memilih Hosting Terbaik Untuk Website Anda',
            excerpt:
                'Panduan lengkap mempertimbangkan kapasitas disk, RAM, lokasi server SSD NVMe, serta fitur keamanan cPanel untuk menjamin performa website Anda.',
            date: '1 Juni 2026',
            link: '#',
        },
        {
            id: 2,
            title: 'Cara Memilih Hosting Terbaik Untuk Website Anda',
            excerpt:
                'Panduan lengkap mempertimbangkan kapasitas disk, RAM, lokasi server SSD NVMe, serta fitur keamanan cPanel untuk menjamin performa website Anda.',
            date: '5 Juni 2026',
            link: '#',
        },
        {
            id: 3,
            title: 'Cara Memilih Hosting Terbaik Untuk Website Anda',
            excerpt:
                'Panduan lengkap mempertimbangkan kapasitas disk, RAM, lokasi server SSD NVMe, serta fitur keamanan cPanel untuk menjamin performa website Anda.',
            date: '7 Juni 2026',
            link: '#',
        },
    ];

    return (
        <section className="support-articles-section">
            <div className="container">
                <div className="support-articles-grid">
                    {articles.map((article) => (
                        <article className="support-article-card" key={article.id}>
                            <div className="article-card-header">
                                <div className="article-card-badge" aria-hidden="true">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <h2 className="article-card-title">{article.title}</h2>
                            <p className="article-card-text">{article.excerpt}</p>
                            <div className="article-card-footer">
                                <span className="article-card-date">{article.date}</span>
                                <a href={article.link} className="article-read-more">
                                    Baca Selengkapnya &rarr;
                                </a>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="support-center-cta">
                    <a href="#" className="support-pill-btn">
                        Lihat Semua Artikel &rarr;
                    </a>
                </div>
            </div>
        </section>
    );
}
