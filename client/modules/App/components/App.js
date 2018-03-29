import React, { Component } from 'react';
import ListFiles from './ListFiles';
import ViewLineChart from './ViewLineChart';
import { connect } from 'react-redux';
import { saveCsvDataRequest, getCscListRequest } from '../actions';

class App extends Component {
    constructor() {
        super()

        this.state = {
            data : [],
            chart : false,
            chartData : undefined,
        }

        this.handleChangeFile = this.handleChangeFile.bind(this);
        this.chatHandler = this.chatHandler.bind(this);
        this.modalHanlder = this.modalHanlder.bind(this)
    }

    componentDidMount() {
        this.props.dispatch(getCscListRequest())
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            data : nextProps.csvListData.data
        })
    }

    handleChangeFile(e) {
        let file = e.target.files[0];
        let fileName = file.name;
        let reader = new FileReader();
        let toBeSendObj = {};
        toBeSendObj['fileName'] = fileName;
        let chartData = [];
        let data = [];
        let obj = {};
        reader.onload = (event) => {
            let result = event.target.result.replace(/\n/ig, ',').split(',');           
            result.map((dataElement) => {                
                if(dataElement.includes('|')) {
                    let newArray = dataElement.split('|');
                    let innerObject = {
                        x: newArray[0],
                        y: newArray[1]
                    }
                    data.push(innerObject);
                } else {
                    if(data.length > 0) {
                        chartData.push(obj);
                        obj['data'] = data;
                        obj = {};
                        data = []                        
                    }  
                    obj['name'] = dataElement                 
                }
            });
            toBeSendObj['chartData'] = chartData;
            this.props.dispatch(saveCsvDataRequest(toBeSendObj));
        };            
        reader.readAsText(file);
    }

    chatHandler(data) {
        this.setState({
            chart : ! this.state.chart,
            data : data
        })
    }

    modalHanlder(e) {
        this.setState({
            chart : ! this.state.chart,
            data : this.props.csvListData.data
        })
    }


    render() {
        return(
            <div>
               {!this.state.chart && <ListFiles handleChangeFile={this.handleChangeFile} dataList={this.state.data} showChartHandler={this.chatHandler}/>}
               {this.state.chart && <ViewLineChart showChartHandler={this.modalHanlder} data={this.state.data}/> }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        csvListData : state.appReducer.data   
    }
}

export default connect(mapStateToProps)(App)