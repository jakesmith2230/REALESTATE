'use client';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { useEmailComposer } from '../../email-composer';
import type { Property } from '../../properties-data';

export default function PropertyDetail({ property }: { property: Property }) {
  const { openEmail, composer } = useEmailComposer();
  return <main className="property-page">
    <header className="property-header"><a className="brand dark-brand" href="/">MAGGIE SEIPEL<small>SOUTHLAKE REAL ESTATE</small></a><a className="property-back" href="/#properties"><ArrowLeft size={18}/> ALL PROPERTIES</a></header>
    <div className="property-detail-photo"><img src={property.image} alt={`Exterior of ${property.address}, ${property.city}`} width="1600" height="1000" fetchPriority="high"/></div>
    <section className="property-detail-body section-pad">
      <div className="property-overview"><p className="eyebrow">{property.city.toUpperCase()}, TEXAS {property.zip}</p><h1>{property.address}</h1><p className="property-detail-price">{property.price}</p><div className="property-stats"><p><strong>{property.beds}</strong>Bedrooms</p><p><strong>{property.baths}</strong>Bathrooms</p><p><strong>{property.area}</strong>Square feet</p></div><p className="property-description">{property.description}</p><p className="property-source">MLS® {property.mls} · Listing courtesy of Marcontell+Gilchrest Group / Ebby Halliday, REALTORS®.</p><a className="text-link" href={property.source} target="_blank" rel="noopener noreferrer">VIEW ON ZILLOW & ALL PHOTOS <ArrowUpRight size={18}/></a><p className="property-source">Details checked September 10, 2026. Price and availability may change; confirm the latest information with Maggie. This is an area listing, not represented as Maggie’s listing.</p></div>
      <aside className="property-connect"><img src="/maggie-seipel.png" alt="Maggie Seipel" width="90" height="110"/><p className="eyebrow">YOUR NEXT CHAPTER</p><h2>Picture yourself here?</h2><p>Connect with Maggie to ask about this home or plan your search around Southlake.</p><button className="button light" onClick={()=>openEmail(`Let’s talk about ${property.address}, ${property.city}`)}>LET’S CONNECT WITH MAGGIE <ArrowUpRight size={18}/></button><a className="property-call" href="tel:+16823581896">Call Maggie: (682) 358-1896</a></aside>
    </section>
    {composer}
  </main>;
}
