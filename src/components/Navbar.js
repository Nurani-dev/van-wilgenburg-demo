'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';
import { ChevronDown } from 'lucide-react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    Van Wilgenburg <span className={styles.logoAccent}>.</span>
                </Link>

                <ul className={styles.links}>
                    <li
                        className={styles.dropdownItem}
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                    >
                        <span className={styles.link} style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
                            Diensten <ChevronDown size={14} />
                        </span>
                        <AnimatePresence>
                            {dropdownOpen && (
                                <motion.div
                                    className={styles.dropdownMenu}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Link href="/scheepsbouw" className={styles.dropdownLink}>Scheepsbouw en reparatie</Link>
                                    <Link href="/constructie" className={styles.dropdownLink}>Constructie en reparatie</Link>
                                    <Link href="/leidingbouw" className={styles.dropdownLink}>Leidingbouw systemen</Link>
                                    <Link href="/mobiele-service" className={styles.dropdownLink}>Mobiele Service</Link>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </li>
                    <li><Link href="/machinepark" className={styles.link}>Machinepark</Link></li>
                    <li><Link href="/portfolio" className={styles.link}>Portfolio</Link></li>
                    <li><Link href="/over-ons" className={styles.link}>Over Ons</Link></li>
                    <li><Link href="/contact" className={styles.link}>Contact</Link></li>
                </ul>

                <Link href="/contact" className={styles.cta}>
                    Contact Opnemen
                </Link>
            </div>
        </motion.nav>
    );
}
