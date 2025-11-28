'use client';

import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import styles from './portfolio.module.css';

export default function PortfolioPage() {
    const galleryImages = Array.from({ length: 11 }, (_, i) => `/images/portfolio/gallery/gallery_${i + 1}.png`);

    const projects = [
        {
            title: "Reparatie & Versterking Speeltoestel",
            description: "Veiligheid staat voorop. Voor een lokale speeltuin hebben wij een defect speeltoestel vakkundig gerepareerd en de constructie versterkt, zodat kinderen weer veilig kunnen spelen.",
            video: "/images/portfolio/speeltoestel/speeltoestel.mp4",
            images: [
                "/images/portfolio/speeltoestel/speeltoestel_1.jpg",
                "/images/portfolio/speeltoestel/speeltoestel_2.jpg"
            ],
            tags: ["Reparatie", "Constructie", "Veiligheid"]
        },
        {
            title: "Scheepsbouw & RVS Maatwerk",
            description: "Complete refit en RVS aanpassingen voor de scheepsbouw. Van constructie tot fijne afwerking, wij leveren maatwerk dat voldoet aan de hoogste eisen.",
            images: [
                "/images/portfolio/rvs_boat.jpg",
                "/images/portfolio/boat1.jpg",
                "/images/portfolio/boat2.jpg"
            ],
            tags: ["Scheepsbouw", "RVS", "Refit", "Maatwerk"]
        },
        {
            title: "Custom Super Smoker",
            description: "Een uniek staaltje vakmanschap: deze custom-made Super Smoker is volledig met de hand vervaardigd en voorzien van een hoogwaardige hittebestendige coating. Klaar voor de ultieme culinaire beleving.",
            images: [
                "/images/portfolio/super_smoker_1.jpg",
                "/images/portfolio/smoker_2.jpg",
                "/images/portfolio/smoker_3.jpg"
            ],
            tags: ["Maatwerk", "Staal", "Design", "Coating"]
        },
        {
            title: "Cortenstaal Sculptuur",
            description: "Kunst en vakmanschap komen samen. Dit unieke sculptuur is vervaardigd uit cortenstaal, een materiaal dat bekend staat om zijn duurzaamheid en karakteristieke roestkleurige uitstraling.",
            images: [
                "/images/portfolio/sculptuur_1.jpg",
                "/images/portfolio/sculptuur_2.jpg",
                "/images/portfolio/sculptuur_3.jpg"
            ],
            tags: ["Kunst", "Cortenstaal", "Design", "Maatwerk"]
        },
        {
            title: "Design Houtkachel",
            description: "Je eigen huis is niet compleet zonder je eigen kachel. Een uniek, handgemaakt designstuk dat warmte en sfeer brengt in uw interieur.",
            video: "/videos/portfolio/fireplace.mp4",
            tags: ["Interieur", "Design", "Staal", "Maatwerk"]
        },
        {
            title: "Aluminium Terras Constructie",
            description: "Voor een perfect strakke en duurzame ondergrond voor uw terras is een aluminium constructie de ideale oplossing. Lichtgewicht, sterk en bestand tegen alle weersinvloeden.",
            images: [
                "/images/portfolio/aluminium_1.jpg",
                "/images/portfolio/aluminium_2.jpg"
            ],
            tags: ["Aluminium", "Constructie", "Terras", "Maatwerk"]
        },
        {
            title: "RVS Vis Fileertafel",
            description: "Maatwerk RVS fileertafel voor een viswinkel. Ontworpen met oog op hygiëne, duurzaamheid en gebruiksgemak, volledig conform de eisen van de voedselindustrie.",
            images: [
                "/images/portfolio/fileertafel_1.jpg",
                "/images/portfolio/fileertafel_2.jpg",
                "/images/portfolio/fileertafel_3.jpg"
            ],
            tags: ["RVS", "Voedselindustrie", "Maatwerk", "Hygiëne"]
        },
        {
            title: "Vuurpit & Houtopslag",
            description: "Sfeervolle en functionele toevoeging aan de tuin. Een robuuste stalen vuurpit gecombineerd met een strakke houtopslag, op maat gemaakt voor jarenlang plezier.",
            images: [
                "/images/portfolio/vuurpit_1.jpg",
                "/images/portfolio/vuurpit_2.jpg",
                "/images/portfolio/vuurpit_3.jpg"
            ],
            tags: ["Tuin", "Staal", "Maatwerk", "Design"]
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
                        Onze Projecten
                    </motion.h1>
                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Een selectie van ons vakmanschap in staal, RVS en aluminium.
                    </motion.p>
                </section>

                <section className={styles.container}>
                    <div className={styles.grid}>
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                className={styles.projectCard}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className={styles.projectImageContainer} style={((project.images?.length || 0) + (project.video ? 1 : 0)) > 1 ? { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '2px' } : {}}>
                                    {project.video && (
                                        <video
                                            src={project.video}
                                            className={styles.projectImage}
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    )}
                                    {project.images && project.images.map((img, imgIndex) => (
                                        <img
                                            key={imgIndex}
                                            src={img}
                                            alt={`${project.title} ${imgIndex + 1}`}
                                            className={styles.projectImage}
                                            style={((project.images?.length || 0) + (project.video ? 1 : 0)) > 1 ? { height: '100%', objectFit: 'cover' } : {}}
                                        />
                                    ))}
                                </div>
                                <div className={styles.content}>
                                    <h3 className={styles.projectTitle}>{project.title}</h3>
                                    <p className={styles.projectDescription}>{project.description}</p>
                                    <div className={styles.tags}>
                                        {project.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex} className={styles.tag}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className={styles.gallerySection}>
                    <motion.h2
                        className={styles.galleryTitle}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Impressie van ons werk
                    </motion.h2>
                    <div className={styles.galleryGrid}>
                        {galleryImages.map((src, index) => (
                            <motion.div
                                key={index}
                                className={styles.galleryItem}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                            >
                                <img
                                    src={src}
                                    alt={`Gallery Image ${index + 1}`}
                                    className={styles.galleryImage}
                                    loading="lazy"
                                />
                            </motion.div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}
