'use client';

import ServiceLayout from '../../components/ServiceLayout';

export default function LeidingbouwPage() {
  return (
    <ServiceLayout
      title="Leidingbouw systemen"
      subtitle="Gecertificeerd leidingwerk voor zuivel en petrochemie."
      heroImage="https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=1974&auto=format&fit=crop"
      content={
        <>
          <p>
            Wij lassen en vervaardigen systemen in zowel de zuivel als in de petrochemie branche. Wij, als gecertificeerd lasbedrijf, werken volgens de normen van Lloyd’s Register.
          </p>
          <h3>Bij diverse klanten werken wij aan:</h3>
          <ul>
            <li>Apparatenbouw</li>
            <li>Rvs en stalen leidingen</li>
            <li>SKID bouw</li>
            <li>Infra laswerk (gasleidingen en stadsverwarming)</li>
            <li>Koelleidingen en stoomleidingen</li>
            <li>Zuivelleidingen</li>
          </ul>
          <p>
            Wij zijn gecertificeerd in het volgende lasproces en materialen:
          </p>
        </>
      }
      details={[
        "Lloyd's Register normen",
        "Zuivel en Petrochemie",
        "Apparatenbouw",
        "RVS en Stalen leidingen",
        "SKID bouw",
        "Infra laswerk",
        "Koel- en stoomleidingen",
        "Zuivelleidingen"
      ]}
    />
  );
}
