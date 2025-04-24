'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import '@/styles/globals.css';


const navLinks = [
  { href: '/', name: 'Home' },
  { href: '/register', name: 'Register' },
  { href: '/login', name: 'Login' },
  { href: '/forgot-password', name: 'Forgot Password' },
];


export default function AuthLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <div>
      <nav>
        <ul>
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  key={link.name}
                  className={`mr-4 ${
                    isActive ? 'font-bold text-red-500 bg-amber-400' : 'text-blue-500 bg-amber-400'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      {children}
    </div>
  );
}
