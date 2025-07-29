import { NavBar } from '@/components/Navbar'
import { LightSwitch } from '@/components/LightSwitch'
import { HeroSide } from '@/components/HeroSide';
import { AboutSection } from '@/components/About';

function Home() {
    return (
        <div className='min-h-screen bg-background text-primary overflow-x-hidden'>
            {/* Navbar  */}
            <LightSwitch className='fixed hidden md:block top-30 right-6 z-50 p-2'/>
            <NavBar />
            <HeroSide />
            <AboutSection />
        </div>
    );
}

export default Home;