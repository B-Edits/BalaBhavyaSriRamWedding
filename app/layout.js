import './globals.css';

export const metadata = {
  title: 'Bala Bhavya & Sri Ram | Wedding Invitation',
  description: 'A premium digital wedding invitation for Bala Bhavya and Sri Ram.',
  keywords: ['wedding invitation', 'Indian wedding', 'Bala Bhavya', 'Sri Ram'],
  openGraph: {
    title: 'Bala Bhavya & Sri Ram | Wedding Invitation',
    description: 'Join us as we celebrate our wedding on 13 December 2026.',
    type: 'website',
    url: 'https://example.com',
    images: [
      {
        url: '/images/placeholder-gallery-1.svg',
        width: 1200,
        height: 630,
        alt: 'Bala Bhavya and Sri Ram wedding invitation'
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
