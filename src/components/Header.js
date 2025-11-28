import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>
                Van Wilgenburg
            </Link>
            <nav className={styles.nav}>
                <Link href="/" className={styles.link}>Home</Link>
                <Link href="/machinepark" className={styles.link}>Machinepark</Link>
                <Link href="/scheepsbouw" className={styles.link}>Scheepsbouw</Link>
                <Link href="/constructie" className={styles.link}>Constructie</Link>
                <Link href="/leidingbouw" className={styles.link}>Leidingbouw</Link>
                <Link href="/contact" className={styles.link}>Contact</Link>
            </nav>
        </header>
    );
}
