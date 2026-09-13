import CanvasBackground from '@/components/CanvasBackground';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Stack from '@/components/Stack';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <CanvasBackground />
      <div className="pointer-events-none fixed inset-0 z-[1] bg-[radial-gradient(ellipse_at_50%_32%,rgba(5,6,10,0)_0%,rgba(5,6,10,.5)_58%,rgba(5,6,10,.94)_100%)]" />
      <div className="scanline" />

      <div className="relative z-[3]">
        <Nav />
        <main className="mx-auto max-w-[1080px] px-5 pb-8 sm:px-10">
          <Hero />
          <About />
          <Stack />
          <Experience />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}
