import React from "react";
import classname from "classnames";
import PropTypes from 'prop-types';
import "./navtabs.scss";

class NavTabs extends React.Component{
    static propTypes = {
        tabsArr: PropTypes.array,
        width: PropTypes.string,
        activeIndex: PropTypes.func,
        hasMore:PropTypes.bool
    };
    static defaultProps ={
        hasMore:true
    };
    constructor(props){
        super(props);
        this.changeTabs=this.changeTabs.bind(this);
    }
    changeTabs(activeIndex){
        let {getTabsIndex}=this.props;
        getTabsIndex && getTabsIndex(activeIndex)
    }
    shouldComponentUpdate(nextProps){
        return nextProps.activeIndex!==this.props.activeIndex;
    }
    render(){
        let {tabsArr,width,activeIndex,hasMore}=this.props;
        return(
            <div className="navTabsBox" style={{minWidth:width}}>
                <header>
                    <ul>
                        {
                            tabsArr.map((item,i)=>{
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
                <section>
                    {this.props.children}
                </section>
            </div>
        )
    }
}

export default NavTabs