import React, { Component } from "react";
import compose from "recompose/compose";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Field, reduxForm, SubmissionError } from "redux-form";
import PropTypes from "prop-types";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { loginUser } from "../actions/auth";
import { FormInput } from "../components/form-controls";

const styles = (theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  componentDidMount() {
    if(this.props.isAuthenticated) {
      this.props.history.push("/");
    }
  }
  componentDidUpdate() {
    if(this.props.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  login = async userData => {
    try{
      await this.props.loginUser(userData);
    } catch(err) {
      if(err.response) {
        throw new SubmissionError(err.response.data);
      }
    }

    alert("Sign in successfully");
  }


  render() {
    const { classes, handleSubmit, isFetching } = this.props;
 
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" >
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit(this.login)}>
            <Field
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              disabled={isFetching}
              component={FormInput}
            />
            <Field
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              component={FormInput}
              disabled={isFetching}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
            {isFetching && <CircularProgress size={25} thickness={10} />}
            Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

Login.propTypes = {
  isFetching: PropTypes.bool.isRequired, 
  isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  isFetching: state.auth.isFetching, 
  isAuthenticated: state.auth.isAuthenticated
})

export default compose(
  withStyles(styles),     // makeStyles -> this.props.classess
  withRouter,             // this.props.history -> redirect
  connect(                // connect with store
    mapStateToProps,      // this.state -> this.props
    { loginUser }         // action(which calls dispatch) -> this.props.loginUser
  ), 
  reduxForm({             // update data in <Field>
    form: "login", 
    validate: (values, props) => {  // handle input errors
      const errors = {};
      if(!values.email) errors.email = "You must type your email address!";
      if(!values.password) errors.password = "You must type your password!";
      return errors;
    }
  })
)(Login);