import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '@/pages/Home'
import NotFound from "@/pages/NotFound";
import { ThemeProvider } from "@/context/ThemeProvider";
import { useEffect, useState } from "react";
import { Loader } from "@/components/Loader";
import { Toaster } from "@/components/popup/toaster"

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);


  return (
    
    <ThemeProvider>
      {isLoading ? <Loader /> : (
        <>
          <Toaster />
          <BrowserRouter basename="/Nature-Cures-Naturally">
          {/* Wrapped in routes for all segues */}
          <Routes>
            <Route index element={<Home />} />
            {/* React's version of a 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        
        </>
      )}
        
    </ThemeProvider>
    
  )
}

export default App
