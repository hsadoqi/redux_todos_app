import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import addList from './actions/addList'

class ListForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            name: "",
            id: Math.floor(Math.random() * Math.floor(1000))
        }
    }


    handleSubmit(event) {
        event.preventDefault()
        this.props.addList(this.state)
        // this.props.submitList(this.state)
        this.setState({ inputVal: "" })
        this.props.history.push('/lists')
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    redirectOrRenderForm = () => {
            return (
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.inputVal} name="name"/>
                    <input type="submit"/>
                </form>
            )
    }

    render() {
        return (
            <>
            {this.redirectOrRenderForm()}
            </>
        )
    }
}

export default withRouter(connect(null, { addList })(ListForm))