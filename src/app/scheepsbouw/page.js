'use client';

import ServiceLayout from '../../components/ServiceLayout';

export default function ScheepsbouwPage() {
    return (
        <ServiceLayout
            title="Scheepsbouw en reparatie"
            subtitle="CE-gecertificeerd inbouwen, lassen en repareren."
            heroImage="https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?q=80&w=2069&auto=format&fit=crop"
            content={
                <>
                    <p>
                        Het inbouwen en lassen gebeurd volgens CE richtlijnen en is voor u, als klant, belangrijk wanneer u uw boot laat keuren voor de verzekering.
                    </p>
                    <p>
                        De werkzaamheden die wij vervaardigen in de scheepsbouw zijn op maat gemaakte constructies in staal, rvs en aluminium. U kunt hierbij denken aan:
                    </p>
                    <ul>
                        <li>Tanks en de daarbij behorende aansluitingen;</li>
                        <li>Boegschroeftunnels;</li>
                        <li>Aanpassingen in en om het schip.</li>
                    </ul>
                    <h3>Bij reparatie kunt u denken aan:</h3>
                    <ul>
                        <li>Plaatdikte meting, als u gewoon wilt weten hoe het onderwaterschip ervoor staat;</li>
                        <li>Het vervangen van doorgeroeste plaatdelen zowel boven als onder de waterlijn;</li>
                        <li>Repareren van roeren;</li>
                        <li>Het vervangen van verouderde schroefaskokers;</li>
                        <li>Potdeksel, reling en berghoutreparatie.</li>
                    </ul>
                    <p>
                        <strong>Las en Constructiebedrijf van Wilgenburg is uw lastechniek partner in de Scheepsbouw en reparatie!</strong>
                    </p>

                    <h3>Impressie</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
                        <img src="/images/scheepsbouw/boat1.jpg" alt="Scheepsbouw project 1" style={{ width: '100%', borderRadius: '8px', objectFit: 'cover', height: '250px' }} />
                        <img src="/images/scheepsbouw/boat2.jpg" alt="Scheepsbouw project 2" style={{ width: '100%', borderRadius: '8px', objectFit: 'cover', height: '250px' }} />
                    </div>
                </>
            }
            details={[
                "CE richtlijnen",
                "Staal, RVS en Aluminium",
                "Tanks en aansluitingen",
                "Boegschroeftunnels",
                "Plaatdikte metingen",
                "Schroefaskokers vervangen",
                "Roer reparaties",
                "Boven en onder de waterlijn"
            ]}
        />
    );
}
