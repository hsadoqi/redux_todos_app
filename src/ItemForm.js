import React, {Component} from 'react'

export default class ItemForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            inputVal: ""
        }
    }


    handleSubmit(event) {
        event.preventDefault()
        this.props.submitItem(this.state)
        this.setState({ inputVal: "" })
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.inputVal} name="inputVal"/>
                <input type="submit"/>
            </form>
        )
    }
}