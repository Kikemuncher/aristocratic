import React from 'react';
import '../assets/styles.css';

const Contact: React.FC = () => (
    <main className="container contact-main" style={{ minHeight: '60vh', paddingTop: 0 }}>
        <h1 className="hero-title" style={{ fontSize: '2.2rem', margin: '32px 0 8px 0' }}>Contact</h1>
        <p className="contact-tagline" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: 28, marginTop: 0, maxWidth: 420, marginLeft: 'auto', marginRight: 'auto' }}>
            Reach out for collaboration, partnership, or to learn more about our vision for the future of social media.
        </p>
        <div className="contact-info advanced-contact-card">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" style={{ marginBottom: 18 }} xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <radialGradient id="contactGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#e53935" stopOpacity="0.18" />
                        <stop offset="100%" stopColor="#e53935" stopOpacity="0" />
                    </radialGradient>
                </defs>
                <circle cx="18" cy="18" r="17" fill="url(#contactGlow)" />
                <circle cx="18" cy="18" r="15" fill="#fff" fillOpacity="0.04" stroke="#e53935" strokeWidth="1.5" />
                <path d="M12 15.5L18 20L24 15.5" stroke="#e53935" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="12" y="13" width="12" height="10" rx="2" stroke="#e53935" strokeWidth="1.5"/>
            </svg>
            <div style={{ fontWeight: 500, fontSize: '1.08rem', letterSpacing: '0.01em', color: 'var(--text-color)', textAlign: 'center', lineHeight: 1.7 }}>
                Maya Pryce LLC<br />
                PO Box #134<br />
                450 E Silverado Ranch Blvd #120<br />
                Las Vegas, NV 89183
            </div>
        </div>
    </main>
);

export default Contact;