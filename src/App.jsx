import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '@/pages/Home'
import NotFound from "@/pages/NotFound";
import { ThemeProvider } from "@/context/ThemeProvider";
import { useEffect, useState } from "react";
import { Loader } from "@/components/Loader";

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);


  if (isLoading) return <Loader />;

  return (
    
    <ThemeProvider>
        <BrowserRouter>
          {/* Wrapped in routes for all segues */}
          <Routes>
            <Route index element={<Home />} />
            {/* React's version of a 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    </ThemeProvider>
    
  )
}

export default App
