import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import loginCandidate from './Components/loginCandidate'
import testWelcome from './Components/testWelcome'
import testOne from './Components/testOne'
import testTwo from './Components/testTwo'
import testThree from './Components/testThree'
import testFeedback from './Components/testFeedback'
import loginRh from './Components/loginHr'
import dashboardRh from './Components/dashboardRh'
import dashboardStatistics from './Components/dashboardStatistics'


const Routers = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
   <Switch>/>
        <Route exact path="/" component={loginCandidate}/>
        <Route exact path="/welcome" component={testWelcome}/>
        <Route exact path="/testone" component={testOne}/>
        <Route exact path="/testtwo" component={testTwo}/>
        <Route exact path="/testthree" component={testThree}/>
        <Route exact path="/testfeedback" component={testFeedback}/>
        <Route exact path="/login-rh" component={loginRh}/>
        <Route exact path="/rh" component={dashboardRh}/>
        <Route exact path="/statistics" component={dashboardStatistics}/>
    </Switch>
    </BrowserRouter>
)

export default Routers