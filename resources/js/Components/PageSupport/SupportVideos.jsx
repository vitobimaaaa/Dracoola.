export default function SupportVideos() {
    const videos = [
        {
            id: 1,
            title: 'Cara Memilih Hosting Terbaik Untuk Website Anda',
            desc: 'Ikuti video tutorial langkah demi langkah untuk memilih spesifikasi server dan paket hosting yang tepat untuk kebutuhan bisnis Anda.',
            thumbnail: '/images/thumbnail.jpg',
            badge: 'Creative YouTube',
            url: 'https://youtu.be/8Pz21omzKYY?si=xOjSu3-ZUel6erdc'
        },
        {
            id: 2,
            title: 'Cara Memilih Hosting Terbaik Untuk Website Anda',
            desc: 'Ikuti video tutorial langkah demi langkah untuk memilih spesifikasi server dan paket hosting yang tepat untuk kebutuhan bisnis Anda.',
            thumbnail: '/images/thumbnail.jpg',
            badge: 'Creative YouTube',
            url: 'https://www.youtube.com/watch?v=GANTI_ID_VIDEO_2'
        },
        {
            id: 3,
            title: 'Cara Memilih Hosting Terbaik Untuk Website Anda',
            desc: 'Ikuti video tutorial langkah demi langkah untuk memilih spesifikasi server dan paket hosting yang tepat untuk kebutuhan bisnis Anda.',
            thumbnail: '/images/thumbnail.jpg',
            badge: 'Creative YouTube',
            url: 'https://www.youtube.com/watch?v=GANTI_ID_VIDEO_3'
        },
    ];
    return (
        <section className="support-videos-section">
            <div className="container">
                <div className="support-section-header">
                    <h2 className="support-section-title">Tutorial Video</h2>
                    <p className="support-section-subtitle">
                        Ikuti video tutorial langkah demi langkah untuk mengelola hosting, domain, email,
                        hingga website dengan lebih mudah.
                    </p>
                </div>

                <div className="support-videos-grid">
                    {videos.map((video) => (
                        <div className="support-video-card" key={video.id}>
                            <div className="video-thumb-wrapper">
                                <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className="video-thumb-img"
                                    loading="lazy"
                                />
                                <div className="video-thumb-overlay">
                                    <a
                                        href={video.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="video-play-btn"
                                        aria-label={`Putar video ${video.title}`}
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                        </svg>
                                    </a>
                                </div>
                                <span className="video-badge">{video.badge}</span>
                            </div>
                            <div className="video-card-body">
                                <h3 className="video-card-title">{video.title}</h3>
                                <p className="video-card-description video-card-desc video-card-desciption">{video.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="support-center-cta">
                    <a href="#" className="support-pill-btn">
                        Lihat Semua Video &rarr;
                    </a>
                </div>
            </div>
        </section>
    );
}