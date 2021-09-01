import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SLUGS from "../utils/slugs";
// import LoadingComponent from "components/loading";

// const Auth = lazy(() => import("../pages/Home/components/Authentication/auth"));
// const ProdukComponent = lazy(() => import('../pages/Produk'));
// const PesananComponent = lazy(() => import('../pages/Pesanan'));

import Auth from "../pages/Authentication/auth";
import Dashboard from "../pages/Home/Dashboard/dashboard";

function PublicRoute() {
  return (
    <Router>
      <Switch>
        <Route path={SLUGS.login} component={Auth} />
        <Route path={SLUGS.dashboard} component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default PublicRoute;
