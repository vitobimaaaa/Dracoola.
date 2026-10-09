import { Link } from '@inertiajs/react';

export default function DomainPromo() {
    return (
        <section className="domain-promo">
            <div className="container">
                <div className="promo-card-v2">
                    <div className="promo-bg-text">
                        PROMO DOMAIN
                        <br />
                        PROMO DOMAIN
                    </div>
                    <div className="promo-card-inner">
                        <div className="promo-image-wrapper">
                            <img
                                src="/images/promo-com.png"
                                alt="Promo Domain .COM"
                                className="promo-image-v2"
                            />
                        </div>
                        <div className="promo-content-wrapper">
                            <div className="promo-price-box">
                                <span className="promo-badge-v2">Hanya</span>
                                <div className="promo-price-v2">Rp 109.000</div>
                                <p className="promo-note-v2">untuk tahun pertama</p>
                            </div>
                            <Link href="#" className="btn promo-btn-v2">
                                Dapatkan Sekarang
                            </Link>
                        </div>
                    </div>
                    <div className="promo-footer-note">
                        *berlaku untuk durasi 3 tahun. Biaya perpanjangan akan kembali normal
                        setelah tahun pertama
                    </div>
                </div>
            </div>
        </section>
    );
}
