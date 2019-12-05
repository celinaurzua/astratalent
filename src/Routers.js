import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Loginapplicant from './Components/Loginapplicant'
import Testwelcome from './Components/Testwelcome'
import Testone from './Components/Testone'
import Testtwo from './Components/Testtwo'
import Testthree from './Components/Testthree'
import Testfeedback from './Components/Testfeedback'
import Testbye from './Components/Testbye'



const Routers = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
   <Switch>/>
        <Route exact path="/" component={Loginapplicant}/>
        <Route exact path="/welcome" component={Testwelcome}/>
        <Route exact path="/testone" component={Testone}/>
        <Route exact path="/testtwo" component={Testtwo}/>
        <Route exact path="/testthree" component={Testthree}/>
        <Route exact path="/testfeedback" component={Testfeedback}/>
        <Route exact path="/testbye" component={Testbye}/>
    </Switch>
    </BrowserRouter>
)

export default Routers