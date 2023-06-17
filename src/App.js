import "./App.css";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";
import ProjectPage from "./pages/ProjectPage";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<ProjectPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
