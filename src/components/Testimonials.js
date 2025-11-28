'use client';

import styles from './Testimonials.module.css';

const testimonials = [
    {
        quote: "Van Wilgenburg leverde onze offshore constructie eerder op dan gepland, zonder enige imperfectie. Hun precisie is ongeëvenaard.",
        author: "Jan de Vries",
        role: "Project Manager, Damen Shipyards",
        company: "Damen"
    },
    {
        quote: "Het maatwerk leidingwerk dat zij engineerden loste een kritiek knelpunt in onze productielijn op. Sterk aanbevolen.",
        author: "Sarah Jansen",
        role: "Operations Director, Royal IHC",
        company: "Royal IHC"
    },
    {
        quote: "Betrouwbaar, gecertificeerd en ongelooflijk vakkundig. Zij zijn onze vaste partner voor zwaar constructiewerk.",
        author: "Pieter Bakker",
        role: "Technical Lead, Mammoet",
        company: "Mammoet"
    }
];

export default function Testimonials() {
    return (
        <section className={styles.testimonials}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Wat Klanten Zeggen</h2>
                    <p className={styles.subtitle}>Bewezeneresultaten in de zware industrie.</p>
                </div>
                <div className={styles.grid}>
                    {testimonials.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.quoteMark}>"</div>
                            <p className={styles.quote}>{item.quote}</p>
                            <div className={styles.author}>
                                <div className={styles.avatar}>
                                    {item.author.charAt(0)}
                                </div>
                                <div className={styles.info}>
                                    <span className={styles.name}>{item.author}</span>
                                    <span className={styles.role}>{item.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
