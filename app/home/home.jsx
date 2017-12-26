import React from "react";

class Home extends React.Component{
    componentWillMount(){
        let obj={id:1,age:20,sex:"女"};
        console.log(Object.assign({},obj,{age:25}),'测试Js新的API')
    }
    render(){
        return(
            <h1>Hi，欢迎你</h1>
        )
    }
}

export default Home;
