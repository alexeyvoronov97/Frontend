import React, { Component } from 'react';
import { Row, Form, Button } from 'react-bootstrap';
import qs from 'qs';
import axios from 'axios';

import './login.sass';
import { isEmail, isEmpty, isLength, isContainWhiteSpace } from '../../shared/validator';
import common from '../../common/common';

class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            formData: {}, //register form data
            errors: {}, //field errors
            formSubmitted: false,
            loading: false 
        }
    }

    handleInputChange = (event) => {

        const target = event.target;
        const value = target.value;
        const name = target.name;

        let { formData } = this.state;
        formData[name] = value;

        this.setState({
            formData: formData
        });
    }

    validateRegisterForm = (e) => {

        let errors = {};
        const { formData } = this.state;

        if (isEmpty(formData.email)) {
            errors.email = "Email can't be blank";
        } else if (!isEmail(formData.email)) {
            errors.email = "Please enter a valid email";
        }

        if (isEmpty(formData.password)) {
            errors.password = "Password can't be blank";
        } else if (isContainWhiteSpace(formData.password)) {
            errors.password = "Password should not contain white spaces";
        } else if (!isLength(formData.password, { gte: 6, lte: 16, trim: true })) {
            errors.password = "Password's length must between 6 to 16";
        }

        if (isEmpty(errors)) {
            return true;
        } else {
            return errors;
        }
    }

    register = (e) => {

        e.preventDefault();
    
        let errors = this.validateRegisterForm();
    
        if (errors === true) {
            alert("You are successfully signed in...");
            //window.location.reload();

            var reqBody = {
                email: this.state.formData.email, 
                password: this.state.formData.password
            };

            axios.post(common.server_url + '/user/register', qs.stringify(reqBody)).then(result => {
                localStorage.setItem('user', qs.stringify(result.data));
                console.log(result.data);
            }).catch(err => {
                alert(err);
            });

        } else {
            this.setState({
                errors: errors, 
                formSubmitted: true
            });
        }
        
    }
    
    render() {

        const { errors, formSubmitted } = this.state;

        return (
            <div className="Register">
                <Row>
                    <Form onSubmit={this.register}>
                        <Form.Group controlId="email" validationstate={formSubmitted ? (errors.email ? 'error' : 'success') : null}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" name="email" placeholder="Enter your email" onChange={this.handleInputChange} />
                        { errors.email && 
                            <Form.Text className="text-muted">{errors.email}</Form.Text>
                        }
                        </Form.Group>
                        <Form.Group controlId="password" validationstate={formSubmitted ? (errors.password ? 'error' : 'success') : null}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Enter your password" onChange={this.handleInputChange} />
                        { errors.password && 
                            <Form.Text className="text-muted">{errors.password}</Form.Text>
                        }
                        </Form.Group>
                        <Button type="submit" variant="primary">Sign In</Button>
                    </Form>
                </Row>
            </div>
        )
    }
};

export default Register;