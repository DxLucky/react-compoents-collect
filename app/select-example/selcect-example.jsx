import React from "react";
import Select from "../../components/select/select.jsx";//下拉框

class SelectExample extends React.Component{
    constructor(props){
        super(props);
        this.state={
            shareTypeValue:"全部"
        };
       this.onSelectChange=this.onSelectChange.bind(this)
    }
    onSelectChange(field,value){
        let obj = {};
        obj[field]=value;
        this.setState(obj);
    }
    render(){
        let {shareTypeValue}=this.state;
        return(
            <div>
                <Select className='goMeSelect'  ref="shareType"
                        optionGroup={
                            [
                                {name:'全部',value:'全部'},{name:'不找上级',value:'不找上级'},{name:'找上级',value:'找上级'}
                            ]
                        }
                        defaultSelect={shareTypeValue}
                        sendField="shareTypeValue"
                        onSelectChange={this.onSelectChange}
                />
            </div>
        )
    }
}

export default SelectExample
