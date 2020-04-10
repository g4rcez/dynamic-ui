import React, { useMemo, Fragment } from "react";
import pages, { Page } from "./pages";
import { Route } from "react-router";

const Routes = () => {
  const internalPages = useMemo(() => pages, []);
  const RouteMap = (page: Page) => (
    <Route exact path={page.link} component={page.component} />
  );
  return (
    <Fragment>
      {internalPages.map(x => (
        <RouteMap key={`route-${x.link}`} {...x} />
      ))}
    </Fragment>
  );
};

export default Routes;
