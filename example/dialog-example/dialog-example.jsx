import React from "react";
import Present from "../../app/present/present.jsx";
import DialogNew from "../../components/dialog/diaolog.jsx"
class DialogExample extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isShowDialog:false
        };
        this.onConfirm=this.onConfirm.bind(this);
    }
    onConfirm(){
        this.setState({isShowDialog:false})
    }
    render(){
        let {isShowDialog}=this.state;
        return(
            <div>
                <Present title="模态框"/>
                <button className="btnCommon" onClick={()=>{this.setState({isShowDialog:true})}}>点我显示弹框</button>
                {
                    isShowDialog?
                        <DialogNew
                            title="弹框标题"
                            onConfirm={this.onConfirm}
                            onClose={()=>{this.setState({isShowDialog:false})}}
                        >
                            <p>这是弹框内容区域</p>
                        </DialogNew>:null
                }
            </div>
        )
    }
}
export default DialogExample


