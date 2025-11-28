import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Services from '@/components/Services';
import Process from '@/components/Process';
import About from '@/components/About';
import Certifications from '@/components/Certifications';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Contact from '@/components/Contact';
import ProjectWizard from '@/components/ProjectWizard';

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <TrustBar />
            <Services />
            <Process />
            <About />
            <Certifications />
            <Testimonials />
            <CTASection />
            <Contact />
            <ProjectWizard />
        </main>
    );
}
