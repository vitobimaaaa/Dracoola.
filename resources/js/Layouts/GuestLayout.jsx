import { Link } from '@inertiajs/react';

export default function GuestLayout({ children, header = 'Sign In', description = '' }) {
    return (
        <div className="guest-layout-wrapper">
            <div className="auth-bg-overlay"></div>
            <section className="signin auth-card">
                <div className="auth-header">
                    <Link href="/">
                        <img src="/images/logo.png" alt="Dracoola Logo" className="auth-logo" />
                    </Link>
                    <h2 className="auth-title">{header}</h2>
                    {description && <p className="auth-subtitle">{description}</p>}
                </div>
                <div className="content">
                    {children}
                </div>
            </section>
        </div>
    );
}