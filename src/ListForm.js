import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import addList from './actions/addList'
import editList from './actions/editList'

class ListForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            name: this.props.list ? this.props.list.name : "",
            id: this.props.list ? this.props.list.id : ""
        }
    }


    handleSubmit(event) {
        event.preventDefault()
        if(!this.props.list){
            this.props.addList(this.state)
        } else {
            this.props.editList(this.state)
        }
        this.setState({ name: "", id: "" })
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
                    <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.name} name="name"/>
                    <input type="submit"/>
                </form>
            )
    }

    render() {
        // debugger
        return (
            <>
            {this.redirectOrRenderForm()}
            </>
        )
    }
}

export default withRouter(connect(null, { addList, editList })(ListForm))
