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
        return (
            <div className="modal-box">
                <div className="modal-shadow"></div>
                <div className="modal-dialog">
                    <header>
                        <p>这是标题</p>
                        <p className="cancleSign"></p>
                    </header>
                    <section>
                        这是中间区域,确定取消吗
                    </section>
                    <footer>
                        <button className="btn-confirm"></button>
                    </footer>
                </div>
            </div>
        )
    }
}
export default Dialog

