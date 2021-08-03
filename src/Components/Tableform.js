import React from "react"

function Tableform({ users }) {
  let renderUser = (user, index) => {
    console.log(user.lastname)
    return (
      <tr key={index}>
        <td>{user.firstname}</td>
        <td>{user.lastname}</td>
        <td>{user.email}</td>
        <td>{user.dob}</td>
      </tr>
    )
  }

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email-ID</th>
            <th>Date Of Birth</th>
          </tr>
        </thead>
        <tbody>{users.map(renderUser)}</tbody>
      </table>
    </div>
  )
}

export default Tableform
