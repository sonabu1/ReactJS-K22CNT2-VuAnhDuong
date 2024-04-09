import React, { Component, startTransition } from 'react'

export default class Class_VuAnhDuong extends Component {
    constructor(props){
        super(props);
        this.state={
            fullName:"Vu Anh Duong",
            class:"K22CNT2"
        }
    }
    users = {
        name:"Vu Anh Duong",
        age:20
    }
    // ham xu ly su kien
    handleChange=(event)=>{
        this.setState({
            fullName:"Bach Thi Lo",
        })
    }
    render() {
    return (
      <div>
        <h2> Class component demo </h2>
        {this.users.name} - {this.users.age}

        <hr/>
        <h3> info: {this.props.info} </h3>
        <h3> time: {this.props.time} </h3>
        <hr/>
        <h3>
            State:
            Fullname: {this.state.fullName}
            <br/>
            Class: {this.state.class}
        </h3>
        <button onClick={this.handleChange}>Change name</button>
      </div>
    )
  }
}
