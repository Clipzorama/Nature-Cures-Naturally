import "@/uimods/loader.css";
import logoPng from "@/assets/logo.png";

export const Loader = ({ isExiting = false, onExitComplete }) => {
  const handleTransitionEnd = (event) => {
    if (
      isExiting &&
      event.target === event.currentTarget &&
      event.propertyName === "opacity"
    ) {
      onExitComplete?.();
    }
  };

  return (
    <div
      className={`site-loader${isExiting ? " site-loader--exiting" : ""}`}
      onTransitionEnd={handleTransitionEnd}
    >
      <div className="site-loader__ambient" aria-hidden="true" />
      <div className="site-loader__wash" aria-hidden="true" />

      <main
        className="site-loader__inner"
        role="status"
        aria-live="polite"
        aria-label="Nature Cures Naturally is loading"
      >
        <div className="site-loader__visual" aria-hidden="true">
          <div className="site-loader__orbit site-loader__orbit--outer">
            <span className="site-loader__leaf site-loader__leaf--one" />
            <span className="site-loader__leaf site-loader__leaf--two" />
          </div>
          <div className="site-loader__orbit site-loader__orbit--inner" />
          <div className="site-loader__emblem">
            <div className="site-loader__glow" />
            <img className="site-loader__logo" src={logoPng} alt="" />
          </div>
        </div>

        <div className="site-loader__copy">
          <p className="site-loader__eyebrow">Holistic wellness</p>
          <h1 className="site-loader__name">Nature Cures Naturally</h1>
          <p className="site-loader__tagline">Rooted in nature. Created with care.</p>

          <div
            className="site-loader__progress"
            role="progressbar"
            aria-label="Loading website"
          >
            <span className="site-loader__progress-bar" />
          </div>
          <p className="site-loader__loading-label">Preparing your experience</p>
        </div>
      </main>
    </div>
  );
};
