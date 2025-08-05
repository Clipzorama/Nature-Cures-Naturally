import "@/uimods/loader.css"

export const Loader = () => {
  
    return (
    <div className="container flex flex-col bg-[hsl(130,26%,9%)] items-center justify-center relative min-h-screen min-w-screen">
      <div className="content">
        <div className="tree">
          <div className="branch" style={{ "--x": 0 }}>
            <span style={{ "--i": 0 }}></span>
            <span style={{ "--i": 1 }}></span>
            <span style={{ "--i": 2 }}></span>
            <span style={{ "--i": 3 }}></span>
          </div>
          <div className="branch" style={{ "--x": 1 }}>
            <span style={{ "--i": 0 }}></span>
            <span style={{ "--i": 1 }}></span>
            <span style={{ "--i": 2 }}></span>
            <span style={{ "--i": 3 }}></span>
          </div>
          <div className="branch" style={{ "--x": 2 }}>
            <span style={{ "--i": 0 }}></span>
            <span style={{ "--i": 1 }}></span>
            <span style={{ "--i": 2 }}></span>
            <span style={{ "--i": 3 }}></span>
          </div>
          <div className="branch" style={{ "--x": 3 }}>
            <span style={{ "--i": 0 }}></span>
            <span style={{ "--i": 1 }}></span>
            <span style={{ "--i": 2 }}></span>
            <span style={{ "--i": 3 }}></span>
          </div>
          <div className="stem">
            <span style={{ "--i": 0 }}></span>
            <span style={{ "--i": 1 }}></span>
            <span style={{ "--i": 2 }}></span>
            <span style={{ "--i": 3 }}></span>
          </div>
          <span className="shadow"></span>
        </div>
      </div>
    </div>
  );
};
