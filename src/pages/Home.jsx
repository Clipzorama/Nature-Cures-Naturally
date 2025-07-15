import { NavBar } from '@/components/Navbar'
import { LightSwitch } from '@/components/LightSwitch';

function Home() {
    return (
        <div className='min-h-screen bg-background text-primary overflow-x-hidden'>
            {/* Navbar  */}
            <LightSwitch />
            <NavBar />
            <p className="text-lg">If you see this with a background color — it works</p>
        </div>
    );
}

export default Home;