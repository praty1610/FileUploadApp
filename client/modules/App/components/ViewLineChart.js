import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Highcharts from 'highcharts';

class ViewLineChart extends Component { 
    constructor(props) {
        super(props)
        this.state = {
            showChart: false,
            chartData: ''
        }
    } 

    componentWillMount() {
        this.setData(this.props.data)
    }

    setData(res) {                 
        this.setState({
        showChart: true,
        chartData: res.chartData
        });        
    }

    componentDidMount() {
        var options = {
            title: {
              text: 'User Data'
            },
    
            yAxis: {
              title: {
                  text: 'Score'
              }
            },
            legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'middle'
            },    
            series: this.state.chartData    
        };
        this.chart = new Highcharts["Chart"](
            this.chartRef,
            options
        );
    }
    
    componentWillUnmount() {
        this.chart.destroy();
    }

    render() {
        if(this.state.showChart) {
            return (
                <div className='whiteCard'>
                    <Button className='btn btn-primary' onClick={(e) => this.props.showChartHandler()}>Back</Button>
                    <div ref={(chart) => this.chartRef = chart}></div> 
                </div>
            )
        } else {
            return null
        }
    }
}

export default ViewLineChart

