import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "@/uimods/loader.css";
import logoPng from "@/assets/logo.png"; // your PNG logo

gsap.registerPlugin(useGSAP);

// external progress - tracking and displaying the progress of operations or processes that are managed outside of a specific React component's internal state

export const Loader = ({ progress: externalProgress }) => {
  const rootRef = useRef(null);
  const logoRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof externalProgress === "number") {
      setProgress(Math.max(0, Math.min(100, Math.floor(externalProgress))));
      return;
    }
    // if external progress is not provided, we simulate it ourselves here
    let p = 0;
    const id = setInterval(() => {
      // nice easing effect --> big jumps and then slows down as we approach 100
      p += Math.max(0.3, (100 - p) * 0.06);
      if (p >= 99) {
        p = 99;
        clearInterval(id);
      }
      setProgress(Math.floor(p));
    }, 40);
    return () => clearInterval(id);
  }, [externalProgress]);

  useGSAP(() => {
    // Logo “breath”
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.98, filter: "drop-shadow(0 0 0 rgba(255,255,200,0))" },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(logoRef.current, {
            scale: 1.02,
            filter: "drop-shadow(0 0 18px rgba(255,255,200,0.25))",
            duration: 2,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          });
        },
      }
    );
  }, { scope: rootRef });

  return (
    <div
      ref={rootRef}
      className="container relative min-h-screen min-w-screen flex flex-col items-center justify-center bg-background overflow-hidden"
    >
      {/* Logo + tagline + progress */}
      <div className=" z-10 flex flex-col items-center gap-3 px-4 text-center scale-150">
        <img ref={logoRef} src={logoPng} alt="Nature Cures Naturally" className="loader-logo" />
        <p className="loader-tagline">Nature Cures Naturally</p>

        <div
          className="loader-progress"
          role="progressbar"
          // Accessible to those who rely on screen readers
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
        >
          <div className="loader-bar" style={{ width: `${progress}%` }} />
        </div>
        <p className="loader-percent">{progress}%</p>
      </div>
    </div>
  );
};
