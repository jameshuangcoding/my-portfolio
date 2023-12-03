import './globals.css';
import { Inter } from 'next/font/google';
import Info from '../../components/Info';
import Navbar from '../../components/Navbar';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} font-sans bg-new-white text-onyx`}>
        <div className='flex min-h-screen items-center justify-start p-24 gap-20'>
          <Navbar />
          <Info />
          {children}
        </div>
      </body>
    </html>
  );
}
