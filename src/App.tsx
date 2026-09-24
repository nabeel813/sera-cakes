import { Routes, Route, Navigate } from "react-router-dom";
import IntroPage from "./IntroPage";
import HomePage from "./HomePage";
import OrderPage from "./OrderPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<IntroPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
