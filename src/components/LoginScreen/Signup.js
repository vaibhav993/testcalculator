import React from "react"
import { Redirect } from "react-router-dom"
import elements from "../BasicComponents"

export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            retypedPassword: "",
            errorMsg: "",
            userCreated: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUnmount() {
        this.state = {
            username: "",
            password: "",
            retypedPassword: "",
            errorMsg: "",
            userCreated: false
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.state.password.length && (this.state.password === this.state.retypedPassword)) {
            sessionStorage.setItem(this.state.username, this.state.password);
            this.setState({
                userCreated: true
            });

        }else {
            this.setState({
                errorMsg: "Passwords are not matching"
            });
        }

    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return(
            <div>
                {this.state.userCreated
                    ? (
                        <Redirect
                            to={{
                                pathname: "/",
                            }}
                        />
                    )
                    : (
                        <div>
                            <form onSubmit={this.handleSubmit}>
                                <elements.BCInput
                                    name="username"
                                    placeholder="Enter your username"
                                    onChange={this.handleChange}
                                    value={this.state.username}
                                />
                                <elements.BCInput
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    onChange={this.handleChange}
                                    value={this.state.passowrd}
                                />
                                <elements.BCInput
                                    type="password"
                                    name="retypedPassword"
                                    placeholder="Enter your password"
                                    onChange={this.handleChange}
                                    value={this.state.retypedPassword}
                                />
                                <input
                                    type="submit"
                                    value="Submit"
                                >
                                </input>
                            </form>
                            <div>{this.state.errorMsg}</div>
                        </div>
                    )
                }
            </div>
        );
    }
}