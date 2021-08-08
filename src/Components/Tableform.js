import React from "react"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"
import { Typography } from "@material-ui/core"
import "./styleform.css"

function Tableform({ users }) {
  let renderUser = (user, index) => {
    console.log(user.lastname)
    return (
      <TableRow key={index}>
        <TableCell align="center">
          <Typography>{user.firstname}</Typography>
        </TableCell>
        <TableCell align="center">
          <Typography>{user.lastname}</Typography>
        </TableCell>
        <TableCell align="center">
          <Typography>{user.email}</Typography>
        </TableCell>
        <TableCell align="center">
          <Typography>{user.dob}</Typography>
        </TableCell>
      </TableRow>
    )
  }

  return (
    <div className="table">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <Typography color="secondary">First Name</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography color="secondary">Last Name</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography color="secondary">Email-ID</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography color="secondary">Date Of Birth</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{users.map(renderUser)}</TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Tableform
