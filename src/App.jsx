import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
        {/* Wrapped in routes for all segues */}
        <Routes>
          <Route index element={<Home />} />
          {/* React's version of a 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
