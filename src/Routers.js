import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {ProtectedRoute} from './ProtectedRoute'
import Loginapplicant from './Components/Loginapplicant'
import Testwelcome from './Components/Testwelcome'
import Testone from './Components/Testone'
import Testtwo from './Components/Testtwo'
import Testthree from './Components/Testthree'
import Testfeedback from './Components/Testfeedback'
import Loginrh from './Components/LoginHR'
import Rh from './Components/Dashboardrh'
import Statistics from './Components/Dashboardstatistics'


const Routers = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
   <Switch>/>
        <Route exact path="/" component={Loginapplicant}/>
        <ProtectedRoute exact path="/welcome" component={Testwelcome}/>
        <ProtectedRoute exact path="/testone" component={Testone}/>
        <ProtectedRoute exact path="/testtwo" component={Testtwo}/>
        <ProtectedRoute exact path="/testthree" component={Testthree}/>
        <ProtectedRoute exact path="/testfeedback" component={Testfeedback}/>
        <Route exact path="/login-rh" component={Loginrh}/>
        <ProtectedRoute exact path="/rh" component={Rh}/>
        <ProtectedRoute exact path="/statistics" component={Statistics}/>
    </Switch>
    </BrowserRouter>
)

export default Routers