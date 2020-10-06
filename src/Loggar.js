import React, { Component } from 'react';

class Loggar extends Component{
    constructor(props){
        super(props);
        console.log('constructor running');
    }

    componentWillMount(){
        console.log('Componen tWill Mount Method');
    }

    render(){
        console.log('render Method');
        return(
            <h1>{this.props.time}</h1>
        )
    }
}

export default Loggar;