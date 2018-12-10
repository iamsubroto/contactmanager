import React, { Component } from 'react'

class AddContact extends Component {
    constructor(props){
        super(props);
        
        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
    }
    onSubmit = (e) => {
        e.preventDefault();
        const contact = {
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value
        }
        console.log(contact);
    }
    static defaultProps = {
        name: "Subroto Biswas",
        email: "smartcoder500@gmail.com",
        phone: "777-777-7777"
    }
    render() {
        const {name, email, phone } = this.props; 
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                    type="text" 
                    name="name" 
                    className="form-control" 
                    placeholder="Enter name..." 
                    defaultValue={name}
                    ref={this.nameInput}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input 
                    type="text" 
                    name="email" 
                    className="form-control" 
                    placeholder="Enter E-mail..." 
                    defaultValue={email}
                    ref={this.emailInput}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input 
                    type="text" 
                    name="phone" 
                    className="form-control" 
                    placeholder="Enter Phone number..." 
                    defaultValue={phone}
                    ref={this.phoneInput}
                    />
                </div>
                <input 
                type="submit" 
                value="Add Contact" 
                className="btn btn-secondary btn-block" 
                />
            </form>
        </div>
      </div>
    )
  }
}

export default AddContact;