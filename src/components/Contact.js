'use client';

import { motion } from 'framer-motion';
import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section className={styles.section} id="contact">
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className={styles.title}>Klaar voor de start?</h2>
                    <p className={styles.subtitle}>
                        Neem contact op voor een vrijblijvende offerte of meer informatie over onze diensten.
                    </p>
                </motion.div>

                <motion.form
                    className={styles.form}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <div className={styles.inputGroup}>
                        <label className={styles.label} htmlFor="name">Naam</label>
                        <input type="text" id="name" className={styles.input} placeholder="Uw naam" />
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label} htmlFor="email">Email</label>
                        <input type="email" id="email" className={styles.input} placeholder="uw@email.com" />
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.label} htmlFor="message">Bericht</label>
                        <textarea id="message" className={styles.textarea} placeholder="Waar kunnen we u mee helpen?"></textarea>
                    </div>

                    <button type="submit" className={styles.submitBtn}>Verstuur Bericht</button>
                </motion.form>

                <div className={styles.footer}>
                    <p>© {new Date().getFullYear()} Las en Constructiebedrijf van Wilgenburg</p>
                    <p>Nikkelstraat 25D, 8211 AJ Lelystad</p>
                    <p>Tel: 0652392862 • KvK: 56619642</p>
                </div>
            </div>
        </section>
    );
}
