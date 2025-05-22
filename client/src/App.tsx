import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";

// Pages
import Home from "@/pages/Home";
import Features from "@/pages/Features";
import Pools from "@/pages/Pools";
import Knowledge from "@/pages/Knowledge";
import NotFound from "@/pages/not-found";

// Layout Components
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

function App() {
  const [location] = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/features" component={Features} />
          <Route path="/pools" component={Pools} />
          <Route path="/knowledge" component={Knowledge} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
