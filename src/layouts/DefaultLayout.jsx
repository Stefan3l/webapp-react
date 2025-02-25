import { Outlet } from "react-router-dom";

// COMPONENTS
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DefaultLayout() {
  return (
    <div className="max-w-[1200px] mx-auto ">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
