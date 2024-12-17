import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Experience } from "./components/Experience";
import { UI } from "./components/UI";
import { Html } from "@react-three/drei"
import Analysis from "./components/Analysis";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UI />} /> {/* Home Page */}
        <Route path="/analysis" element={<Analysis />} /> {/* New Analysis Page */}
      </Routes>
    </Router>
    
    
  );
}

export default App;
