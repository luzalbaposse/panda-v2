import Image from 'next/image'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackPanda from './components/BackPanda'
export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-between">
    <div className="w-full z-50">
    <Navbar></Navbar>
    </div>
    <div className="w-full z-0 mt-[-120px]">
    <BackPanda></BackPanda>

    </div>
    <Footer></Footer>
    </main>
  )
}
