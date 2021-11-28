import React from "react";
import {Switch, Route, Redirect} from 'react-router'

import Home from '../components/home/Home'
import Exercice_1 from "../components/section/Exercice_1";
import Exercice_2 from "../components/section/Exercice_2";
import Exercice_3 from "../components/section/Exercice_3";
import Exercice_4 from "../components/section/Exercice_4";
import Exercice_5 from "../components/section/Exercice_5";
import Exercice_6 from "../components/section/Exercice_6";
import Exercice_7 from "../components/section/Exercice_7";
import Exercice_8 from "../components/section/Exercice_8";


export default props => 
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/exercice_1' component={Exercice_1}/>
        <Route path="/exercice_2"><Exercice_2/></Route>
        <Route path="/exercice_3"><Exercice_3/></Route>
        <Route path="/exercice_4"><Exercice_4/></Route>
        <Route path="/exercice_5"><Exercice_5/></Route>
        <Route path="/exercice_6"><Exercice_6/></Route>
        <Route path="/exercice_7"><Exercice_7/></Route>
        <Route path="/exercice_8"><Exercice_8/></Route>
        <Redirect from='*' to='/' />
    </Switch>