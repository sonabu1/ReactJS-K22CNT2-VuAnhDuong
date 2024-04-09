import React from 'react'

export default function Func_JSX_VuAnhDuong(props) {
    const users = {
        name:"Vu Anh Duong",
        age:20
    }
  return (
    <div>
        <h2>Function component demo</h2>
        <h3>
            Welcome to , {users.name} - {users.age}
        </h3>
        <hr/>
        <h3>
            Props:
            <br/>Fullname: {props.fullname}
            <br/>Age: {props.age}
        </h3>
    </div>
  )
}
