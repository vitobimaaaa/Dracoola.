import { useState, useEffect } from 'react';
import { Link, usePage } from '@inertiajs/react';
export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { url } = usePage();
    useEffect(() => {
        let ticking = false;
        // Sync navbar background style on scroll threshold
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const isScrolled = window.scrollY > 30;
                    setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const menuItems = [
        { label: 'Home', href: '/' },
        { label: 'Domain', href: '/domain' },
        { label: 'Web Hosting', href: '/web-hosting' },
        { label: 'Reseller Hosting', href: '/reseller-hosting' },
        { label: 'Support', href: '/support' },
    ];
    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-inner">
                <Link href="/" className="navbar-logo">
                    <img src="/images/logo.png" alt="Dracoola Logo" className="navbar-logo-img" />
                </Link>

                <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.href}
                                className={url === item.href ? 'active' : ''}
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="navbar-actions">
                    <Link href="/login" className="btn btn-outline btn-sm">
                        Login
                    </Link>
                    <button
                        className="mobile-toggle"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </nav>
    );
}