import React from "react";
import {Route,BrowserRouter as Router,Switch} from "react-router-dom";
import Layout from "../src/layout.jsx";//布局
import Home from "../app/home/home.jsx";//主页
import asyncComponent from "./asyncComponent.jsx";//按需加载

const SelectExample=asyncComponent(()=>import("../example/select-example/selcect-example.jsx"));//下拉选择框
const CheckboxExample=asyncComponent(()=>import("../example/checkbox-example/checkbox-example.jsx"));//复选框
const MsgAlertExample=asyncComponent(()=>import("../example/msgalert-example/msgalert-example.jsx"));//消息提示框
const DialogExample=asyncComponent(()=>import("../example/dialog-example/dialog-example.jsx"));//模态框
const TableExample=asyncComponent(()=>import("../example/table-example/table-example.jsx"));//表格
const DatePickerExample=asyncComponent(()=>import("../example/datepicker-example/datepicker-example.jsx"));//日期选择器
const ChildRouterExample=asyncComponent(()=>import("../example/msgalert-example/childRouter-example.jsx"));//子级路由

class Routers extends React.Component{
    render(){
        return (
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/selcet" component={SelectExample}/>
                        <Route exact path="/checkbox" component={CheckboxExample}/>
                        <Route exact path="/alert" component={MsgAlertExample}/>
                        <Route path="/alert/childRouter" component={ChildRouterExample}/>
                        <Route exact path="/dialog" component={DialogExample}/>
                        <Route exact path="/table" component={TableExample}/>
                        <Route exact path="/datepicker" component={DatePickerExample}/>
                    </Switch>
                </Layout>
            </Router>
        )
    }
}

export default Routers
