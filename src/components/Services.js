'use client';

import { motion } from 'framer-motion';
import styles from './Services.module.css';
import { Anchor, Hammer, Wrench, Truck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        title: "Scheepsbouw en reparatie",
        desc: "Lassen boven en onder de waterlijn, boegschroeftunnels, en RVS/Aluminium constructies. Volledig volgens CE-richtlijnen.",
        icon: <Anchor size={32} />,
        link: "/scheepsbouw",
        gridClass: styles.cardLarge // Span 8
    },
    {
        title: "Constructie en reparatie",
        desc: "Van trappen en bordessen tot zware frames. Staal, RVS en Aluminium, inclusief thermisch verzinken en poedercoaten.",
        icon: <Hammer size={32} />,
        link: "/constructie",
        gridClass: styles.cardMedium // Span 4
    },
    {
        title: "Leidingbouw systemen",
        desc: "Gecertificeerd leidingwerk voor petrochemie en voedingsmiddelen (zuivel). Lloyd's Register standaarden.",
        icon: <Wrench size={32} />,
        link: "/leidingbouw",
        gridClass: styles.cardMedium // Span 4
    },
    {
        title: "Mobiele Service",
        desc: "Reparatie en montage op locatie met eigen stroomvoorziening. 24/7 inzetbaar voor spoedklussen.",
        icon: <Truck size={32} />,
        link: "/mobiele-service",
        gridClass: styles.cardLarge // Span 8
    }
];

export default function Services() {
    return (
        <section id="services" className={styles.services}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Onze Expertise</h2>
                    <p className={styles.subtitle}>Gespecialiseerd in zwaar metaalwerk en gecertificeerde lastechniek.</p>
                </div>
                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <Link href={service.link} key={index} className={`${styles.cardWrapper} ${service.gridClass}`} style={{ textDecoration: 'none' }}>
                            <motion.div
                                className={styles.card}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className={styles.cardHeader}>
                                    <div className={styles.icon}>{service.icon}</div>
                                    <div className={styles.cardAction}>
                                        <ArrowRight size={20} />
                                    </div>
                                </div>
                                <div className={styles.cardContent}>
                                    <h3 className={styles.cardTitle}>{service.title}</h3>
                                    <p className={styles.cardDesc}>{service.desc}</p>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
