import { Metadata } from 'next';
import '@/styles/globals.css';

// app/layout.tsx
export const metadata: Metadata = {
  title: {
    default: 'Next.js tutoriel - codeevolution',
    template: '%s | Codeevolution',
  },
  description: 'A demo of Next.js routing features',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <header style={{ backgroundColor: 'lightblue', padding: '1rem' }}>
          <p>header</p>
        </header>
        {children}
        <footer style={{ backgroundColor: 'ghostwhite', padding: '1rem' }}>
          <p>footer</p>
        </footer>
        <h1 className='text-3xl font-bold underline bg-amber-700'>
        Hello world!
    </h1>
      </body>
    </html>
  );
}
