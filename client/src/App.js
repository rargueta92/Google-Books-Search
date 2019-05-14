
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchBooks from "./Pages/SearchBooks";
import SaveBooks from "./pages/SaveBooks";
import NoMatch from "./Pages/NoMatch";
import Nav from "./Components/Nav/index";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Nav />
          <Switch>
            <Route exact path="/" component={SearchBooks} />
            <Route exact path="/saved" component={SaveBooks} />
            <Route exact path="/saved/:id" component={SaveBooks} />
            <Route component={NoMatch} />
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
