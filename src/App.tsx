import { Routes, Route } from "react-router-dom";
import SeraCakeHero from "./SeraCakeHero";
import Component from "./Component";
import OrderPage from "./OrderPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SeraCakeHero />} />
      <Route path="/home" element={<Component />} />
      <Route path="/order" element={<OrderPage />} />
    </Routes>
  );
}
