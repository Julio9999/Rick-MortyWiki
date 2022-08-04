import './App.css';
import { Header } from "./components/Header.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Episode } from "./pages/Episode";
import { Location } from "./pages/Location";
import { CharacterDetails } from "./pages/CharacterDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/episodes" element={<Episode />} />
          <Route path="/location" element={<Location />} />
          <Route path="/episodes/:id" element={<CharacterDetails />} />
          <Route path="/location/:id" element={<CharacterDetails />} />
          <Route path="/:id" element={<CharacterDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
