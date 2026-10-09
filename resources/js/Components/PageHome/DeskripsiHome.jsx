import { Link } from '@inertiajs/react';
export default function HeroSection() {
    return (
        <section className="hero">
            <div className="container hero-content">
                <div className="hero-text">
                    <span className="hero-badge">Welcome to Dracoola.com</span>
                    <h1 className="hero-title">
                        Bangun Website Secepat
                        <br />
                        <span className="highlight">Kekuatan Dracoola</span>
                    </h1>
                    <p className="hero-description">
                        Registrasi domain, web hosting berperforma tinggi, dan server Indonesia
                        maupun USA yang dirancang untuk memberikan kecepatan maksimal, keamanan
                        optimal dan uptime yang dapat diandalkan.
                    </p>
                    <div className="hero-buttons">
                        <Link href="/domain" className="btn btn-primary btn-lg">
                            Mulai Sekarang →
                        </Link>
                        <Link href="/web-hosting" className="btn btn-outline btn-lg">
                            Lihat Paket Hosting
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}