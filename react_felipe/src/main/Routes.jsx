import React from "react";
import {Switch, Route, Redirect} from 'react-router'
import { BrowserRouter, Routes } from 'react-router-dom'
import Home from '../components/home/Home'
import Exercice_1 from "../components/section/Timer_State";
import Exercice_2 from "../components/section/Login_Control";
import Exercice_3 from "../components/section/List_Keys";
import Exercice_4 from "../components/section/Photos_Node";
import Exercice_5 from "../components/section/React_Photo_Gallery";
import Exercice_6 from "../components/section/Forms";
import Exercice_7 from "../components/section/Liffiting_State";
import Exercice_8 from "../components/section/CRUD_Spring_Boot";
import ListeProduitEdit from "../components/section/ListeProduitEdit"



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
            <Route path='/ListeProduitEdit/:id'><ListeProduitEdit/></Route>
            <Redirect from='*' to='/' />
        </Switch>
   


    