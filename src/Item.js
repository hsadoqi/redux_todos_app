import React, { Component } from 'react'

export default class Item extends Component {
    render(){
        return (
            <li>{this.props.item}<button onClick={() => this.props.potato(this.props.item)}>Click</button></li>
        )
    }
}