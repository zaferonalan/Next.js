import { Inter } from 'next/font/google'
import "./globals.css";
import Header from '@/components/header';
import Footer from '@/components/footer';

const interFontFamily = Inter({ subsets: ['latin']})

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={interFontFamily.className}>
      <body className="bg-black text-white w-full px-4 ">
        <Header/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
