import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import HomePage from "./pages/HomePage";
import CompletionPage from "./pages/CompletionPage";

function App() {
  return (
    <div className="container mx-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/completion" element={<CompletionPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
