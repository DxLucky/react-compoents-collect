import React from "react";
import {Route,HashRouter} from "react-router-dom";
import Layout from "../src/layout.jsx";
import Home from "../app/home/home.jsx";//主页
import SelectExample from "../example/select-example/selcect-example.jsx";//下拉框
import AlertExample from "../example/msgalert-example/msgalert-example.jsx";//alert框
import CheckboxExample from "../example/checkbox-example/checkbox-example.jsx";//多选框
import TableExample from "../example/table-example/table-example.jsx"////表格
import DialogExample from "../example/dialog-example/dialog-example.jsx";//模态框
import TimePickerExample from "../example/timepicker-example/timepicker-example.jsx";//时间选择框
import DatePickerExample from "../example/datepicker-example/datepicker-example.jsx";//日期选择器
// const CheckboxExample= (location , cb) => { //工时日历
//     require.ensure([],(require) =>{
//         cb(null,{main:require("../app/checkbox-example/checkbox-example.jsx"),sidebar:'hours'});
//     },'hours')
// };

class Routers extends React.Component{
    render(){
        return (
            <HashRouter>
                <Layout>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/selcet" component={SelectExample}/>
                    <Route exact path="/checkbox" component={CheckboxExample}/>
                    <Route exact path="/alert" component={AlertExample}/>
                    <Route exact path="/dialog" component={DialogExample}/>
                    <Route exact path="/table" component={TableExample}/>
                    <Route exact path="/timepicker" component={TimePickerExample}/>
                    <Route exact path="/datepicker" component={DatePickerExample}/>
                </Layout>
            </HashRouter>
        )
    }
}

export default Routers
