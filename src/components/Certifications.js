'use client';

import styles from './Certifications.module.css';

const certs = [
    { name: "Lloyd's Register", desc: 'Gecertificeerd Lasbedrijf' },
    { name: 'ISO 9001', desc: 'Kwaliteitsmanagement' },
    { name: 'VCA**', desc: 'Veiligheid, Gezondheid & Milieu' },
    { name: 'EN 1090', desc: 'Executieklasse Staalconstructies' },
];

export default function Certifications() {
    return (
        <section className={styles.certifications}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Gecertificeerde Kwaliteit</h2>
                    <p className={styles.subtitle}>Wij voldoen aan de strengste normen voor veiligheid en kwaliteit.</p>
                </div>
                <div className={styles.grid}>
                    {certs.map((cert, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.badge}>
                                <span className={styles.badgeText}>{cert.name}</span>
                            </div>
                            <p className={styles.certDesc}>{cert.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
