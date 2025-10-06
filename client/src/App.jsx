import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import Navigation from "./components/Navigation";
import StarField from "./components/StarField";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectCampusConnect from "./pages/ProjectCampusConnect";
import ProjectPrepMaster from "./pages/ProjectPrepMaster";
import ProjectAlumniAssociation from "./pages/ProjectAlumniAssociation";
import ProjectChatbotGenAI from "./pages/ProjectChatbotGenAI";
import Contact from "./pages/Contact";

import { useEffect } from "react";
function Router() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="min-h-screen bg-space-black text-white font-inter overflow-x-hidden flex flex-col justify-between">
      <div>
        <StarField />
        <Navigation />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          {/** Experience route removed **/}
          <Route path="/projects" component={Projects} />
          <Route path="/projects/campus-connect" component={ProjectCampusConnect} />
          <Route path="/projects/prepmaster" component={ProjectPrepMaster} />
          <Route path="/projects/alumni-association" component={ProjectAlumniAssociation} />
          {/** Face Emotion Detection route removed **/}
          <Route path="/projects/chatbot-genai" component={ProjectChatbotGenAI} />
          <Route path="/contact" component={Contact} />
          <Route>
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h1>
                <p className="text-cosmic-silver">The page you're looking for doesn't exist.</p>
              </div>
            </div>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
