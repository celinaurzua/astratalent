import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';


import LoginCandidate from './Components/LoginCandidate'
import TestWelcome from './Components/TestWelcome'
import TestOne from './Components/TestOne'
import TestTwo from './Components/TestTwo'
import TestThree from './Components/TestThree'
import TestFeedback from './Components/TestFeedback'
import LoginRh from './Components/LoginRh'
import DashboardRh from './Components/DashboardRh'
import DashboardStatistics from './Components/DashboardStatistics'
import {ProtectedRoute} from './ProtectedRoute'
import {ProtectedRH} from './ProtectedRH'

const Routers = () => (
    <HashRouter basename={process.env.PUBLIC_URL}>

   <Switch>
        <Route exact path="/" component={LoginCandidate}/>
        <ProtectedRoute exact path="/welcome" component={TestWelcome}/>
        <ProtectedRoute exact path="/testone" component={TestOne}/>
        <ProtectedRoute exact path="/testtwo" component={TestTwo}/>
        <ProtectedRoute exact path="/testthree" component={TestThree}/>
        <ProtectedRoute exact path="/testfeedback" component={TestFeedback}/>
    </Switch>
    <Switch>
        <Route exact path="/login-rh" component={LoginRh}/>
        <ProtectedRH exact path="/rh" component={DashboardRh}/>
        <ProtectedRH exact path="/statistics" component={DashboardStatistics}/>

    </Switch>
    </HashRouter>
    
)

export default Routers