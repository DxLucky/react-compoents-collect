import React from "react";
import NavTabs from "../../components/navtabs/navtabs.jsx";
import Present from "../../app/present/present.jsx";

class NavTabsExample extends React.Component{
    constructor(props){
        super(props);
        this.state={
            activeIndex:0
        };
        this.getTabsIndex=this.getTabsIndex.bind(this);
    }
    getTabsIndex(activeIndex){
        this.setState({activeIndex})
    }
    shouldComponentUpdate(nextProps,nextState) {
        return nextState.activeIndex!==this.state.activeIndex;
    }
    render(){
        let {activeIndex}=this.state;
        const tabsArr=[
            {title:"标签页1"},
            {title:"标签页2"}
        ];
        return(
            <div>
                <Present title="标签页"/>
                <NavTabs
                    tabsArr={tabsArr}
                    getTabsIndex={this.getTabsIndex}
                    activeIndex={activeIndex}
                >
                    {(()=>{
                        switch (activeIndex) {
                            case 0:return (
                                <div>
                                    <p>这是标签页1的内容1</p>
                                </div>
                            );break;
                            case 1:return (
                                <div>
                                    <p>这是标签页2的内容2</p>
                                </div>
                            );break;
                        }
                    })()}
                </NavTabs>
            </div>
        )
    }
}

export default NavTabsExample