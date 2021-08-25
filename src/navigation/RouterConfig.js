import React, { Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import SLUGS from "../utils/slugs";
// import LoadingComponent from "components/loading";

const Dashboard = lazy(() => import("../pages/Home/components/Dashboard"));
// const ProdukComponent = lazy(() => import('../pages/Produk'));
// const PesananComponent = lazy(() => import('../pages/Pesanan'));

function PrivateRoute() {
  return (
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        {/* <Route exact path={SLUGS.overviewTwo} render={() => <div>overviewTwo</div>} />
                <Route exact path={SLUGS.overviewThree} render={() => <div>overviewThree</div>} />
                <Route exact path={SLUGS.overview} render={() => <div>overview</div>} />
                <Route exact path={SLUGS.tickets} render={() => <div>tickets</div>} />
                <Route exact path={SLUGS.ideasTwo} render={() => <div>ideasTwo</div>} />
                <Route exact path={SLUGS.ideasThree} render={() => <div>ideasThree</div>} />
                <Route exact path={SLUGS.ideas} render={() => <div>ideas</div>} />
                <Route exact path={SLUGS.contacts} render={() => <div>contacts</div>} /> */}
        {/* <Route exact path={SLUGS.produk} component={ProdukComponent} />
                <Route exact path={SLUGS.kategori} render={() => <div>Kategori</div>} />
                <Route exact path={SLUGS.user} render={() => <div>User</div>} />
                <Route exact path={SLUGS.voucher} render={() => <div>Voucher</div>} />
                <Route exact path={SLUGS.pesanan} component={PesananComponent} />
                <Route exact path={SLUGS.tracking} render={() => <div>Tracking</div>} />
                <Route exact path={SLUGS.payment} render={() => <div>Payment</div>} />
                <Route exact path={SLUGS.subscription} render={() => <div>subscription</div>} />
                <Redirect to={SLUGS.dashboard} /> */}
      </Switch>
  );
}

export default PrivateRoute;
