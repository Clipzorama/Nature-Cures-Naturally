import { NavBar } from '@/components/Navbar'
import { LightSwitch } from '@/components/LightSwitch'
import { HeroSide } from '@/components/HeroSide';
import { AboutSection } from '@/components/About';
import { RecipeSection } from '@/components/Recipe';
import { Inspiration } from '@/components/Inspiration';
import { ContactSection } from '@/components/Contact';
import LeafRain from "@/uimods/LeafRain";
import { Footer } from '@/components/Footer';

function Home() {
    return (
        <div className='min-h-screen bg-background text-primary overflow-x-hidden'>
            <LeafRain />
            <LightSwitch className='fixed hidden lg:block top-30 right-6 z-50 p-2'/>
            <NavBar />
            <HeroSide />
            <AboutSection />
            <RecipeSection />
            <Inspiration />
            <ContactSection />
            <Footer />
        </div>
    );
}

export default Home;