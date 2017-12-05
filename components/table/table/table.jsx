import React from "react";
import _ from "underscore";
import "./table.scss";
import PropTypes from 'prop-types';
class Table extends React.Component{
    constructor(props){
        super(props);
        this.renderHtml=this.renderHtml.bind(this)
    }
    renderHtml(){
        let {children,data}=this.props;
        let tableHtml={tableHeader:[],tableBody:[]};
        let rowHead=_.filter(children,function(obj){
            return ( obj.props.rowHeader )
        });
        children=_.filter(children,function(obj) {
            return (!obj.props.rowHeader)
        });
        tableHtml.tableHeader.push(
            <tr key={_.uniqueId('thtr_')}>
                {children.map((column)=> {
                    var { header, onHeaderChange, data, width } = column.props;
                    var Header = header;
                    tableHtml.tableWidth += parseInt(width) || 100;
                    if (React.isValidElement(header)) {
                        return (<th width={width} key={_.uniqueId('th_')}>{header}</th>);
                    }
                    return (<th width={width} key={_.uniqueId('th_')}><Header onChange={onHeaderChange} data={data}/></th>);
                })}
            </tr>
        );
        {data && data.map((item,rowIndex) => {
            let flag = !(rowIndex % 2 === 0);
            if(rowHead[0] && rowHead[0].props.children){
                var rowHeadChild = rowHead[0].props.children;
                tableHtml.tableBody.push(
                    <tr className="row-margin" key={_.uniqueId('rh_margin')}>
                        <td colSpan="100"></td>
                    </tr>
                );
                tableHtml.tableBody.push(
                    <tr className="rowHeader" key={_.uniqueId('rh_')}>
                        {rowHeadChild.map((column, index)=> {
                                let { cell,colKey,onClick,className,onCellChange,colSpan,...others}=column.props;
                                let Cell=cell;
                                if (Cell){
                                    return (
                                        <td key={_.uniqueId('tdrow_')} colSpan={colSpan}>
                                            <Cell
                                                {...others} data={item} onClick={onClick} colKey={colKey} index={rowIndex}
                                                onChange={(event) => {onCellChange(event, item,rowIndex);}} />
                                        </td>);
                                }
                                if (colKey == 'INDEX') {
                                    return (<td key={_.uniqueId('tdrow_')} colSpan={colSpan}><span className={className?className:''}>{index + 1}</span></td>);
                                }
                                return (<td key={_.uniqueId('tdrow_')} colSpan={colSpan}><span className={className?className:''}>{item[colKey]}</span></td>);
                            }
                        )}
                    </tr>
                )
            }
            tableHtml.tableBody.push(
                <tr key={_.uniqueId('tr_')} className={flag ? "shadow" : ""}>
                    {children.map((column, index)=> {
                            let { cell, colKey, onClick,className, onCellChange, htmlFormat, ...others } = column.props;
                            let Cell = cell;
                            if (Cell){
                                return (
                                    <td key={_.uniqueId('td_')}>
                                        <Cell
                                            {...others} data={item} onClick={onClick} colKey={colKey} index={rowIndex}
                                            onChange={(event) => {onCellChange(event, item,rowIndex);}} />
                                    </td>);
                            }
                            if(htmlFormat){
                                return (
                                    <td  key={_.uniqueId('td_')}>
                                        <span dangerouslySetInnerHTML={{__html:item[colKey]}} className={className?className:''}></span>
                                    </td>
                                );
                            }
                            if (colKey == 'INDEX') {
                                return (<td key={_.uniqueId('td_')}><span className={className?className:''}>{rowIndex + 1}</span></td>);
                            }
                            return (<td key={_.uniqueId('td_')}><span className={className?className:''}>{item[colKey]}</span></td>);
                        }
                    )}
                </tr>
            );
        })}
        return tableHtml;
    }
    render() {
        let {className,loading,children} = this.props;
        let tableHtml = this.renderHtml();
        return (
            <div className="table-mod">
                <table className={className} cellSpacing="0">
                    <thead>
                    {tableHtml.tableHeader}
                    </thead>
                    {
                        loading ?
                            <tbody>
                            <tr>
                                <td style={{minHeight:'50'}} colSpan={children.length}>
                                    <img src={require("../../../asset/images/loading.gif")}/>
                                </td>
                            </tr>
                            </tbody> :
                            <tbody>
                            {
                                tableHtml.tableBody.length > 0 ?
                                    tableHtml.tableBody :
                                    <tr>
                                        <td colSpan={children.length}>没有数据</td>
                                    </tr>
                            }
                            </tbody>
                    }
                </table>
            </div>);
    }
}

class Table_Column extends React.Component{
    static propTypes={
        header:PropTypes.any,
        colKey:PropTypes.string,
        onHeaderChange:PropTypes.func,
        onCellChange:PropTypes.func,
        htmlFormat:PropTypes.bool,
        data:PropTypes.any
    };
    render() {
        return null;
    }
}

Table.Column=Table_Column;
export default Table;
