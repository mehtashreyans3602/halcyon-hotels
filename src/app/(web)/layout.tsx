import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ThemeProvider from '@/components/ThemeProvider/ThemeProvider';
const poppins = Poppins({ subsets: ['latin'], weight:['400','500','700','900'],style: ['italic','normal'], variable:"--font-poppins" })
import NextAuthProvider from '@/components/AuthProvider/AuthProvider';
import Toast from '@/components/Toast/Toast';
export const metadata: Metadata = {
  title: 'Hotel Management Application',
  description: 'Discover the Best Hotel Experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextAuthProvider>
        <ThemeProvider>
          <Toast/>
        <main className='font-normal'>
          <Header/>
          {children}
          <Footer/>
          </main>
        </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  )
}
