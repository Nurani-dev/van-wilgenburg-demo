'use client';

import { motion } from 'framer-motion';
import styles from './TrustBar.module.css';

// Placeholder logos - in a real app these would be SVGs or images
const logos = [
    { name: 'Damen Shipyards', id: 1 },
    { name: 'Royal IHC', id: 2 },
    { name: 'Heerema', id: 3 },
    { name: 'Boskalis', id: 4 },
    { name: 'Mammoet', id: 5 },
    { name: 'Van Oord', id: 6 },
    { name: 'Allseas', id: 7 },
];

export default function TrustBar() {
    return (
        <section className={styles.trustBar}>
            <div className={styles.container}>
                <p className={styles.label}>Vertrouwd door marktleiders</p>
                <div className={styles.slider}>
                    <motion.div
                        className={styles.track}
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 20,
                            ease: "linear"
                        }}
                    >
                        {[...logos, ...logos].map((logo, index) => (
                            <div key={`${logo.id}-${index}`} className={styles.logoItem}>
                                <span className={styles.logoText}>{logo.name}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
