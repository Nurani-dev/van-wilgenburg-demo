'use client';

import ServiceLayout from '../../components/ServiceLayout';

export default function MobieleServicePage() {
    return (
        <ServiceLayout
            title="Mobiele Service"
            subtitle="Reparatie en montage op locatie met eigen stroomvoorziening."
            heroImage="https://images.unsplash.com/photo-1581092921461-eab6245b0262?q=80&w=2070&auto=format&fit=crop"
            content={
                <>
                    <p>
                        Wij bieden een flexibele mobiele service voor reparatie en montage op locatie. Onze servicebus is volledig uitgerust om zelfstandig te kunnen werken, zelfs op locaties zonder stroomvoorziening.
                    </p>
                    <h3>Onze mogelijkheden:</h3>
                    <ul>
                        <li>Reparaties op locatie (schepen, constructies, leidingwerk)</li>
                        <li>Montagewerkzaamheden</li>
                        <li>Eigen stroomvoorziening (aggregaat)</li>
                        <li>24/7 inzetbaar voor spoedklussen</li>
                    </ul>
                    <p>
                        Of het nu gaat om een dringende reparatie aan een schip, een constructieklus op een bouwplaats, of onderhoud aan leidingwerk; wij komen naar u toe met de juiste gereedschappen en expertise.
                    </p>
                </>
            }
            details={[
                "Reparatie op locatie",
                "Montage op locatie",
                "Eigen stroomvoorziening",
                "Volledig uitgeruste servicebus",
                "24/7 Spoedservice",
                "Flexibel inzetbaar",
                "Geen stroom op locatie nodig"
            ]}
        />
    );
}
