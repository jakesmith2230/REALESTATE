import { ArrowUpRight } from 'lucide-react';
import { properties } from './properties-data';

export default function FeaturedProperties() {
  return <section id="properties" className="featured-properties section-pad">
    <div className="properties-heading"><div><p className="eyebrow">SOUTHLAKE & NEARBY</p><h2>Featured <em>properties.</em></h2></div><p>A few places to picture your next chapter.<br/>Explore a home, then connect with Maggie.</p></div>
    <div className="property-grid">{properties.map(property=><article className="property-card" key={property.slug}>
      <a className="property-card-link" href={`/properties/${property.slug}`}>
        <div className="property-photo"><img src={property.image} alt={`Exterior of ${property.address}`} width="1200" height="800" loading="lazy"/><span className="property-view">EXPLORE HOME <ArrowUpRight size={18}/></span></div>
        <div className="property-card-copy"><p className="property-city">{property.city}, TEXAS</p><h3>{property.address}</h3><p className="property-price">{property.price}</p><p className="property-facts">{property.beds} beds <span>·</span> {property.baths} baths <span>·</span> {property.area} sq ft</p></div>
      </a>
    </article>)}</div>
    <p className="property-disclaimer">Selected area listings, courtesy of Marcontell+Gilchrest Group / Ebby Halliday, REALTORS®. These are not represented as Maggie’s listings. Prices and details checked September 10, 2026; availability may change. Open a home to view the home on Zillow or ask Maggie for current details.</p>
  </section>;
}
