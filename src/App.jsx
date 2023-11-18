import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import About from "./components/About"
import Footer from "./components/Footer"
import Knitting from "./components/Knitting"

import "./App.css"
// ^^ just importing all the other components from other files, and running them here so they are output here. Not completley sure how this works, nobody explained 'Router, Switch, Route' in any videos i looked up :(
const  App = () =>{
  return (
   <Router>
   <div className="app">
   <NavBar />
   <Switch>
   <Route exact path="/" component={Home} />
   <Route exact path="/about" component={About} />
   <Route exact path="/knitting" component={Knitting} />
   </Switch>
   <Footer />
   </div>
   </Router>
  );
}

export default App;
 