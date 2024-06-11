import {Inter} from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({subsets: ['latin']});

export const metadata = {
  title: 'Share Screenshort',
  description: 'Share Screenshort with anyone',
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
