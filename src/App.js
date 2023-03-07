import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header";
import { Info } from "./components/info";
import { InfoCharacher } from "./components/infoCharacter";
import { About } from "./pages/about";
import { Home } from "./pages/home";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/info/:id"} element={<Info />} />
          <Route path={"/info/character/:id"} element={<InfoCharacher />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
