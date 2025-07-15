import { NavBar } from '@/components/Navbar'

function Home() {
    return (
        <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
            {/* Navbar  */}
            <NavBar />
        </div>
    );
}

export default Home;