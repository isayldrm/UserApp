import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserConsumer from "../context"


class User extends Component {

    state={
        isVisible:false
    }

    constructor(props){
        super(props)
        this.onClickEvent = this.onClickEvent.bind(this)
    }


    onClickEvent(e){
        this.setState({
            isVisible: !this.state.isVisible
        })
    }

    onDeleteUser =(dispatch,e) =>{
        const {id} = this.props
        //consumer dispatch
        dispatch({type:"DELETE_USER",payload:id})
    }

    render() {
        //destructing
        const {name, salary, department} = this.props
        const {isVisible}=this.state
        //value yı kullanmak ıcın
        return (
        <UserConsumer>
        {
        value=>{
            const{dispatch}= value
            return (
            <div className="col-md-8 mb-4">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                        <h4 className="d-inline" onClick={this.onClickEvent}>{name}</h4>
                        <i className="far fa-trash-alt"
                        style={{cursor:"pointer"}}></i>
                        <i onClick ={this.onDeleteUser.bind(this,dispatch)}/>
                    </div>
                    {
                        isVisible ?<div className="card-body">
                        <p className="card-text">Maaş: {salary}</p>
                        <p className="card-text">Department: {department}</p>
                        
                    </div> :null
                    }             
                </div> 
                
            
             </div>
            )
        }
        }    
        </UserConsumer>
        
        
        
        )
    }
}

User.propTypes = {
    name:PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    department:PropTypes.string.isRequired, 
    id:PropTypes.string.isRequired
}

User.defaultProps={
    name:"Bilgi yok",
    salary:"Bilgi yok",
    department:"Bilgi yok"
}
export default User;