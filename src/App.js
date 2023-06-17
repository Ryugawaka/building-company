import "./App.css";
import MainPage from "./pages/MainPage";
import ProjectPage from "./pages/ProjectPage";
import Header from "./ui/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<ProjectPage />} />
      </Routes>
    </div>
  );
}

export default App;
