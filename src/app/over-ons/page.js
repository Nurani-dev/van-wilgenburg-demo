'use client';

import ServiceLayout from '../../components/ServiceLayout';

export default function OverOnsPage() {
    return (
        <ServiceLayout
            title="Over Ons"
            subtitle="Gedreven door Innovatie & Kwaliteit"
            heroImage="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1000&auto=format&fit=crop"
            content={
                <>
                    <p>
                        Sinds de oprichting heeft Las en Constructiebedrijf van Wilgenburg zich ontwikkeld tot een toonaangevende speler in de metaalindustrie.
                        Wij combineren traditioneel vakmanschap met de nieuwste technieken.
                    </p>
                    <h3>Onze Geschiedenis</h3>
                    <ul>
                        <li><strong>2005:</strong> Oprichting en start van specialisatie in scheepsbouw.</li>
                        <li><strong>2015:</strong> Uitbreiding werkplaats en introductie CNC-machines.</li>
                        <li><strong>2024:</strong> Volledige Lloyd's Register certificering voor leidingbouw.</li>
                    </ul>
                    <p>
                        Wij streven naar 100% klanttevredenheid en leveren maatwerk voor diverse sectoren, van scheepsbouw tot petrochemie.
                    </p>
                </>
            }
            details={[
                "Opgericht in 2005",
                "Gecertificeerd vakmanschap",
                "Innovatieve technieken",
                "Klantgericht",
                "Lloyd's Register normen"
            ]}
        />
    );
}
