'use client';

import ServiceLayout from '../../components/ServiceLayout';

export default function ConstructiePage() {
  return (
    <ServiceLayout
      title="Constructie en reparatie"
      subtitle="Maatwerk constructies en reparaties in staal, RVS en aluminium."
      heroImage="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop"
      content={
        <>
          <p>
            Het las- en constructiewerk kan naar eigen ontwerp gemaakt worden. In onze werkplaats kunnen wij uw opdrachten vakkundig uitvoeren en eventuele producten enkelstuks en seriematig vervaardigen. Het afleveren van kwaliteitswerk afgestemd op uw wens staat hierbij centraal.
          </p>
          <p>
            Dit zijn constructies die wij bijvoorbeeld kunnen vervaardigen in staal, cortenstaal, rvs en aluminium.
          </p>
          <ul>
            <li>Een frame voor tuinhek, balkonhek, trapleuning tafels en/of luifels etc;</li>
            <li>Een aangeleverde schets van bijvoorbeeld een naambord zou uitgewerkt kunnen worden in een stepfile en de plaatdelen laten lasersnijden.</li>
          </ul>
          <p>
            Bij stalen producten behoord ook thermisch verzinken en poedercoaten tot de mogelijkheden.
          </p>
          <h3>Bij reparatie kunt u denken aan:</h3>
          <ul>
            <li>Afgescheurde en/of afgebroken steunen;</li>
            <li>Laswerk met betrekking op een hekwerk, balustrades en landbouwvoertuigen.</li>
          </ul>
          <p>
            Wij zijn in de mogelijkheid om reparaties uit te voeren in onze werkplaats of op locatie. Mocht er geen stroom aanwezig zijn op de locatie dan kunnen wij, dmv een aggregaat, zelf voorzien van stroom.
          </p>
          <p>
            Wilt u meer informatie dan kun u gerust contact met ons opnemen.
          </p>
          <p style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>
            Wij maakten o.a. deze filleertafel voor een vishandel en een speciaal ontworpen aanrecht van RVS.
          </p>
        </>
      }
      details={[
        "Enkelstuks en seriematig",
        "Staal, Cortenstaal, RVS, Aluminium",
        "Frames en hekwerken",
        "Stepfiles en lasersnijden",
        "Thermisch verzinken en poedercoaten",
        "Reparatie van steunen",
        "Reparatie op locatie (incl. aggregaat)",
        "Landbouwvoertuigen"
      ]}
    />
  );
}
