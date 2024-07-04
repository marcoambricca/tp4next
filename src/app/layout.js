'use client'

import Link from 'next/link';
import './styles/navbar.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme='dark'>
      <body>
        <nav className='navbar'>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/booking">Booking</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}