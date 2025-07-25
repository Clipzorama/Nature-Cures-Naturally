import { NavBar } from '@/components/Navbar'
import { LightSwitch } from '@/components/LightSwitch';

function Home() {
    return (
        <div className='min-h-screen bg-background text-primary overflow-x-hidden'>
            {/* Navbar  */}
            <LightSwitch className='fixed hidden md:block top-20 right-6 z-50 p-2'/>
            
            <NavBar />
        </div>
    );
}

export default Home;