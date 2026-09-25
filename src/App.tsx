import { useState } from "react";
import Overture from "./Overture";
import OrderPage from "./OrderPage";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <OrderPage />
      {showIntro && <Overture onComplete={() => setShowIntro(false)} />}
    </>
  );
}