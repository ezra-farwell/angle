import { useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { PortfolioPage } from "./pages/PortfolioPage";
import { useRouter } from "./lib/router";

export default function App() {
  const { path } = useRouter();
  const isPortfolio = path.replace(/\/$/, "") === "/portfolio";

  // Reset scroll when switching between top-level pages.
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior }); }, [isPortfolio]);

  return (
    <>
      <Header />
      <main>{isPortfolio ? <PortfolioPage /> : <Home />}</main>
      <Footer />
    </>
  );
}
