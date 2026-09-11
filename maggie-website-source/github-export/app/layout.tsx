import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Maggie Seipel | Southlake Real Estate',
  description: 'Find your place in Southlake with Maggie Seipel. Local insight shaped by 15+ years of living here, with a focus on homes, equestrian properties, and acreage in North Texas.',
  metadataBase: new URL('https://maggie-seipel-southlake.finntexas1.chatgpt.site'),
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
