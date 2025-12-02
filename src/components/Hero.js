'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.contentSide}>
                <motion.div
                    className={styles.badge}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className={styles.badgeDot}></span>
                    Beschikbaar voor Projecten
                </motion.div>

                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    MEESTERS IN <br />
                    <span className={styles.titleHighlight}>METAAL</span>
                </motion.h1>

                <motion.p
                    className={styles.description}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                    Gecertificeerd las- en constructiewerk voor scheepsbouw, industrie en leidingwerk. Volgens Lloyd's Register normen.
                </motion.p>

                <motion.div
                    className={styles.ctaGroup}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <button className={styles.primaryBtn} onClick={() => document.getElementById('project-wizard-trigger')?.click()}>
                        Project Starten
                    </button>
                    <a href="#services" className={styles.secondaryBtn}>
                        Bekijk Diensten
                    </a>
                </motion.div>
            </div>

            <motion.div
                className={styles.visualSide}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                <video
                    src="/images/portfolio/speeltoestel/speeltoestel.mp4"
                    className={styles.heroImage}
                    autoPlay
                    muted
                    loop
                    playsInline
                />

                <div className={styles.overlayCard}>
                    <div className={styles.cardText}>
                        <h5>Direct een offerte?</h5>
                        <p>Start uw aanvraag in 2 minuten.</p>
                    </div>
                    <Link href="#contact" className={styles.ctaButton}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}
