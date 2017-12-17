import React from "react";
import Present from "../../app/present/present.jsx";
import Select from "../../components/select/select.jsx";//下拉框
import "./select-example.scss"
class SelectExample extends React.Component{
    constructor(props){
        super(props);
        this.state={
            shareTypeValue:"全部",
            loadMore:"全部"
        };
       this.onSelectChange=this.onSelectChange.bind(this)
    }
    onSelectChange(field,value){
        let obj = {};
        obj[field]=value;
        this.setState(obj);
    }
    render(){
        let {shareTypeValue,loadMore}=this.state;
        return(
            <div className="select-example">
                <Present title="下拉选择框" introduce="当下拉选项超过一定数量时，出现滚动条"/>
                <Select className='JokerSelect'
                        optionGroup={
                            [
                                {name:'全部',value:'全部'},{name:'不找上级',value:'不找上级'},{name:'找上级',value:'找上级'}
                            ]
                        }
                        defaultSelect={shareTypeValue}
                        sendField="shareTypeValue"
                        onSelectChange={this.onSelectChange}
                />
                <Select className='JokerSelect'
                        optionGroup={
                            [
                                {name:'1',value:'下拉1'},
                                {name:'2',value:'下拉2'},
                                {name:'3',value:'下拉3'},
                                {name:'4',value:'下拉4'},
                                {name:'5',value:'下拉5'},
                                {name:'6',value:'下拉6'},
                                {name:'7',value:'下拉7'},
                                {name:'8',value:'下拉8'},
                                {name:'9',value:'下拉9'},
                                {name:'10',value:'下拉10'},
                                {name:'11',value:'下拉11'},
                                {name:'12',value:'下拉12'},
                                {name:'13',value:'下拉13'},
                            ]
                        }
                        defaultSelect={loadMore}
                        sendField="loadMore"
                        onSelectChange={this.onSelectChange}
                />
            </div>
        )
    }
}

export default SelectExample
