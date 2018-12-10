import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Consumer } from '../../context';
import axios from 'axios';

class Contact extends Component {
  state = {
    showContactInfo: false
  }
  onShowClick = e => {
    this.setState({showContactInfo: !this.state.showContactInfo});
  };
  onDeleteClick = async(id, isProtected, dispatch) => {
    await axios.delete
    (`https://jsonplaceholder.typicode.com/users/${id}`);

    dispatch({
      type: 'DELETE_CONTACT',
      payload: id
    })

  }
  toggleProtection = (id, dispatch) => {
    console.log("locked");
    dispatch({type: 'TOGGLE_CONTACT', payload: id});
  }
  render() {
    const {name, email, phone, isProtected, id} = this.props.contact;
    const { showContactInfo } = this.state;

    return (
        <Consumer>
        {value => {
          const { dispatch } = value;
          return (
          <div className="card card-body mb-3">
            <h4>
            {name} 
            <i onClick={this.onShowClick} className="fa fa-sort-down" style={{cursor: 'pointer'}}></i>
            <i className="fas fa-times" style={{cursor: 'pointer', float: 'right', color: 'red'}} onClick={this.onDeleteClick.bind(this, id, isProtected, dispatch)}></i>
            <Link to={`contact/edit/${id}`}>
              <i 
              className="fas fa-pencil-alt"
              style={{
                cursor: 'pointer',
                float: 'right',
                color: '#000',
                marginRight: '1rem'
              }}
              >
              </i>
            </Link>
            </h4>
            {showContactInfo ? (<ul className="list-group">
                <li className="list-group-item">Email: {email}</li>
                <li className="list-group-item">Phone: {phone}</li>
            </ul>):null }
        </div>
          )
        }}
    </Consumer>
    )
  }
}

export default Contact;