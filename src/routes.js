import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import AppContainer from "./Components/AppContainer";
import Home from "./Components/Home";
import Gallery from "./Components/Gallery";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Faq from "./Components/Faq";

const AppRouter = () => (
  <Router basename="/">
    <Route path="/">
      <AppContainer>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/programme" component={Gallery}/>
        <Route path="/testimonial" component={Faq}/>
        <Route path="/blog" component={Contact}/>
      </AppContainer>
    </Route>
  </Router>
);
export default AppRouter;
