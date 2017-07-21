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
        <Route path="/gallery" component={Gallery}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/faq" component={Faq}/>
      </AppContainer>
    </Route>
  </Router>
);
export default AppRouter;
