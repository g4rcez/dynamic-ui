import React, { Suspense } from "react";
import { Router, Switch } from "react-router";
import {
  changeCssVars,
  CreateReactiveContext,
  useReactive
} from "./config/theme";
import variables, { Variables } from "./config/variables";
import Routes from "./routes";
import { History } from "./routes/history";
import SuspenseFallback from "./routes/suspense-fallback";

export const ReactiveContext = CreateReactiveContext<Variables>();

function App() {
  const [values, callback] = useReactive(variables, changeCssVars);

  return (
    <React.StrictMode>
      <ReactiveContext.Provider value={{ values, callback }}>
        <Suspense fallback={<SuspenseFallback />}>
          <Router history={History}>
            <Switch>
              <Routes />
            </Switch>
          </Router>
        </Suspense>
      </ReactiveContext.Provider>
    </React.StrictMode>
  );
}

export default App;
