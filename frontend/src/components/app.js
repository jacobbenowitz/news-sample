import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container'
import MainPageContainer from './main/main_page.container';
import '../index.css'

const App = () => (
  <div id='app' className="bg-gray-900 w-screen
    top-0 left-0 text-slate-20 box-border">
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPageContainer} />
    </Switch>
  </div>
)

export default App;