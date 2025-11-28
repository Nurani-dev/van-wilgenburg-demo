'use client';

import Link from 'next/link';
import styles from './CTASection.module.css';

export default function CTASection() {
    return (
        <section className={styles.ctaSection}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Klaar voor uw project?</h2>
                    <p className={styles.subtitle}>
                        Ontvang vandaag nog een offerte op maat voor uw industriële constructiewerk.
                    </p>
                    <div className={styles.actions}>
                        <button className={styles.primaryBtn} onClick={() => document.getElementById('project-wizard-trigger')?.click()}>
                            Start Aanvraag
                        </button>
                        <Link href="#contact" className={styles.secondaryBtn}>
                            Neem Contact Op
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
