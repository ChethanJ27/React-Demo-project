import React, { Component } from "react"

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      dob: null,
    }
  }

  handleSave = (e) => {
    e.preventDefault()
  }

  handleChange = (e) => {
    this.setState({
      username: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleSave}>Save</button>
        <form>
          <label>UserName</label>
          <input
            type="text"
            placeholder="Enter UserName"
            value={this.firstname}
            onChange={this.handleChange}
          />
        </form>
      </div>
    )
  }
}

export default Form
