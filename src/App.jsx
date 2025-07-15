import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '@/pages/Home'
import NotFound from "@/pages/NotFound";
import { ThemeProvider } from "@/context/ThemeProvider";

function App() {

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
