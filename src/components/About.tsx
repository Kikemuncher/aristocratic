import React from 'react';
import '../assets/styles.css';

const About: React.FC = () => (
    <main className="container about-main">
        <section className="about-hero" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '40vh', marginBottom: 48}}>
            <h1 className="hero-title" style={{ fontSize: '2.5rem', marginBottom: 10, letterSpacing: '-0.01em' }}>About Aristocratic</h1>
            <p className="about-tagline" style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', marginBottom: 36, maxWidth: 700, textAlign: 'center', lineHeight: 1.7 }}>
                We are building the next generation social media platform. Advanced algorithms, privacy, and creativity converge to empower authentic human connection.
            </p>
        </section>
        <section className="about-content" style={{marginBottom: 64}}>
            <div className="about-cards-asym">
                <div className="about-card-adv about-card-mission">
                    <h2 className="about-card-title">Our Mission</h2>
                    <p className="about-card-desc">We aim to redefine social media by creating a platform that empowers users, protects privacy, and uses technology to foster genuine, meaningful connections.</p>
                </div>
                <div className="about-card-adv about-card-diff">
                    <h2 className="about-card-title">What Makes Us Different</h2>
                    <ul className="about-list-adv">
                        <li><span className="accent-text">Algorithmic Experience:</span> Personalized feeds, smart moderation, and content discovery powered by advanced algorithms.</li>
                        <li><span className="accent-text">Privacy by Design:</span> User data is protected and transparent. No hidden tracking or exploitation.</li>
                        <li><span className="accent-text">Community First:</span> Tools to build, manage, and grow authentic communities with real impact.</li>
                        <li><span className="accent-text">Minimalist, Distraction-Free:</span> A clean, focused interface that puts people and ideas at the center.</li>
                    </ul>
                </div>
                <div className="about-card-adv about-card-vision">
                    <h2 className="about-card-title">Our Vision</h2>
                    <p className="about-card-desc">We see a digital world where social platforms are safe, inspiring, and truly social. Technology should amplify creativity and connection, not noise or division.</p>
                </div>
            </div>
        </section>
        <section className="about-timeline-adv">
            <h2 className="about-timeline-title">How We’re Building the Future</h2>
            <div className="timeline-steps-adv">
                <div className="timeline-step-adv">
                    <div className="timeline-dot-adv"></div>
                    <div className="timeline-content-adv">
                        <h3>Research & Ideation</h3>
                        <p>We study user needs, digital trends, and ethical technology to design a platform that solves real problems.</p>
                    </div>
                </div>
                <div className="timeline-step-adv">
                    <div className="timeline-dot-adv"></div>
                    <div className="timeline-content-adv">
                        <h3>Design & Prototyping</h3>
                        <p>Our team creates elegant, intuitive interfaces and prototypes, focusing on usability and delight.</p>
                    </div>
                </div>
                <div className="timeline-step-adv">
                    <div className="timeline-dot-adv"></div>
                    <div className="timeline-content-adv">
                        <h3>Algorithm Integration</h3>
                        <p>We build and test advanced algorithms for personalization, moderation, and content curation. This ensures a smarter, safer, and more relevant experience for every user.</p>
                    </div>
                </div>
                <div className="timeline-step-adv">
                    <div className="timeline-dot-adv"></div>
                    <div className="timeline-content-adv">
                        <h3>Community Launch</h3>
                        <p>We launch with a focus on real communities, gathering feedback and iterating rapidly.</p>
                    </div>
                </div>
                <div className="timeline-step-adv">
                    <div className="timeline-dot-adv"></div>
                    <div className="timeline-content-adv">
                        <h3>Continuous Evolution</h3>
                        <p>We listen, learn, and evolve. Our platform adapts to new technologies and the needs of our users.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="about-principles-adv">
            <h2 className="about-timeline-title">Our Principles</h2>
            <ul className="principles-list-adv">
                <li className="principle-card-adv">
                    <h3>Transparency</h3>
                    <p>Users always know how their data is used and how our algorithms work. Our platform is built with openness at its core.</p>
                </li>
                <li className="principle-card-adv">
                    <h3>Security</h3>
                    <p>We use state-of-the-art encryption and security practices to protect every interaction and piece of information on our platform.</p>
                </li>
                <li className="principle-card-adv">
                    <h3>Empowerment</h3>
                    <p>We design features that give users control over their experience, privacy, and the communities they build or join.</p>
                </li>
                <li className="principle-card-adv">
                    <h3>Innovation</h3>
                    <p>We constantly experiment and iterate, bringing the latest in technology and design to social media in a way that serves people first.</p>
                </li>
            </ul>
        </section>
    </main>
);

export default About;