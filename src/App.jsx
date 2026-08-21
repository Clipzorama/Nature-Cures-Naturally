import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '@/pages/Home'
import NotFound from "@/pages/NotFound";
import { ThemeProvider } from "@/context/ThemeProvider";
import { useCallback, useEffect, useState } from "react";
import { Loader } from "@/components/Loader";
import { Toaster } from "@/components/popup/toaster"

const MIN_LOADER_TIME = 2000;
const MAX_LOADER_TIME = 5000;
const LOADER_EXIT_FALLBACK = 700;
const REDUCED_MOTION_EXIT_FALLBACK = 100;

function App() {

  const [loaderPhase, setLoaderPhase] = useState("loading");

  useEffect(() => {
    const startedAt = performance.now();
    let hasStartedExit = false;
    let minimumTimer;
    let exitFallbackTimer;

    const finishLoading = () => {
      if (hasStartedExit) return;
      hasStartedExit = true;

      const elapsed = performance.now() - startedAt;
      const remainingMinimum = Math.max(0, MIN_LOADER_TIME - elapsed);

      minimumTimer = window.setTimeout(() => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        setLoaderPhase("exiting");
        exitFallbackTimer = window.setTimeout(
          () => setLoaderPhase("ready"),
          prefersReducedMotion ? REDUCED_MOTION_EXIT_FALLBACK : LOADER_EXIT_FALLBACK
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
      window.clearTimeout(exitFallbackTimer);
    };
  }, []);

  const isLoaderActive = loaderPhase !== "ready";

  useEffect(() => {
    if (!isLoaderActive) return undefined;

    document.documentElement.classList.add("is-loader-active");
    document.body.classList.add("is-loader-active");

    return () => {
      document.documentElement.classList.remove("is-loader-active");
      document.body.classList.remove("is-loader-active");
    };
  }, [isLoaderActive]);

  const completeLoaderExit = useCallback(() => {
    setLoaderPhase((currentPhase) => currentPhase === "exiting" ? "ready" : currentPhase);
  }, []);

  return (
    
    <ThemeProvider>
      <div className={`app-shell app-shell--${loaderPhase}`}>
        <div
          className="app-content"
          aria-hidden={isLoaderActive ? "true" : undefined}
          inert={isLoaderActive}
        >
          <Toaster />
          <BrowserRouter>
            {/* Wrapped in routes for all segues */}
            <Routes>
              <Route index element={<Home />} />
              {/* React's version of a 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>

        {isLoaderActive && (
          <Loader
            isExiting={loaderPhase === "exiting"}
            onExitComplete={completeLoaderExit}
          />
        )}
      </div>
        
    </ThemeProvider>
    
  )
}

export default App
