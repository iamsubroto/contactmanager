import React, { Component } from 'react'

 class Test extends Component {
    state = {
        title: '',
        id: ''
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(data => this.setState({
                title: data.title,
                id: data.id
            }))
        }
    //  componentWillMount() {
    //      console.log("componentwillmount");
    //  }
  render() {
      const {id, title } = this.state;
    return (
      <div>
        <h1>Test</h1>
        <h4>{id}</h4>
        <p>{title}</p>
      </div>
    )
  }
}

export default Test
