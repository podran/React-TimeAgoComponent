import React from 'react'

export default class TimeAgo extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="timeAgo">
                <span>Uploaded {this.props.gap}{this.props.time} ago</span>
            </div>
        );
    }
}