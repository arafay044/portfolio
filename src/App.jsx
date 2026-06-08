import { useState, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import PreLoader from "./components/PreLoader";
import NotFound from "./pages/NotFound";

const Home = () => {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const handleDone = useCallback(() => setPreloaderDone(true), []);
  return (
    <>
      {!preloaderDone && <PreLoader onDone={handleDone} />}
      <Portfolio />
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/"  element={<Home />} />
      <Route path="*"  element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
