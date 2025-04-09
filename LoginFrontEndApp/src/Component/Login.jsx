import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailId: '',
            userType: '',
            password: ''
        };
    }

    handlechange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);

        axios.post("http://localhost:8081/Login", this.state)
            .then(response => {
                console.log(response);
                console.log(response.data);
                // You can redirect here if needed
            })
            .catch(error => {
                console.log(error);
                alert(error.response.data);
            });
    }

    render() {
        const { emailId, userType, password } = this.state;

        return (
            <div className="main">

                <div className="form-container">
                    <form className="form" onSubmit={this.submitHandler}>

                        <label className="label1" htmlFor="emailId">Email ID</label>
                        <input
                            className="input"
                            type="text"
                            name="emailId"
                            value={emailId}
                            placeholder="chirsevans7@gmail.com"
                            onChange={this.handlechange}
                        />

                        <label>User Type</label><br />
                        <select
                            className="input"
                            name="userType"
                            value={userType}
                            onChange={this.handlechange}
                        >
                            <option value="">-- Select --</option>
                            <option value="Doctor">Doctor</option>
                            <option value="Patient">Patient</option>
                            <option value="Librarian">Librarian</option>
                            <option value="LibraryStudent">LibraryStudent</option>
                            <option value="Admin">Admin</option>
                        </select><br />

                        <label className="label1" htmlFor="password">Password</label>
                        <input
                            className="input"
                            type="password"
                            name="password"
                            value={password}
                            placeholder="password"
                            onChange={this.handlechange}
                        />

                        <button className="submit" type="submit">
                            Login
                        </button>

                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
