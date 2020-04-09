import React, { Component } from 'react'
import axios from "axios"
const UserContext = React.createContext()
//provider ve consumer sağlar bize

const reducer =(state,action)=>{
  switch(action.type){
    case "DELETE_USER":
      return{
        ...state,//eski state yerlestırılıp asagıda guncellenir
        users:state.users.filter(user => action.payload !==user.id)
      }
      case "ADD_USER":
        return{
          ...state,
          users:[...state.users,action.payload]
        }
      default:
        return state
  }
}
export class UserProvider extends Component {
    
    state={
        users:[],
        //action alıyor
        //onceki state iyle beraber reducera yolluyor actionı
        dispatch:action=>{
          this.setState(state => reducer(state,action))
        }
      }
      componentDidMount =async ()=> {
        const response = await axios.get("http://localhost:3004/users")
        this.setState({
          users:response.data
        })
      }
      
    
    render() {
        return (
            //user degerlerini gecirmek icin this.state kullanıldı
            <UserContext.Provider value = {this.state}> 
                {this.props.children}
            </UserContext.Provider>
        )
    }
}
const UserConsumer = UserContext.Consumer

export default UserConsumer