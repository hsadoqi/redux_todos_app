import React, { Component } from 'react'

class ItemForm extends Component {
    constructor(){
        super()
        this.state = {
            content: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }


    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.content} name="content"/>
                <input type="submit"/>
            </form>
        )
    }
}

export default ItemForm