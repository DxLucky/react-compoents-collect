import React from "react";
import classNames from "classnames";
import "./select.scss";
class Select extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isShowOption:false,
            selectValue:this.props.defaultSelect
        };
        this.changeOptionShow=this.changeOptionShow.bind(this);
        this.onSelect=this.onSelect.bind(this);
        this.closeOption=this.closeOption.bind(this);
    }
    changeOptionShow(e){
        e.nativeEvent.stopImmediatePropagation();
        this.setState({
            isShowOption:!this.state.isShowOption
        })
    }
    closeOption(){
        if(this.state.isShowOption){
            this.setState({
                isShowOption:!this.state.isShowOption
            })
        }
    }
    componentDidMount() {
        document.addEventListener('click',this.closeOption)
    }
    onSelect(e){
        this.setState({
            selectValue:e.target.innerText,
            isShowOption:!this.state.isShowOption
        });
        this.props.onSelectChange(this.props.sendField,e.target.innerText)
    }
    resetSelect() {
        this.setState({
            selectValue:'全部'
        })
    }
    render(){
        let {isShowOption,selectValue}=this.state;
        let {optionGroup}=this.props;
        return(
            <div className={classNames('selectBox',this.props.className)}>
                <label onClick={this.changeOptionShow} className={classNames({openOption:isShowOption})}>{selectValue}</label>
                {isShowOption?
                    <ul>
                        {
                            optionGroup.map((item)=>{
                                return(
                                    <li key={item.value} onClick={this.onSelect} className={classNames({active:item.name==selectValue})}>{item.name}</li>
                                )
                            })
                        }
                    </ul>
                    :
                    null
                }
            </div>
        )
    }
}
export default Select
