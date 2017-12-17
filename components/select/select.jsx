import React from "react";
import classNames from "classnames";
import "./select.scss";
class Select extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isShowOption:false,
            selectValue:''
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
        this.refs.labelSelect.innerText = e.target.innerText;
        let selectItem = this.props.optionGroup.find((item)=>{
            return item.value == e.target.innerText
        });
        this.props.onSelectChange && this.props.onSelectChange(selectItem,this.props.sendField?this.props.sendField:undefined)
    }
    render(){
        let {isShowOption,selectValue}=this.state;
        let {optionGroup,width,height,textIndent}=this.props;
        return(
            <div style={{width:width?width:""}} className={classNames('selectBox',this.props.className)}>
                <label style={{height:height?height:"",lineHeight:height?height:"",textIndent:textIndent?textIndent:""}} onClick={this.changeOptionShow} className={classNames({openOption:isShowOption})} ref="labelSelect">{this.props.defaultSelect}</label>
                {isShowOption?
                    <ul style={{width:width?width:"",top:height?`${parseInt(height)+2}px`:""}}>
                        {
                            optionGroup.map((item)=>{
                                return(
                                    <li style={{textIndent:textIndent?textIndent:""}} key={`${item.value}${item.id}`} onClick={this.onSelect} className={classNames({active:item.value==(selectValue==''?this.props.defaultSelect:selectValue)})}>{item.value}</li>
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