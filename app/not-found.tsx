import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-logo">
        <Image src="/logo.png" alt="Scalidor" width={52} height={52} className="brand-logo-img" />
      </div>
      <span className="mono">404 / PAGE NOT FOUND</span>
      <h1>A different path.</h1>
      <p>We couldn’t find that page. Let’s get you back to Scalidor.</p>
      <Link href="/" className="button">Back to home</Link>
    </div>
  );
}
