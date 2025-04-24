import { Metadata } from 'next';

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
      </body>
    </html>
  );
}
