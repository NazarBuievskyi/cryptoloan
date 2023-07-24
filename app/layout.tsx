import './globals.css'
import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import Navigation from "@/components/Navigation";
import Wrapper from "@/components/Wrapper";

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({weight:['100', '300', '400', '500', '700'], subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Borrowmat',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
      <Navigation/>
      <Wrapper>
          {children}
      </Wrapper>
      </body>
    </html>
  )
}
