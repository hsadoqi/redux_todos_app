import React, {Component} from 'react'
import {Redirect, withRouter} from 'react-router-dom'

class ListForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            inputVal: "", 
            loggedIn: true
        }
    }


    handleSubmit(event) {
        event.preventDefault()
        this.props.submitList(this.state)
        this.setState({ inputVal: "" })
        this.props.history.push('/lists')
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    redirectOrRenderForm = () => {
        if(this.state.loggedIn){
            return (
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.inputVal} name="inputVal"/>
                    <input type="submit"/>
                </form>
            )
        } else {
            return <Redirect to="/lists"/>
        }
    }

    render() {
        return (
            <>
            {this.redirectOrRenderForm()}
            </>
        )
    }
}

export default withRouter(ListForm)