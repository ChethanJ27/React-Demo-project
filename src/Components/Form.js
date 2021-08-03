import React, { Component } from "react"
import Formtable from "./Formtable"
import "./styleform.css"
import Tableform from "./Tableform"

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: [],
      firstname: "",
      lastname: "",
      email: "",
      dob: "",
    }
  }

  handleSave = (e) => {
    e.preventDefault()
    // const { firstname, lastname, email, dob } = this.state
    // alert(this.state.firstname)
    let obj = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      dob: this.state.dob,
    }
    this.setState({
      users: [...this.state.users, obj],
      firstname: "",
      lastname: "",
      email: "",
      dob: "",
    })
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  renderUser = (user, index) => {
    return (
      <tr key={index}>
        <td>{user.firstname}</td>
        <td>{user.lastname}</td>
        <td>{user.email}</td>
        <td>{user.dob}</td>
      </tr>
    )
  }

  render() {
    // console.log(this.state.users)
    const { users } = this.state
    return (
      <div>
        <form onSubmit={this.handleSave}>
          <div className="savebtn">
            <button className="btn" type="submit">
              Save
            </button>
          </div>
          <div className="inputform">
            <label>FirstName</label>
            <input
              type="text"
              name="firstname"
              placeholder="Enter FirstName"
              value={this.state.firstname}
              onChange={this.handleInputChange}
            />
            <label>LastName</label>
            <input
              type="text"
              name="lastname"
              placeholder="Enter LastName"
              value={this.state.lastname}
              onChange={this.handleInputChange}
            />
            <label>E-mail</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email-Id"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <label>Date-Of-Birth</label>
            <input
              type="date"
              name="dob"
              placeholder="Enter Date Of Birth"
              value={this.state.dob}
              onChange={this.handleInputChange}
            />
          </div>
        </form>
        <div className="table">
          {/* <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email-ID</th>
                <th>Date Of Birth</th>
              </tr>
            </thead>
            {/* <tbody>{users.length ? users.map(this.renderUser) : null}</tbody> */}
          {/* <tbody>
              <Formtable data={users} />
            </tbody>
          </table> */}
          <Tableform users={users} />
        </div>
      </div>
    )
  }
}

export default Form
