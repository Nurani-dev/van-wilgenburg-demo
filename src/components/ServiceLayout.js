'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from './Navbar';
import styles from './ServiceLayout.module.css';

export default function ServiceLayout({ title, subtitle, heroImage, content, details }) {
    return (
        <>
            <Navbar />
            <main className={styles.main}>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className={styles.heroOverlay}></div>
                    <img src={heroImage} alt={title} className={styles.heroImage} />
                    <div className={styles.heroContent}>
                        <motion.h1
                            className={styles.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            {title}
                        </motion.h1>
                        <motion.p
                            className={styles.subtitle}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {subtitle}
                        </motion.p>
                    </div>
                </section>

                {/* Main Content */}
                <section className={styles.contentSection}>
                    <div className={styles.container}>
                        <div className={styles.grid}>
                            <div className={styles.mainText}>
                                <h2 className={styles.sectionTitle}>Over deze dienst</h2>
                                <div className={styles.text}>{content}</div>

                                <div className={styles.ctaBox}>
                                    <h3>Interesse in een samenwerking?</h3>
                                    <p>Neem direct contact op voor een vrijblijvende offerte.</p>
                                    <button onClick={() => document.getElementById('project-wizard-trigger')?.click()} className={styles.primaryBtn}>
                                        Project Starten
                                    </button>
                                </div>
                            </div>

                            <div className={styles.details}>
                                <h3 className={styles.detailsTitle}>Specificaties</h3>
                                <ul className={styles.detailList}>
                                    {details.map((item, index) => (
                                        <li key={index} className={styles.detailItem}>
                                            <span className={styles.checkIcon}>✓</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
