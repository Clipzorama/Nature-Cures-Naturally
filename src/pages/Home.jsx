import { NavBar } from '@/components/Navbar'
import { LightSwitch } from '@/components/LightSwitch'
import { HeroSide } from '@/components/HeroSide';
import { AboutSection } from '@/components/About';
import { RecipeSection } from '@/components/Recipe';
import { Inspiration } from '@/components/Inspiration';
import { ContactSection } from '@/components/Contact';
import LeafRain from "@/uimods/LeafRain";

function Home() {
    return (
        <div className='min-h-screen bg-background text-primary overflow-x-hidden'>
            <LeafRain count={50} />
            <LightSwitch className='fixed hidden md:block top-30 right-6 z-50 p-2'/>
            <NavBar />
            <HeroSide />
            <AboutSection />
            <RecipeSection />
            <Inspiration />
            <ContactSection />
        </div>
    );
}

export default Home;