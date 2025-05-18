import { Route, Switch } from "wouter";

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
