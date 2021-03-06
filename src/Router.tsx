import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coins from "./routes/Conis";
import Coin from "./routes/Coin";

interface IRouteProps {

}

function Router({  }: IRouteProps) {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path={"/:coinId"}>
          <Coin />
        </Route>
        <Route path={"/"}>
          <Coins  />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
