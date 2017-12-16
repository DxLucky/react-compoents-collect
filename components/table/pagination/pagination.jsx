import React from "react";
import _ from "underscore";
import classNames from "classnames";
import "./pagination.scss"
import PropTypes from 'prop-types';
class Pagination extends React.Component{
    static propTypes={
        onJump: PropTypes.func,
        onSelect:PropTypes.func,
        total:PropTypes.number,
        pageNo:PropTypes.number,
        pageCount:PropTypes.number
    };
  constructor(props){
    super(props);
    this.state={
        pageNo: this.props.pageNo || 1,
        pageSize:this.props.pageSize || 10,
        total:this.props.total,
        notSearch: false,
        turnPage:'',
        stretchLength:this.props.stretchLength || 3
    };
    this.renderPagination=this.renderPagination.bind(this);
    this.pageSizeChange=this.pageSizeChange.bind(this);
    this.onSelect=this.onSelect.bind(this);
    this.reset=this.reset.bind(this);
    this.paging=this.paging.bind(this);
    this.goPage=this.goPage.bind(this);
  }
  componentWillReceiveProps(newProps){
      let {pageNo,total,pageSize,notSearch } = this.state;
      let prevTotal = total;
      total = newProps.total;
      let pageCount = total % pageSize == 0 ? total / pageSize : parseInt(total / pageSize) + 1;
      this.renderPagination(pageNo);
      this.setState({
          pageNo: pageNo,
          pageCount: pageCount,
          total:total,
          pageSize:pageSize,
          notSearch: notSearch
      });
      return false;
  }
  componentDidMount(){
      let {total,pageSize,pageNo} = this.state;
      let pageCount = total % pageSize == 0 ? total / pageSize : parseInt(total / pageSize) + 1;
      this.setState({
          pageNo: pageNo || 1,
          pageSize:pageSize || 10,
          pageCount: pageCount,
          total:total
      });
  }
  renderPagination(pageNo) {
        let {total}= this.props;
        let { pageCount,stretchLength}=this.state;
        let array=[],start,end;
        if(pageNo > stretchLength){
            if(pageNo > (pageCount - stretchLength)){
                end =  pageNo + (pageCount - pageNo);
                start = (pageNo - stretchLength);
            }else{
                end = pageNo + stretchLength;
                start = pageNo - stretchLength;
            }
        }else{
            start = 1;
            end = pageCount <= (stretchLength * 2) ? pageCount : stretchLength * 2;
        }
        array = _.range(start,end+1);
        return array;
    }
  pageSizeChange(e){
      let {total,notSearch} = this.props;
      let pageSize = parseInt(e.target.value);
      let pageCount = total % pageSize == 0 ? total / pageSize : parseInt(total / pageSize) + 1;
      this.setState({
          pageSize: e.target.value,
          pageCount:pageCount,
          notSearch: true
      });
      let pagination = this.state;
      pagination.pageNo = 1;
      pagination.pageSize = pageSize;
      this.props.onPageChange(pagination);
  }
  onSelect(pageNo){
        this.setState({
            pageNo,
            notSearch: true
        });
        let pagination = this.state;
        pagination.pageNo = pageNo;
        this.props.onPageChange(pagination);
    }
  reset(pageNo){
      this.state.pageNo =pageNo || 1;
      this.state.notSearch=true;
  }
  paging(action){
        let { pageNo } = this.state;
        let pagination = this.state;
        if (action === 'prev') {
            this.setState({
                pageNo: pageNo - 1,
                notSearch: true
            });
            pagination.pageNo = pageNo - 1;
        }
        if (action === 'next') {
            this.setState({
                pageNo: pageNo + 1,
                notSearch: true
            });
            pagination.pageNo = pageNo + 1;
        }
        this.props.onPageChange(pagination);
    }
  goPage(){
        let {pageNo,pageCount,turnPage} = this.state;
        let pagination = this.state;
        let  val =  turnPage;
        if( /^\d+$/.test(val) &&  ( val >=1 && val <= pageCount) ) {
            val = parseInt(val, 10);
            this.setState({
                pageNo: val,
                notSearch: true
            });
            pagination.pageNo = val;
            this.props.onPageChange(pagination);
        }
        this.setState({
            turnPage:''
        })
    }
  render(){
        let { pageNo,total,pageCount,pageSize,turnPage} = this.state;
        let isShowGoPage = this.props.showGoPage;
        let isShowEachItem=this.props.showEachItem===false?false:true;
        let itemsArray = this.renderPagination(pageNo);
        let len = itemsArray.length;
        let index =  itemsArray.findIndex((n)=>{
            return n == pageNo;
        });
        let idx =  index + 3;
        idx = idx > len ? len : idx;
        let arr = itemsArray.slice(0, idx);
        return (
            <div className="pagination-mod clearfix">
                <div className="operation pull-left">
                  <span style={{marginRight:isShowEachItem?'':'10px'}}>合计<label className={classNames({modalPagina:!isShowEachItem})}>{total}</label>条</span>
                  <span>
                      {
                          isShowEachItem &&
                              <span>
                                   <b>&nbsp;</b>
                                  每页
                          <select defaultValue={pageSize}
                                  className="min"
                                  onChange={this.pageSizeChange}>
                          <option value="5">5</option>
                          <option value="10">10</option>
                          <option value="20">20</option>
                          <option value="30">30</option>
                          </select>
                          条,
                              </span>
                      }
                      共<label className={classNames({modalPagina:!isShowEachItem})}>{pageCount}</label>页
                  </span>
                    {isShowGoPage &&
                    <div  className="operation  oper-gopage pull-left">
                      <span>跳转到第</span>
                      <input type="text" value={turnPage} style={{width:isShowEachItem?'':'35px'}}
                              onChange={(e)=>{this.setState({turnPage:e.target.value})}}/>
                      <span>页</span>
                      <button key={_.uniqueId('_go_page_item')} className='button min paging confir' onClick={this.goPage}>确定</button>
                    </div>}
                </div>
                <div className="page-wrapper pull-right clearfix">
                    <button className={classNames('button small prev paging',{disabled:pageNo <= 1})} disabled={pageNo <= 1 ? 'disabled' : ''} onClick={()=>{this.paging('prev')}}>上一页</button>
                      {_.map(arr, (item) => {
                          return (
                              <button key={_.uniqueId('_page_item')} className={classNames('button min paging', {active: item == pageNo})}
                                      onClick={() => {this.onSelect(item)}}>{item}</button>
                          );
                      })}
                    <button className={classNames('button small next paging',{disabled:pageNo >= pageCount})}  disabled={pageNo >= pageCount ? 'disabled' : ''} onClick={()=>{this.paging('next')}}>下一页</button>
                </div>
            </div>);
    }
}

export default Pagination