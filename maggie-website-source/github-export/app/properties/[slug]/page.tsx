import { notFound } from 'next/navigation';
import { properties } from '../../properties-data';
import PropertyDetail from './property-detail';

export default async function PropertyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = properties.find(item=>item.slug === slug);
  if (!property) notFound();
  return <PropertyDetail property={property}/>;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = properties.find(item=>item.slug === slug);
  return { title: property ? `${property.address} | Maggie Seipel` : 'Property not found | Maggie Seipel', description: property?.description };
}
