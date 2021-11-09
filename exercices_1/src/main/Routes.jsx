import React from "react";
import {Switch, Route, Redirect} from 'react-router'

import Home from '../components/home/Home'
import Exercice_1 from "../components/section/Exercice_1";


export default props => 
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exect path='/' component={Exercice_1}/>
        <Redirect from='*' to='/' />
    </Switch>