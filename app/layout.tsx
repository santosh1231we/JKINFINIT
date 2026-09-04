import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'JKINFINIT | Precision Engineering',
  description:
    'JKINFINIT is an engineering consultancy focused on automotive systems, product design, validation, and industrialization.',
  keywords: [
    'Automotive Engineering',
    'Engine Design',
    'Product Design',
    'Validation',
    'Reliability',
    'Manufacturing Industrialization',
    'Supplier Development',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#090a0c] text-[#f5f6f8] selection:bg-[#d97736] selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
