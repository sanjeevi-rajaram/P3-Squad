import React from "react";
import {HashRouter as Router, Route} from "react-router-dom";
import AppContainer from "./Components/AppContainer";
import Home from "./Components/Home";
import Gallery from "./Components/Gallery";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Faq from "./Components/Faq";

const AppRouter = () => (
  <Router basename="/">
    <Route exact path="/">
      <AppContainer>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/programme" component={Gallery}/>
        <Route exact path="/testimonial" component={Faq}/>
        <Route exact path="/blog" component={Contact}/>
      </AppContainer>
    </Route>
  </Router>
);
export default AppRouter;
