'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './contact.module.css';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.hero}>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Neem Contact Op
          </motion.h1>
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Heeft u een project in gedachten of wilt u meer informatie over onze diensten? Wij staan voor u klaar.
          </motion.p>
        </section>

        <div className={styles.container}>
          <motion.div
            className={styles.infoSection}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className={styles.infoBlock}>
              <h3><MapPin className={styles.icon} /> Bezoekadres</h3>
              <p>
                Las en Constructiebedrijf van Wilgenburg<br />
                Industrieweg 12<br />
                1234 AB, Plaatsnaam
              </p>
            </div>

            <div className={styles.infoBlock}>
              <h3><Phone className={styles.icon} /> Telefoon</h3>
              <p>
                <a href="tel:+31612345678">+31 (0)6 1234 5678</a><br />
                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Bereikbaar van 07:00 - 18:00</span>
              </p>
            </div>

            <div className={styles.infoBlock}>
              <h3><Mail className={styles.icon} /> Email</h3>
              <p>
                <a href="mailto:info@vanwilgenburg.nl">info@vanwilgenburg.nl</a><br />
                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Wij reageren binnen 24 uur.</span>
              </p>
            </div>

            <div className={styles.infoBlock}>
              <h3><Clock className={styles.icon} /> Openingstijden</h3>
              <p>
                Maandag - Vrijdag: 07:00 - 17:00<br />
                Zaterdag: Op afspraak<br />
                Zondag: Gesloten
              </p>
            </div>
          </motion.div>

          <motion.div
            className={styles.formSection}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Naam</label>
                <input type="text" className={styles.input} placeholder="Uw naam" />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Email</label>
                <input type="email" className={styles.input} placeholder="uw@email.nl" />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Telefoonnummer</label>
                <input type="tel" className={styles.input} placeholder="06 12345678" />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Bericht</label>
                <textarea className={styles.textarea} placeholder="Waar kunnen we u mee helpen?"></textarea>
              </div>
              <button type="submit" className={styles.submitBtn}>Verstuur Bericht</button>
            </form>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
