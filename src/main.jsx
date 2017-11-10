import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter,Route,HashRouter} from "react-router-dom"
import Aside from "../app/aside/aside.jsx";
import SelectExample from "../app/select-example/selcect-example.jsx";//下拉框
import AlertExample from "../app/alert-example/alert-example.jsx";//alert框
import CheckboxExample from "../app/checkbox-example/checkbox-example.jsx";//多选框
import "../asset/style/main.scss";
class ThisPage extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
            return(
                <div id="mainBox">
                    <div className="bodyBox">
                        <Aside/>
                        <section>
                            {this.props.children}
                        </section>
                    </div>
                </div>
            )
    }
}
ThisPage.contextTypes = {
    router:React.PropTypes.object
};
ReactDOM.render((
    <HashRouter>
        <ThisPage>
            <Route exact path="/selcet" component={SelectExample}/>
            <Route exact path="/alert" component={AlertExample}/>
            <Route exact path="/checkbox" component={CheckboxExample}/>
        </ThisPage>
    </HashRouter>),
document.getElementById("container"));


