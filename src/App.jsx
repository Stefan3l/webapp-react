import { BrowserRouter, Routes, Route } from "react-router-dom";

// PAGES

import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index Component={HomePage}></Route>
        <Route to="/movie/" Component={MoviePage}></Route>
      </Routes>
    </BrowserRouter>
  );
}
