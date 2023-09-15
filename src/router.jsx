import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Promos from "./components/Promos/Promos";
import Cabanas from "./components/cabanas/cabanas";


function AppRouter() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/promos" element={<Promos />} />
        <Route path="/cabanas" element={<Cabanas />} />
    </Routes>
  )
}

export default AppRouter;