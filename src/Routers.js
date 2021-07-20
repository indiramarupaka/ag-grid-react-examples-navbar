import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import history from "./config/History";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Layout from "./components/layouts/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Delete from "./pages/Delete";
import Contact from "./pages/Contact";
import ExcelExport from "./pages/ExcelExport";
import LandingPage from "./pages/LandingPage";
import LandingPage1 from "./pages/LandingPage1";
import NewsPage from "./pages/NewsPage";
////https://github.com/nyctophiliacme/Chat-App/blob/master/client/src/App.js
class Routers extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/404" component={NotFound} />
          <Route path="/login" component={Login} />
          <Layout>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/delete" component={Delete} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/excel-export" component={ExcelExport} />
              <Route path="/landing" component={LandingPage} />
              <Route path="/landing1" component={LandingPage1} />
              <Route path="/news" component={NewsPage} />
              <Redirect from="*" to="/404" />
            </Switch>
          </Layout>
        </Switch>
      </Router>
    );
  }
}
export default Routers;
