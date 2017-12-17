import React from "react";
import "./dialog.scss"
class Dialog extends React.Component{
    constructor(props){
        super(props);
        this.state={
            show: true
        };
    }
    render() {
        let {width,title,onConfirm,onClose} = this.props;
        return (
            <div className="modal-box">
                <div className="modal-shadow"></div>
                <div className="modal-dialog" style={{width:`${width}px`}}>
                    <header>
                        <p>{title || null}</p>
                        <p className="cancleSign" onClick={onClose}></p>
                    </header>
                    <section>
                        {this.props.children}
                    </section>
                    <footer>
                        <button className="btn-confirm" onClick={onConfirm}>确定</button>
                        <button className="btn-cancel" onClick={onClose}>取消</button>
                    </footer>
                </div>
            </div>
        )
    }
}
export default Dialog

