import { NavBar } from '@/components/Navbar'
import { LightSwitch } from '@/components/LightSwitch';

function Home() {
    return (
        <div className='min-h-screen bg-background text-primary overflow-x-hidden'>
            {/* Navbar  */}
            <LightSwitch className='fixed right-20'/>
            
            <NavBar />
        </div>
    );
}

export default Home;