import Footer from '@/components/Footer/Footer.js'
import Navbar from '@/components/Navbar/Navbar.js'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
