import { privateRoutes, publickRoutes } from "../routes";
import { Route, Switch, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import { UserAuthContext } from "./context/UserAuthContext";


function AppRouter() {
  const { isUserLogin } = useContext(UserAuthContext);
  return (
    <Switch>
      {
        isUserLogin ?
          <Switch>
            {
              privateRoutes.map(route => {
                return (
                  <Route
                    key={route.path}
                    path={route.path}
                    component={route.component}
                    exact={route.exact}>
                  </Route>
                );
              })
            }
            <Redirect to="/usersongs" />
          </Switch>
          :
          <Switch>
            {
              publickRoutes.map(route => {
                return (
                  <Route
                    key={route.path}
                    path={route.path}
                    component={route.component}
                    exact={route.exact}>
                  </Route>
                );
              })
            }
            <Redirect to="/login" />
          </Switch>
      }
    </Switch>
  );
}

export default AppRouter;