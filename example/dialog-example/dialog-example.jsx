import React from "react";
import Present from "../../app/present/present.jsx";
import Dialog from "../../components/dialog/dialog.jsx";//下拉框
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
                    isShowDialog ?
                        <Dialog title="弹框标题" width="500"
                                onConfirm={this.onConfirm}
                                onClose={()=>{this.setState({isShowDialog:false})}}
                        >
                            <p>这是弹框内容区域</p>
                        </Dialog>:null
                }
            </div>
        )
    }
}
export default DialogExample


