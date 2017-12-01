import React from "react";
import Aside from "../app/aside/aside.jsx";
import "../asset/style/main.scss";
import PropTypes from "prop-types";
class Layout extends React.Component{
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
Layout.propTypes={
    router:PropTypes.object
};

export default Layout;
