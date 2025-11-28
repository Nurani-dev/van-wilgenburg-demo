'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from './machinepark.module.css';
import { motion } from 'framer-motion';

export default function MachineparkPage() {
  const machines = [
    {
      title: "Optimum draaibank",
      desc: "Wij hebben een conventionele draaibank met een spindeldoorlaat van 58mm, afstand tussen de centers 1000mm met een draaidiameter boven het bed van 420mm."
    },
    {
      title: "Bimak Kolomboormachine met kruistafel",
      desc: "Deze machine kan gaten maken tot 40mm, voor grotere gaten kunnen wij op specifieke aanvragen leveren."
    },
    {
      title: "TIG lasmachines",
      desc: "Wij hebben de volgende TIG lasmachines in gebruik om staal, rvs en aluminium te lassen:",
      list: [
        "ESAB caddy tig watergekoeld 220A AC/DC (230 volt)",
        "REHM TIGER 170A/DC (230 volt)"
      ]
    },
    {
      title: "Mig/Mag lasmachine",
      desc: "Wij hebben de volgende Mig/Mag lasmachine in gebruik:",
      list: [
        "Kemppi Pro mig 510 Puls, watergekoeld 400A (380 volt)",
        "Lincoln speedtec 200A (230 volt)"
      ],
      note: "Met de bovenstaande lasmachines kunnen wij ook elektroden lassen."
    },
    {
      title: "Plasmasnijder Hypertherm Powermax 65",
      list: [
        "Snij capaciteit maximaal staal 25mm",
        "Staal scheiden 32 mm"
      ]
    },
    {
      title: "Lintzaagmachine BOMAR ergonomic 320.250 DGS",
      desc: "Deze zaagmachine zaagt dubbel verstek"
    },
    {
      title: "Eisele afkortzaagmachine met een zaagblad 275mm"
    },
    {
      title: "Profielwalsmachine ZOPF 60M"
    },
    {
      title: "Handbuigmachine"
    }
  ];

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
            Machinepark
          </motion.h1>
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Onze werkplaats is uitgerust met professionele machines voor diverse bewerkingen.
          </motion.p>
        </section>

        <div className={styles.container}>
          <div className={styles.grid}>
            {machines.map((machine, index) => (
              <motion.div
                key={index}
                className={styles.card}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <h3 className={styles.cardTitle}>{machine.title}</h3>
                {machine.desc && <p className={styles.cardDesc}>{machine.desc}</p>}
                {machine.list && (
                  <ul className={styles.cardList}>
                    {machine.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
                {machine.note && <p className={styles.cardNote}>{machine.note}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
