import React from "react"

const Formtable = ({ data }) => {
  let renderUser = (user, index) => {
    return (
      <tr key={index}>
        <td>{user.firstname.firstname}</td>
        <td>{user.lastname.lastname}</td>
        <td>{user.email.email}</td>
        <td>{user.dob.dob}</td>
      </tr>
    )
  }
  console.log(data)
  return <React.Fragment>{data.map(renderUser)}</React.Fragment>
}

export default Formtable
