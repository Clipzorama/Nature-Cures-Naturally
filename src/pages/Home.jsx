import { NavBar } from '@/components/Navbar'
import { LightSwitch } from '@/components/LightSwitch';

function Home() {
    return (
        <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
            {/* Navbar  */}
            <LightSwitch />
            <NavBar />
        </div>
    );
}

export default Home;