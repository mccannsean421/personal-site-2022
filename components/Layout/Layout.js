import Footer from '@/components/Footer/Footer.js';
import Navbar from '@/components/Navbar/Navbar.js';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const router = useRouter();
  let layoutClass = `${router.pathname.replace('/', '')}-page`;

  return (
    <div className={layoutClass}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
