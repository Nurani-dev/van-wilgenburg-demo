'use client';

import { motion } from 'framer-motion';
import styles from './About.module.css';

export default function About() {
    return (
        <section className={styles.section} id="about">
            <div className={styles.container}>
                <div className={styles.grid}>
                    <motion.div
                        className={styles.content}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className={styles.label}>Over Ons</span>
                        <h2 className={styles.title}>
                            Gedreven door <br />
                            Innovatie & Kwaliteit
                        </h2>
                        <p className={styles.description}>
                            Sinds de oprichting heeft Las en Constructiebedrijf van Wilgenburg zich ontwikkeld tot een toonaangevende speler in de metaalindustrie.
                        </p>

                        <a href="/over-ons" className={styles.linkButton}>
                            Lees meer over ons →
                        </a>
                    </motion.div>

                    <motion.div
                        className={styles.imageSide}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1000&auto=format&fit=crop"
                            alt="Industrial Workshop"
                            className={styles.mainImage}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
