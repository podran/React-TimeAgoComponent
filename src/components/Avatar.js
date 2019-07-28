import React from 'react';
import TimeAgo from './TimeAgo'

const SECOND = 1000;


export default class Avatar extends React.Component{
    constructor(props){
        super(props);
        this.date = new Date().getTime();
        this.dateCounter = new Date().getTime() / 1000;
        this.state = {
            gap: 0,
            time: 's' 
        };
        setInterval(diffCalc.bind(this), SECOND);
        this.imgStyle = {
            width: this.props.width, 
            borderRadius: this.props.shape===true ? '50%' : '0'
        }
    }
    render(){
        return (
            <div className="avatar">
                <img src={this.props.url} alt={this.props.alt} style={this.imgStyle} />
                <TimeAgo gap={this.state.gap} time={this.state.time} />
            </div>
        );
    }
}


function diffCalc(){
    this.dateCounter = new Date().getTime();
    var res = Math.abs(this.dateCounter - this.date) / 1000;
    let newTime = '';
    let newGap = 0;
    if(Math.floor(res / 3600) % 24){
        newGap = Math.floor(res / 3600) % 24;
        newTime = 'h';
    } else if( Math.floor(res / 60) % 60) {
        newGap = Math.floor(res / 60) % 60;
        newTime = 'm';
    } else if(res % 60) {
        newGap = Math.floor(res % 60);
        newTime = 's';
    }
    this.setState({
        gap: newGap,
        time: newTime
    })
}