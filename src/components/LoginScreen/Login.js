import React from "react"
import { Link, Redirect } from "react-router-dom"
import elements  from "../BasicComponents"


export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            isLogin: false,
            msg: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUnmount() {
        this.state = {
            username: "",
            password: "",
            msg:""
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        if( sessionStorage.getItem(this.state.username) === this.state.password ) {
            this.setState({
                isLogin: true
            })
        } else {
            this.setState({
                msg: "Wrong username and password"
            })
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.isLogin
                        ? <Redirect
                            to={{
                                pathname: "/private",
                            }}
                        />
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
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                    />
                                    <input
                                        type="submit"
                                        value="Login"
                                    ></input>
                                </form>
                                <div>{this.state.msg}</div>
                                <Link to="signup">New user?</Link>
                            </div>
                        )
                }
            </div>
        );
    }
}