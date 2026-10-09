import { Link } from '@inertiajs/react';
export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <img
                            src="/images/logo.png"
                            alt="Dracoola Multimedia"
                            className="footer-logo"
                        />
                    </div>

                    <div className="footer-links-col">
                        <ul className="footer-links">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/domain">Domain</Link>
                            </li>
                            <li>
                                <Link href="/web-hosting">Web Hosting</Link>
                            </li>
                            <li>
                                <Link href="/reseller-hosting">Reseller Hosting</Link>
                            </li>
                            <li>
                                <Link href="/support">Support</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-links-col">
                        <ul className="footer-links">
                            <li>
                                <Link href="/terms">Term of Service</Link>
                            </li>
                            <li>
                                <Link href="/faq">FAQ</Link>
                            </li>
                            <li>
                                <Link href="/news">News</Link>
                            </li>
                            <li>
                                <Link href="/about">About</Link>
                            </li>
                            <li>
                                <Link href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-info">
                        <div className="footer-company">Dracoola Multimedia</div>
                        <div className="footer-years">(2003-2026)</div>
                        <div className="footer-address">
                            Komplek PLN Duren Tiga, Jl. Batang Agam
                            <br />
                            No. 4A RT/RW 010/002, Duren Tiga, Pancoran,
                            <br />
                            Jakarta Selatan, DKI Jakarta, 12760
                            <br />
                            <a href="mailto:sales1@dracoola.com">sales1@dracoola.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}