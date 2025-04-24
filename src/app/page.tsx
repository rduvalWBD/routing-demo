import Link from 'next/link';

export default function Home() {
  return (

    <div>
      <h1>Welcome to the Home Page</h1>
      <Link href='/blog'>Blog</Link>
      <p></p>
      <Link href='/products'>Products</Link>
      <p></p>
      <Link href='/profile'>Profile</Link>
      <h1 className='text-8xl font-bold underline bg-amber-400'>Hello world!</h1>
      <h1 className='text-3xl font-bold underline bg-amber-700'>
        Hello world!
      </h1>
    </div>
    
  );
}
