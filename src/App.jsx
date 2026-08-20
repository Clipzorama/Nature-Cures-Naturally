import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '@/pages/Home'
import NotFound from "@/pages/NotFound";
import { ThemeProvider } from "@/context/ThemeProvider";
import { useEffect, useState } from "react";
import { Loader } from "@/components/Loader";
import { Toaster } from "@/components/popup/toaster"

const MIN_LOADER_TIME = 1250;
const MAX_LOADER_TIME = 5000;
const LOADER_EXIT_TIME = 480;

function App() {

  const [loaderPhase, setLoaderPhase] = useState("loading");

  useEffect(() => {
    const startedAt = performance.now();
    let hasStartedExit = false;
    let minimumTimer;
    let exitTimer;

    const finishLoading = () => {
      if (hasStartedExit) return;
      hasStartedExit = true;

      const elapsed = performance.now() - startedAt;
      const remainingMinimum = Math.max(0, MIN_LOADER_TIME - elapsed);

      minimumTimer = window.setTimeout(() => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        setLoaderPhase("exiting");
        exitTimer = window.setTimeout(
          () => setLoaderPhase("ready"),
          prefersReducedMotion ? 0 : LOADER_EXIT_TIME
        );
      }, remainingMinimum);
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading, { once: true });
    }

    const fallbackTimer = window.setTimeout(finishLoading, MAX_LOADER_TIME);

    return () => {
      window.removeEventListener("load", finishLoading);
      window.clearTimeout(fallbackTimer);
      window.clearTimeout(minimumTimer);
      window.clearTimeout(exitTimer);
    };
  }, []);


  return (
    
    <ThemeProvider>
      {loaderPhase !== "ready" ? <Loader isExiting={loaderPhase === "exiting"} /> : (
        <>
          <Toaster />
          <BrowserRouter>
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
