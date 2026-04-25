import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
import Videos from '../components/Videos'
import About from '../components/About'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      {/* Background ambience */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-22%] left-[-14%] w-[720px] h-[720px] rounded-full bg-teal-500/12 blur-[130px]" />
        <div className="absolute top-[12%] right-[-15%] w-[640px] h-[640px] rounded-full bg-orange-500/10 blur-[130px]" />
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'linear-gradient(to right, rgba(148,163,184,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.05) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
      </div>
      <Navbar />
      <Hero />
      <Portfolio />
      <Videos />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
