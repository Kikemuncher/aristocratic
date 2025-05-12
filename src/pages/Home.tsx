import React from 'react';
import '../assets/styles.css';

const Home: React.FC = () => {
    return (
        <main className="container">
            <section className="hero">
                <h1 className="hero-title">Aristocratic</h1>
                <p className="hero-tagline">
                    We are building a next-generation social media platform 
                    <span className="accent-text"> powered by AI </span> 
                    to create a better internet experience.
                </p>
                <div className="hero-cta">
                    <a href="/contact" className="btn-primary">Connect With Us</a>
                </div>
            </section>
            
            <section className="features-section">
                <div className="section-divider"></div>
                <h2 className="section-title">Our Platform</h2>
                
                <div className="feature-grid">
                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#e53935" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2v6m0 0L9 5m3 3l3-3M4.93 10A9 9 0 0 0 3 16.5V18h18v-1.5a9 9 0 0 0-1.93-6.5" />
                                <path d="M12 19v-8m-3 4h6" />
                            </svg>
                        </div>
                        <h3 className="feature-title">Intelligent Connections</h3>
                        <p className="feature-description">Our proprietary AI algorithms create more meaningful connections between users, enhancing engagement through smart content recommendations.</p>
                    </div>
                    
                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#e53935" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2H2v10l9.29 9.29a1 1 0 0 0 1.42 0l8.3-8.3a1 1 0 0 0 0-1.42l-8.3-8.3A1 1 0 0 0 12 2Z" />
                                <circle cx="7" cy="7" r="1.5" />
                            </svg>
                        </div>
                        <h3 className="feature-title">Privacy-Focused Design</h3>
                        <p className="feature-description">We're creating a social platform that respects user privacy by design, with sophisticated controls and transparent data practices.</p>
                    </div>
                    
                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#e53935" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                <path d="M12 22.5v-11m10-4-10 5-10-5" />
                            </svg>
                        </div>
                        <h3 className="feature-title">Content Intelligence</h3>
                        <p className="feature-description">Our platform leverages machine learning to curate and enhance social content, creating a more personalized and enriching user experience.</p>
                    </div>
                </div>
            </section>
            
            <section className="vision-section">
                <div className="section-divider"></div>
                <h2 className="section-title">Our Vision</h2>
                <div className="vision-content">
                    <p>At Aristocratic, we're building a social media platform that transcends the limitations of current networks. By integrating sophisticated AI, we aim to create connections that are more meaningful, content that's more relevant, and an environment that's more secure.</p>
                    <p>We believe the future of social interaction will be defined by <span className="accent-text">intelligent, adaptive platforms</span> that understand user preferences, protect privacy, and foster genuine community building.</p>
                </div>
            </section>
            
            <section className="team-section">
                <div className="section-divider"></div>
                <h2 className="section-title">Leadership Team</h2>
                <ul className="team-list">
                    <li className="team-member">
                        <div className="team-member-name">Jacob Cordes</div>
                        <div className="team-member-role">Founder</div>
                        <p className="team-member-bio">Visionary entrepreneur with expertise in social platform architecture and user experience design. Jacob leads our strategic direction and platform innovation initiatives.</p>
                    </li>
                    <li className="team-member">
                        <div className="team-member-name">Hamza Hussain</div>
                        <div className="team-member-role">Engineering Lead</div>
                        <p className="team-member-bio">With deep expertise in machine learning and social networking technologies, Hamza oversees the development of our platform's intelligent features and technical infrastructure.</p>
                    </li>
                </ul>
            </section>
            
            <section className="process-section">
                <div className="section-divider"></div>
                <h2 className="section-title">Our Approach</h2>
                <div className="process-steps">
                    <div className="process-step">
                        <div className="process-number">01</div>
                        <h3 className="process-title">Research</h3>
                        <p className="process-description">We analyze user behavior and social interaction patterns to identify opportunities for meaningful improvements in the social media landscape.</p>
                    </div>
                    <div className="process-step">
                        <div className="process-number">02</div>
                        <h3 className="process-title">Design</h3>
                        <p className="process-description">Our team creates intuitive, elegant interfaces and interaction models that prioritize user experience and seamless AI integration.</p>
                    </div>
                    <div className="process-step">
                        <div className="process-number">03</div>
                        <h3 className="process-title">Development</h3>
                        <p className="process-description">We build our platform using cutting-edge technologies, implementing AI features that enhance social connections without compromising privacy.</p>
                    </div>
                    <div className="process-step">
                        <div className="process-number">04</div>
                        <h3 className="process-title">Iteration</h3>
                        <p className="process-description">We continuously refine our platform based on user feedback and emerging technologies, ensuring it evolves with changing social needs.</p>
                    </div>
                </div>
            </section>
            
            <div style={{ textAlign: 'center', margin: '64px 0 0 0' }}>
                <span className="contact-tagline" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginRight: 8 }}>
                    Interested in the future of social media?
                </span>
                <a href="/contact" className="contact-tagline accent-text" style={{ fontWeight: 500, fontSize: '1.1rem', textDecoration: 'underline', background: 'none', border: 'none', padding: 0, margin: 0, cursor: 'pointer' }}>Let's connect.</a>
            </div>
        </main>
    );
};

export default Home;