import React from "react";
import AddUser from "./AddUser";
import { AiFillCloseCircle, AiFillEdit } from 'react-icons/ai';


class User extends React.Component {
  user = this.props.user

  constructor(props){
    super(props);
    this.state = {
      editForm: false
    }
  }

  render(){
    return(
        <div className="user" >
            <AiFillCloseCircle onClick={() => this.props.onDelete(this.user.id)} className="delete-icon"/>
            <AiFillEdit onClick={() => {
               this.setState({
                   editForm: !this.state.editForm
               })
             }} className="edit-icon"/>
            <h3>{this.user.first_name} {this.user.last_name}</h3>
            <img src={this.user.avatar}/>
            <p>{this.user.email}</p>
            <b>{this.user.isHappy ? 'Happy :)' : 'Unhappy :('}</b>


            {this.state.editForm && <AddUser user={this.user} onAdd={this.props.onEdit}/>}
        </div>
    )
  }


}


export default User