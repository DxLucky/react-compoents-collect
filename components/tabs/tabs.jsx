import React from "react";
import classname from "classnames";
import PropTypes from 'prop-types';
import "./tabs.scss";

class Tabs extends React.Component{
    static propTypes = {
        tabsMenu: PropTypes.array,
        width: PropTypes.string,
        hasMore:PropTypes.bool,
        children:PropTypes.node
    };
    static defaultProps ={
        hasMore:true
    };
    constructor(props){
        super(props);
        this.state={
            activeIndex:0
        };
        this.changeTabs=this.changeTabs.bind(this);
        this.getContent=this.getContent.bind(this);
    }
    changeTabs(activeIndex){
        this.setState({activeIndex})
    }
    getContent(children){
        let {activeIndex}=this.state;
        return children.map((child,index)=>{
            if(activeIndex===index){
                return child
            }
        })
    }
    render(){
        let {activeIndex}=this.state,
            {tabsMenu,hasMore,children,width}=this.props;
        return(
            <div className="navTabsBox" style={{width:width}}>
                <header>
                    <ul>
                        {
                            tabsMenu.map((item,i)=>{
                                return (
                                    <li key={i}
                                        className={classname({hoverActive:activeIndex===i})}
                                        onMouseOver={()=>{this.changeTabs(i)}}
                                    >
                                        {item.title}
                                    </li>
                                )
                            })
                        }
                    </ul>
                    {
                        hasMore ?
                            <div>
                                <span>更多</span>
                                <i className="iconfont icon-gengduo"/>
                            </div>:null
                    }
                </header>
                {this.getContent(children)}
            </div>
        )
    }
}

class TabsItem extends React.Component {
    static propTypes = {
        children:PropTypes.node
    };
    render(){
        const {children ,...props}=this.props;
        return (
            <section {...props} >
                {children || ''}
            </section>
        )
    }
}
Tabs.Item=TabsItem;

export default Tabs