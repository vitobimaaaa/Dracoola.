import { Link } from '@inertiajs/react';

export default function ArticlesSection({ articles }) {
    const defaultArticles = [
        {
            title: 'Cara Memilih Hosting Terbaik Untuk Website Anda',
            excerpt:
                'Memilih hosting yang tepat adalah langkah penting untuk memastikan website Anda berjalan dengan lancar dan stabil.',
            image: '/images/article-hosting.jpg',
            date: '1 Juni 2025',
            readTime: '5 min read',
        },
        { 
            title: 'Panduan Lengkap Registrasi Domain .ID',
            excerpt:
                'Pelajari langkah-langkah mudah untuk mendaftarkan domain .id dan membangun identitas digital Anda.',
            image: '/images/article-hosting.jpg',
            date: '28 Mei 2025',
            readTime: '4 min read',
        },
        {
            title: 'Tips Mengamankan Website dari Serangan Cyber',
            excerpt:
                'Keamanan website adalah prioritas utama. Simak tips dan trik untuk melindungi website Anda dari ancaman cyber.',
            image: '/images/article-hosting.jpg',
            date: '20 Mei 2025',
            readTime: '6 min read',
        },
    ];

    const displayArticles = articles || defaultArticles;
    return (
        <section className="articles-section">
            <div className="container">
                <div className="section-header">
                    <p className="section-subtitle article-label">Artikel Terbaru</p>
                    <h2 className="section-title">
                        Insight, Tutorial, dan <span className="highlight">Informasi Terbaru</span>
                    </h2>
                </div>

                <div className="articles-grid">
                    {displayArticles.map((article, index) => (
                        <article className="article-card" key={index}>
                            <div className="article-card-image-wrapper">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="article-card-image"
                                    loading="lazy"
                                />
                            </div>
                            <div className="article-card-body">
                                <h3 className="article-card-title">{article.title}</h3>
                                <p className="article-card-excerpt">{article.excerpt}</p>
                                <div className="article-card-meta">
                                    <span>{article.date}</span>
                                    <span>{article.readTime}</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="articles-more">
                    <Link href="#" className="btn-view-all-articles">
                        Lihat Semua Artikel →
                    </Link>
                </div>
            </div>
        </section>
    );
}
