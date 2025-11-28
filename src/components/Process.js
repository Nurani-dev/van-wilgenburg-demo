'use client';

import { motion } from 'framer-motion';
import styles from './Process.module.css';

const steps = [
    {
        number: '01',
        title: 'Advies & Opname',
        desc: 'We analyseren uw wensen en technische specificaties om de optimale oplossing te bepalen.'
    },
    {
        number: '02',
        title: 'Engineering',
        desc: 'Ons team maakt gedetailleerde 3D-ontwerpen en constructieberekeningen ter goedkeuring.'
    },
    {
        number: '03',
        title: 'Fabricage',
        desc: 'Precisieproductie in onze werkplaats met gecertificeerde materialen en vakmensen.'
    },
    {
        number: '04',
        title: 'Montage',
        desc: 'Vakkundige montage op locatie en eindinspectie voor gegarandeerde kwaliteit.'
    }
];

export default function Process() {
    return (
        <section className={styles.process}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Onze Werkwijze</h2>
                    <p className={styles.subtitle}>Van concept tot oplevering, wij verzorgen het complete traject.</p>
                </div>

                <div className={styles.timeline}>
                    <div className={styles.line}></div>
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className={styles.step}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className={styles.marker}>
                                <span className={styles.number}>{step.number}</span>
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepDesc}>{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
