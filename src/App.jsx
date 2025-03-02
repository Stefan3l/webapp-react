import { BrowserRouter, Routes, Route } from "react-router-dom";

// LAYOUTS
import DefaultLayout from "./layouts/DefaultLayout";

// PAGES
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import AddMovie from "./pages/AddMovie";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route index path="/" Component={HomePage}></Route>
          <Route path="/movies/:id" Component={MoviePage}></Route>
          <Route path="/crea" Component={AddMovie}></Route>
        </Route>
        <Route path="*" Component={PageNotFound}></Route>
      </Routes>
    </BrowserRouter>
  );
}
