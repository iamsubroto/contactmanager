import React, {Component} from 'react';
import axios from 'axios'
import { stat } from 'fs';

const Context = React.createContext();
const reducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_CONTACT': 
            return  {
                ...state,
                contacts: state.contacts.filter(
                    contact => contact.id !== action.payload
                )
            };
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            };  
        case 'UPDATE_CONTACT':
            return {
                ...state,
                contacts:state.contacts.map( contact => 
                    contact.id === action.payload.id ? (contact = action.payload) : contact)
            }
        // case 'TOGGLE_CONTACT':
        //     return  {
        //         ...state,
        //         contacts: state.contacts.map(
        //             contact => {
        //                 if(contact.id == action.payload) {
        //                     contact.isProtected = !contact.isProtected;
        //                 }
        //                 return contact;
        //             }
        //         )
        //     };
        default:
            return state;
    }
}
export class Provider extends Component {
    state = {
        contacts: [
            // {
            //     id: 1,
            //     name: "Subroto Biswas",
            //     email: "biswas.subroto@gmail.com",
            //     phone: "222-222-2222",
            //     isProtected: false,
            // },
            // {
            //     id: 2,
            //     name: "Shivam Poddar",
            //     email: "poddar.shivam344@rediffmail",
            //     phone: "888-888-8888",
            //     isProtected: true,
            // },
            // {
            //     id: 3,
            //     name: "Rahul Roy",
            //     email: "Rahul_Roy@hotmail.com",
            //     phone: "444-444-4444",
            //     isProtected: false,
            // }   
       ],
       dispatch: action => {
           this.setState(state => reducer(state, action));
       }
    }
    async componentDidMount() {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");

        this.setState({contacts: res.data});
            
    }
    render() {
        return (
            <Context.Provider value={this.state}>
            {this.props.children}
            </Context.Provider>
            
        )
    }
}

export const Consumer = Context.Consumer;

