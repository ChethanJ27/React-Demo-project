import React, { Component } from "react"
import Tableform from "./Tableform"
import Button from "@material-ui/core/Button"
import SaveIcon from "@material-ui/icons/Save"
import TextField from "@material-ui/core/TextField"
import { Container, Paper, Typography } from "@material-ui/core"
import "./styleform.css"
import Grid from "@material-ui/core/Grid"
import { withStyles } from "@material-ui/core/styles"
import { createTheme, ThemeProvider } from "@material-ui/core/styles"
import { orange } from "@material-ui/core/colors"

const theme = createTheme({
  palette: {
    secondary: orange,
  },
})

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
    const { classes } = this.props
    return (
      <Container className={classes.root}>
        <form noValidate autoComplete="off" onSubmit={this.handleSave}>
          <Paper className={classes.paper} elevation={3}>
            <Grid
              container
              spacing={4}
              justifyContent="flex-end"
              className={classes.gridHead}
            >
              <Grid item>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  endIcon={<SaveIcon />}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
            <Grid container spacing={3} className={classes.gridHead}>
              <Grid item xs={6}>
                <TextField
                  label="First Name"
                  name="firstname"
                  variant="outlined"
                  required="true"
                  size="small"
                  fullWidth
                  autoFocus="true"
                  value={this.state.firstname}
                  onChange={this.handleInputChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Last Name"
                  name="lastname"
                  variant="outlined"
                  size="small"
                  fullWidth
                  required="true"
                  value={this.state.lastname}
                  onChange={this.handleInputChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Email-ID"
                  name="email"
                  fullWidth
                  variant="outlined"
                  size="small"
                  required="true"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  // label="Date Of Birth"
                  type="Date"
                  name="dob"
                  variant="outlined"
                  fullWidth
                  size="small"
                  required="true"
                  value={this.state.dob}
                  onChange={this.handleInputChange}
                />
              </Grid>
            </Grid>
          </Paper>
        </form>
        <Paper className={classes.paperTable} elevation={3}>
          <Grid
            container
            justifyContent="flex-start"
            className={classes.gridHead}
          >
            <Grid item>
              <Typography variant="h6" color="primary">
                UserList
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <ThemeProvider theme={theme}>
                <Tableform users={users} />
              </ThemeProvider>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    )
  }
}

const styles = (theme) => ({
  gridHead: {
    marginTop: 5,
    marginBottom: 5,
  },
  paper: {
    marginTop: 5,
    padding: 20,
  },
  paperTable: {
    marginTop: 5,
    padding: 20,
    backgroundColor: "#eee",
  },
})

export default withStyles(styles)(Form)

{
  /* <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email-ID</th>
                <th>Date Of Birth</th>
              </tr>
            </thead>
            <tbody>{users.length ? users.map(this.renderUser) : null}</tbody>
          </table> */
}
