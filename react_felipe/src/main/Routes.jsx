import React from "react";
import {Switch, Route, Redirect} from 'react-router'
import { BrowserRouter, Routes } from 'react-router-dom'
import Home from '../components/home/Home'
import Timer_State from "../components/section/Timer_State";
import Login_Control from "../components/section/Login_Control";
import List_Keys from "../components/section/List_Keys";
import Photos_Node from "../components/section/Photos_Node";
import React_Photo_Gallery from "../components/section/React_Photo_Gallery";
import Forms from "../components/section/Forms";
import Liffiting_State from "../components/section/Liffiting_State";
import CRUD_Sp from "../components/section/CRUD_Spring_Boot";
import ListeProduitEdit from "../components/section/ListeProduitEdit"
import NavResponsive from "../components/section/NavResponsive";



export default props => 
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/Timer_State' component={Timer_State}/>
            <Route path="/Login_Control"><Login_Control/></Route>
            <Route path="/List_Keys"><List_Keys/></Route>
            <Route path="/Photos_Node"><Photos_Node/></Route>
            <Route path="/React_Photo_Gallery"><React_Photo_Gallery/></Route>
            <Route path="/Forms"><Forms/></Route>
            <Route path="/Liffiting_State"><Liffiting_State/></Route>
            <Route path="/CRUD_Spring_Boot"><CRUD_Sp/></Route>
            <Route path='/ListeProduitEdit/:id'><ListeProduitEdit/></Route>
            <Route path='/NavResponsive'><NavResponsive/></Route>
            <Redirect from='*' to='/' />
        </Switch>
   


    