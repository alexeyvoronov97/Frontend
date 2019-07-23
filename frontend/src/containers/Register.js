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
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { registerUser } from "../actions/auth";
import { FormInput } from "../components/auth/form-controls";


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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

class Register extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      firstName: "", 
      lastName: "",
      email: "",
      password: "",
      password2: "", 
    };
  }

  register = async userData => {
    try {
      await this.props.registerUser(userData);
    } catch(err) {
      console.log("async register:", err);
      if(err) {
        throw new SubmissionError(err);
      }
    }

    alert("Sign up successfully");
    this.props.history.push('/login');
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
          <Typography component="h1" variant="h5" align="center">
            Sign up
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit(this.register)}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Field
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  disabled={isFetching}
                  component={FormInput}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  disabled={isFetching}
                  component={FormInput}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  disabled={isFetching}
                  component={FormInput}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  disabled={isFetching}
                  component={FormInput}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  variant="outlined"
                  required
                  fullWidth
                  name="password2"
                  label="Confirm your password"
                  type="password"
                  id="password2"
                  autoComplete="current-password"
                  disabled={isFetching}
                  component={FormInput}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

Register.propTypes = {
  isFetching: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  isFetching: state.auth.isFetching
});

export default compose(
  withStyles(styles), 
  withRouter, 
  connect(
    mapStateToProps, 
    { registerUser }
  ), 
  reduxForm( {
    form: "register", 
    validate: (values, props) => {
      const errors = {};
      if(!values.firstName) errors.firstName = "You must type your first name!";
      if(!values.lastName) errors.lastName = "You must type your last name!";
      if(!values.email) errors.email = "You must type your email address!";
      if(!values.password) errors.password = "You must type your password!";
      if(values.password !== values.password2) errors.password2 = "Your password does not match!";
      if(!values.password2) errors.password2 = "You must confirm your password!";
      return errors;
    }
  })
)(Register);